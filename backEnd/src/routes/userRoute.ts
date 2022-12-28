import { Router } from 'express'
import userController from '../controllers/userController'

const route = Router()

route.post('/sign-in', userController.signIn)

export default route
