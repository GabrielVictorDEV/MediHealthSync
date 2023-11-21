import { type receitaAntimicrobiana } from '@prisma/client'
import { prisma } from '../../../../prisma/client'
import { type CreateReceitaAntimicrobianaDTO } from '../../dtos/createReceitaAntimicrobianaDTO'

export class CreateReceitaAntimicrobianaUseCase {
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
    nomePaciente,
    idade
  }: CreateReceitaAntimicrobianaDTO): Promise<receitaAntimicrobiana> {
    // Cria Usuario;
    const receitaAntimicrobiana = await prisma.receitaAntimicrobiana.create({
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
        nomePaciente,
        idade
      }
    })

    return receitaAntimicrobiana
  }
}
