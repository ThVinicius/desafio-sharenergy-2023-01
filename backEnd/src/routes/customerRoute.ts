import { Router } from 'express'
import customerController from '../controllers/customerController'
import schemaValidator from '../middlewares/schemaValidator'
import tokenValidate from '../middlewares/tokenValidate'
import customerSchema from '../schemas/customerSchema'

const route = Router()

route.use(tokenValidate)

route.get('/customers', customerController.getAll)

const isParams = true
route.get(
  '/customers/:id',
  schemaValidator(customerSchema.id, isParams),
  customerController.getOneById
)

route.post(
  '/customers',
  schemaValidator(customerSchema.add),
  customerController.addCustomer
)

route.delete(
  '/customers/:id',
  schemaValidator(customerSchema.id, isParams),
  customerController.remove
)

export default route
