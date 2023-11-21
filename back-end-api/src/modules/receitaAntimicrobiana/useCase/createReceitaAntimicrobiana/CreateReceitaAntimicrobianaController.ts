import { type Request, type Response } from 'express'
import { CreateReceitaAntimicrobianaUseCase } from './CreateReceitaAntimicrobianaUseCase'

export class CreateReceitaAntimicrobianaController {
  async handle (req: Request, res: Response) {
    const {
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
    } = req.body

    const createReceitaAntimicrobianaUseCase = new CreateReceitaAntimicrobianaUseCase()

    const result = await createReceitaAntimicrobianaUseCase.execute({
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
    })

    return res.status(201).json(result)
  }
}
