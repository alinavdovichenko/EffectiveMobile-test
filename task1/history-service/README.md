## Структура каталогов
## history-service (на TypeScript)
history-service/
├── src/
│   ├── controllers/
│   │   └── historyController.ts
│   ├── models/
│   │   └── actionModel.ts
│   ├── routes/
│   │   └── historyRoutes.ts
│   ├── services/
│   │   └── historyService.ts
│   ├── database.ts
│   └── app.ts
├── .env
├── package.json
├── tsconfig.json
├── README.md

## GET /api/history/
Fetches logged actions with filters.

Query Parameters:
shop_id: Filter by shop ID.
plu: Filter by product PLU.
dateFrom / dateTo: Filter by timestamp range.
action: Filter by action type.
page: Page number for pagination.
limit: Number of results per page.
