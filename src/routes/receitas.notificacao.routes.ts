import { Router } from 'express'
import { CreateReceitaNotificacaoController } from '../modules/receitaNotificacao/useCase/createReceitaNotificacao/CreateReceitaNotificacaoController'
import { GetReceitaNotificacaoController } from '../modules/receitaNotificacao/useCase/getReceitaNotificacao/GetReceitaNotificacaoController'

const createReceitaNotificacaoController = new CreateReceitaNotificacaoController()
const getReceitaNotificacaoController = new GetReceitaNotificacaoController()

const receitaNotificacaoRoutes = Router()

receitaNotificacaoRoutes.post('/', createReceitaNotificacaoController.handle)
receitaNotificacaoRoutes.get('/', getReceitaNotificacaoController.handle)
// userRoutes.get("/", getAllUsersController.handle)

export { receitaNotificacaoRoutes }
