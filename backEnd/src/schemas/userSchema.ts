import joi from 'joi'

export const signIn = joi.object({
  username: joi.string().trim().required(),
  password: joi.string().trim().required()
})
