import express, { json } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { errorHandling } from './middlewares/errorHandling'
import { tokenErrorHandling } from './middlewares/tokenErrorHandling'
import { mongoErrorHandling } from './middlewares/mongoErrorHandling'
import routes from './routes/index'

const app = express()

app.use(cors())
app.use(json())

app.use(routes)
app.use(tokenErrorHandling)
app.use(mongoErrorHandling)
app.use(errorHandling)

export default app
