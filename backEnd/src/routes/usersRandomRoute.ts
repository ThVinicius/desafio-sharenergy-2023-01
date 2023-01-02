import { Router } from 'express'
import usersRandomController from '../controllers/usersRandomController'
import tokenValidate from '../middlewares/tokenValidate'

const route = Router()

route.get('/random-users', tokenValidate, usersRandomController.getAllUsers)

export default route
