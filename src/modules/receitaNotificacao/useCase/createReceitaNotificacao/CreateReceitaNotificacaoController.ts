import { type Request, type Response } from 'express'
import { CreateNotificacaoUseCase } from './CreateReceitaNotificacaoUseCase'

export class CreateReceitaNotificacaoController {
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
      numeroNotificacao
    } = req.body

    const createNotificacaoUseCase = new CreateNotificacaoUseCase()

    const result = await createNotificacaoUseCase.execute({
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
    })

    return res.status(201).json(result)
  }
}
