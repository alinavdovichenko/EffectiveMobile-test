-- CreateTable
CREATE TABLE "Action" (
    "id" SERIAL NOT NULL,
    "shopId" INTEGER NOT NULL,
    "plu" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);
