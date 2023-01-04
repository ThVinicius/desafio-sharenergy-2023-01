import { ErrorRequestHandler } from 'express'

export const tokenErrorHandling: ErrorRequestHandler = (
  error,
  _,
  res,
  next
) => {
  switch (error.name) {
    case 'JsonWebTokenError':
      return res.status(401).send('token inválido')

    case 'TokenExpiredError':
      return res.status(498).send('token expirado')

    default:
      break
  }

  next(error)
}
