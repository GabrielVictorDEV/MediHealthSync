import { type receitaBranca } from '@prisma/client'
import { prisma } from '../../../../prisma/client'
import { type CreateReceitaBrancaDTO } from '../../dtos/createReceitaBrancaDTO'

export class CreateReceitaBrancaUseCase {
  async execute ({
    nome,
    bairro,
    cep,
    cidade,
    crm,
    dataPrescricao,
    estadoPrescrito,
    nomeMedico,
    numero,
    orgaoEmissor,
    rg,
    rua,
    telefone
  }: CreateReceitaBrancaDTO): Promise<receitaBranca> {
    // Cria Usuario;
    const receitaBranca = await prisma.receitaBranca.create({
      data: {
        nome,
        bairro,
        cep,
        cidade,
        crm,
        dataPrescricao,
        estadoPrescrito,
        nomeMedico,
        numero,
        orgaoEmissor,
        rg,
        rua,
        telefone
      }
    })

    return receitaBranca
  }
}
