import { prisma } from '../prisma';

export const getHistory = async ({
  shopId,
  plu,
  action,
  dateFrom,
  dateTo,
  page,
  limit,
}: {
  shopId?: string;
  plu?: string;
  action?: string;
  dateFrom?: string;
  dateTo?: string;
  page: number;
  limit: number;
}) => {
  const skip = (page - 1) * limit;

  const where: any = {};
  if (shopId) where.shopId = Number(shopId);
  if (plu) where.plu = plu;
  if (action) where.action = action;
  if (dateFrom || dateTo) {
    where.createdAt = {
      ...(dateFrom ? { gte: new Date(dateFrom) } : {}),
      ...(dateTo ? { lte: new Date(dateTo) } : {}),
    };
  }

  const [history, total] = await Promise.all([
    prisma.history.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.history.count({ where }),
  ]);

  return { history, total, page, pages: Math.ceil(total / limit) };
};

export const createHistory = async ({
  shopId,
  plu,
  action,
}: {
  shopId: number;
  plu: string;
  action: string;
}) => {
  return prisma.history.create({
    data: { shopId, plu, action },
  });
};
