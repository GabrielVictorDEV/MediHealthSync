/*
  Warnings:

  - You are about to drop the column `name` on the `receitaBranca` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_receitaBranca" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
