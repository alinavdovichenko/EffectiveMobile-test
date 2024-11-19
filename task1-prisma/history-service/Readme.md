## Структура каталогов
## Сервис истории действий (history-service, на TypeScript):

history-service/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── controllers/
│   │   └── historyController.ts
│   ├── routes/
│   │   └── historyRoutes.ts
│   ├── prisma.ts
│   ├── app.ts
│   └── utils/
│       └── pagination.ts
├── .env
├── package.json
├── tsconfig.json
├── README.md

## Запуск сервиса:
npx ts-node src/app.ts