import { Router } from 'express'
import customerController from '../controllers/customerController'
import schemaValidator from '../middlewares/schemaValidator'
import tokenValidate from '../middlewares/tokenValidate'
import customerSchema from '../schemas/customerSchema'

const route = Router()

route.get('/customers', tokenValidate, customerController.getAll)

route.post(
  '/customers',
  schemaValidator(customerSchema.add),
  tokenValidate,
  customerController.addCustomer
)

const isParams = true
route.delete(
  '/customers/:id',
  schemaValidator(customerSchema.remove, isParams),
  tokenValidate,
  customerController.remove
)

export default route
