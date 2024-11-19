/*
  Warnings:

  - You are about to drop the `Action` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Action";

-- CreateTable
CREATE TABLE "History" (
    "id" SERIAL NOT NULL,
    "shopId" INTEGER NOT NULL,
    "plu" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);
