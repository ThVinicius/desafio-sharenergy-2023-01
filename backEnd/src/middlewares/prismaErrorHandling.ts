import { ErrorRequestHandler } from 'express'

export const prismaErrorHandling: ErrorRequestHandler = (
  error,
  _,
  res,
  next
) => {
  switch (error.code) {
    case 'P2002':
      const str = error.meta.target
      const result = str.match(/_(.*?)_/)
      const keyName = result[1]

      const errorMessage = `Já existe um cadastro com esse ${keyName}`

      return res.status(409).send(errorMessage)

    case 'P2025':
      return res.status(404).send('Cliente não encontrado')

    default:
      next(error)
  }
}
