/*
  Warnings:

  - You are about to drop the `MovieRent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `movies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MovieRent";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "movies";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "users";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "receitaBranca" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "crm" TEXT NOT NULL,
    "dataPrescricao" TEXT NOT NULL,
    "estadoPrescrito" TEXT NOT NULL,
    "nomeMedico" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "orgaoEmissor" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "telefone" TEXT NOT NULL
);
