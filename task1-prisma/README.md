## Структура каталогов
project/
├── inventory-service/      # Сервис остатков товаров (на JavaScript)
│   ├── prisma/
│   │   └── schema.prisma   # Схема Prisma для товаров и остатков
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── inventoryController.js  # Логика запросов для остатков
│   │   │   └── productController.js   # Логика запросов для товаров
│   │   ├── routes/
│   │   │   ├── inventoryRoutes.js     # Маршруты для остатков
│   │   │   └── productRoutes.js       # Маршруты для товаров
│   │   ├── prisma.js                  # Настройка Prisma Client
│   │   └── app.js                     # Основной файл сервера
│   ├── .env                           # Переменные окружения
│   ├── package.json
│   └── README.md
│
├── history-service/        # Сервис истории действий (на TypeScript)
│   ├── prisma/
│   │   └── schema.prisma   # Схема Prisma для истории действий
│   ├── src/
│   │   ├── controllers/
│   │   │   └── historyController.ts   # Логика запросов для истории
│   │   ├── routes/
│   │   │   └── historyRoutes.ts       # Маршруты для истории
│   │   ├── prisma.ts                  # Настройка Prisma Client
│   │   └── app.ts                     # Основной файл сервера
│   ├── .env                           # Переменные окружения
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
