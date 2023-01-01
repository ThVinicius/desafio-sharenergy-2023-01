import { Router } from 'express'
import usersRandomController from '../controllers/usersRandomController'

const route = Router()

route.get('/random-users', usersRandomController.getAllUsers)

export default route
