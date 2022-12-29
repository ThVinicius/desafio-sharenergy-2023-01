import { Router } from 'express'
import schemaValidator from '../middlewares/schemaValidator'
import { signIn } from '../schemas/userSchema'
import userController from '../controllers/userController'

const route = Router()

route.post('/sign-in', schemaValidator(signIn), userController.signIn)

export default route
