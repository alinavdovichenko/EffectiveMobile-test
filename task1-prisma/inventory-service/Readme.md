## Структура каталогов
## Сервис остатков товаров (inventory-service, на JavaScript):

inventory-service/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── controllers/
│   │   ├── productController.js
│   │   └── inventoryController.js
│   ├── routes/
│   │   ├── productRoutes.js
│   │   └── inventoryRoutes.js
│   ├── prisma.js
│   └── app.js
├── .env
├── package.json
├── README.md

## Запуск сервиса:
node src/app.js