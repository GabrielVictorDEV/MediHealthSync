import { type receitaAntimicrobiana } from '@prisma/client'
import { prisma } from '../../../../prisma/client'

export class GetReceitaAntimicrobianaUseCase {
  async execute (): Promise<receitaAntimicrobiana[]> {
    const users = await prisma.receitaAntimicrobiana.findMany({
      orderBy: {
        nome: 'asc'
      }
    })

    return users
  }
}
