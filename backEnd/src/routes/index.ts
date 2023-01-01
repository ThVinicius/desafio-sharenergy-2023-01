import { Router } from 'express'
import userRoute from './userRoute'
import usersRandomRoute from './usersRandomRoute'

const route = Router()

route.use(userRoute)
route.use(usersRandomRoute)

export default route
