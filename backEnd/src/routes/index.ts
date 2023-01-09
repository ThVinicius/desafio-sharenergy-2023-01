import { Router } from 'express'
import userRoute from './userRoute'
import randomUsersRoute from './randomUsersRoute'
import customerRoute from './customerRoute'

const route = Router()

route.use(userRoute)
route.use(randomUsersRoute)
route.use(customerRoute)

export default route
