import { type Request, type Response } from 'express'
import { GetReceitaBrancaUseCase } from './GetReceitaBrancaUseCase'

export class GetReceitaBrancaController {
  async handle (req: Request, res: Response) {
    const getReceitaBrancaUseCase = new GetReceitaBrancaUseCase()

    const result = await getReceitaBrancaUseCase.execute()

    return res.status(200).json(result)
  }
}
