import { type Request, type Response } from 'express'
import { GetReceitaNotificacaoUseCase } from './GetReceitaNotificacaoUseCase'

export class GetReceitaNotificacaoController {
  async handle (req: Request, res: Response) {
    const getReceitaNotificacaoUseCase = new GetReceitaNotificacaoUseCase()

    const result = await getReceitaNotificacaoUseCase.execute()

    return res.status(200).json(result)
  }
}
