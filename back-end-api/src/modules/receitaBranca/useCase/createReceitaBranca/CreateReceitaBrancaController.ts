import { type Request, type Response } from 'express'
import { CreateReceitaBrancaUseCase } from './CreateReceitaBrancaUseCase'

export class CreateReceitaBrancaController {
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
      telefone
    } = req.body

    const createReceitaBrancaUseCase = new CreateReceitaBrancaUseCase()

    const result = await createReceitaBrancaUseCase.execute({
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
    })

    return res.status(201).json(result)
  }
}
