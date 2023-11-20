import { Router } from 'express'
import { CreateReceitaBrancaController } from '../modules/receitaBranca/useCase/createReceitaBranca/CreateReceitaBrancaController'
import { GetReceitaBrancaController } from '../modules/receitaBranca/useCase/getReceitaBranca/GetReceitaBrancaController'

const createReceitaBrancaController = new CreateReceitaBrancaController()
const getReceitaBrancaController = new GetReceitaBrancaController()

const receitaBrancaRoutes = Router()

receitaBrancaRoutes.post('/', createReceitaBrancaController.handle)
receitaBrancaRoutes.get('/', getReceitaBrancaController.handle)
// userRoutes.get("/", getAllUsersController.handle)

export { receitaBrancaRoutes }
