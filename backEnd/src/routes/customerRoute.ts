import { Router } from 'express'
import customerController from '../controllers/customerController'
import tokenValidate from '../middlewares/tokenValidate'

const route = Router()

route.get('/customers', tokenValidate, customerController.getAll)

export default route
