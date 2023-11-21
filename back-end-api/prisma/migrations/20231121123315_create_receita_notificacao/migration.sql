-- CreateTable
CREATE TABLE "receitaNotificacao" (
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
    "telefone" TEXT NOT NULL,
    "numeroNotificacao" TEXT NOT NULL
);
