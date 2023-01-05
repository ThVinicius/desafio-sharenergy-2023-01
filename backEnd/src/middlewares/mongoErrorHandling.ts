import { ErrorRequestHandler } from 'express'

export const mongoErrorHandling: ErrorRequestHandler = (
  error,
  _,
  res,
  next
) => {
  switch (error.code) {
    case 11000:
      const keyName = Object.keys(error.keyValue)[0]

      const errorMessage = `Já existe um cadastro com esse ${keyName}`

      return res.status(409).send(errorMessage)

    default:
      next(error)
  }
}
