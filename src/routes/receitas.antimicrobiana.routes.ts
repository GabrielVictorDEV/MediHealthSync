import { Router } from 'express'
import { CreateReceitaAntimicrobianaController } from '../modules/receitaAntimicrobiana/useCase/createReceitaAntimicrobiana/CreateReceitaAntimicrobianaController'
import { GetReceitaAntimicrobianaController } from '../modules/receitaAntimicrobiana/useCase/getReceitaAntimicrobiana/GetReceitaAntimicrobianaController'

const createReceitaAntimicrobianaController = new CreateReceitaAntimicrobianaController()
const getReceitaAntimicrobianaController = new GetReceitaAntimicrobianaController()

const receitaAntimicrobianaRoutes = Router()

receitaAntimicrobianaRoutes.post('/', createReceitaAntimicrobianaController.handle)
receitaAntimicrobianaRoutes.get('/', getReceitaAntimicrobianaController.handle)
// userRoutes.get("/", getAllUsersController.handle)

export { receitaAntimicrobianaRoutes }
