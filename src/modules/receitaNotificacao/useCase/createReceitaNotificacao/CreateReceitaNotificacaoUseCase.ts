import { type receitaNotificacao } from '@prisma/client'
import { prisma } from '../../../../prisma/client'
import { type CreateReceitaNotificacaoDTO } from '../../dtos/createReceitaNotificacaoDTO'

export class CreateNotificacaoUseCase {
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
    telefone,
    numeroNotificacao
  }: CreateReceitaNotificacaoDTO): Promise<receitaNotificacao> {
    // Cria Usuario;
    const receitaBranca = await prisma.receitaNotificacao.create({
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
        telefone,
        numeroNotificacao
      }
    })

    return receitaBranca
  }
}
