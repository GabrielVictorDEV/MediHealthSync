import { type receitaBranca } from '@prisma/client'
import { prisma } from '../../../../prisma/client'

export class GetReceitaBrancaUseCase {
  async execute (): Promise<receitaBranca[]> {
    const users = await prisma.receitaBranca.findMany({
      orderBy: {
        nome: 'asc'
      }
    })

    return users
  }
}
