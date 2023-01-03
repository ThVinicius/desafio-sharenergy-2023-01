import { Router } from 'express'
import userRoute from './userRoute'
import usersRandomRoute from './usersRandomRoute'
import customerRoute from './customerRoute'

const route = Router()

route.use(userRoute)
route.use(usersRandomRoute)
route.use(customerRoute)

export default route
