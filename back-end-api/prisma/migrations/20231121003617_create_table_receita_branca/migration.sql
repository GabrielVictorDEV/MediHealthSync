/*
  Warnings:

  - Added the required column `email` to the `receitaBranca` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `receitaBranca` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_receitaBranca" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "crm" TEXT NOT NULL,
    "dataPrescricao" TEXT NOT NULL,
    "estadoPrescrito" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nomeMedico" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "orgaoEmissor" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "telefone" TEXT NOT NULL
);
INSERT INTO "new_receitaBranca" ("bairro", "cep", "cidade", "crm", "dataPrescricao", "estadoPrescrito", "id", "nome", "nomeMedico", "numero", "orgaoEmissor", "rg", "rua", "telefone") SELECT "bairro", "cep", "cidade", "crm", "dataPrescricao", "estadoPrescrito", "id", "nome", "nomeMedico", "numero", "orgaoEmissor", "rg", "rua", "telefone" FROM "receitaBranca";
DROP TABLE "receitaBranca";
ALTER TABLE "new_receitaBranca" RENAME TO "receitaBranca";
CREATE UNIQUE INDEX "receitaBranca_email_key" ON "receitaBranca"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
