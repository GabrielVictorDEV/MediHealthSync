import { type Request, type Response } from 'express'
import { GetReceitaAntimicrobianaUseCase } from './GetReceitaAntimicrobianaUseCase'

export class GetReceitaAntimicrobianaController {
  async handle (req: Request, res: Response) {
    const getReceitaAntimicrobianaUseCase = new GetReceitaAntimicrobianaUseCase()

    const result = await getReceitaAntimicrobianaUseCase.execute()

    return res.status(200).json(result)
  }
}
