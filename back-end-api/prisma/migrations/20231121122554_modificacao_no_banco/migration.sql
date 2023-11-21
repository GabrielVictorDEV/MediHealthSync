/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `email` on the `receitaBranca` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "users";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_receitaBranca" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
INSERT INTO "new_receitaBranca" ("bairro", "cep", "cidade", "crm", "dataPrescricao", "estadoPrescrito", "id", "name", "nome", "nomeMedico", "numero", "orgaoEmissor", "rg", "rua", "telefone") SELECT "bairro", "cep", "cidade", "crm", "dataPrescricao", "estadoPrescrito", "id", "name", "nome", "nomeMedico", "numero", "orgaoEmissor", "rg", "rua", "telefone" FROM "receitaBranca";
DROP TABLE "receitaBranca";
ALTER TABLE "new_receitaBranca" RENAME TO "receitaBranca";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
