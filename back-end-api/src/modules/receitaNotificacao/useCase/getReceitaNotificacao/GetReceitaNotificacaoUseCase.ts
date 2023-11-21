import { type receitaNotificacao } from '@prisma/client'
import { prisma } from '../../../../prisma/client'

export class GetReceitaNotificacaoUseCase {
  async execute (): Promise<receitaNotificacao[]> {
    const users = await prisma.receitaNotificacao.findMany({
      orderBy: {
        nome: 'asc'
      }
    })

    return users
  }
}
