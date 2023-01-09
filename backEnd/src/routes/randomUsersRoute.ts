import { Router } from 'express'
import randomUsersController from '../controllers/randomUsersController'
import tokenValidate from '../middlewares/tokenValidate'

const route = Router()

route.get('/random-users', tokenValidate, randomUsersController.getAllUsers)

export default route
