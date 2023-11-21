import { Router } from 'express'
import { receitaBrancaRoutes } from './receitas.branca.routes'
import { receitaNotificacaoRoutes } from './receitas.notificacao.routes'
import { receitaAntimicrobianaRoutes } from './receitas.antimicrobiana.routes'

const routes = Router()

routes.use('/receita-branca', receitaBrancaRoutes)
routes.use('/receita-antimicrobiana', receitaAntimicrobianaRoutes)
routes.use('/receita-notificacao', receitaNotificacaoRoutes)

export { routes }
