import joi from 'joi'

const phoneRegex = /\(\d{2}\) (\d\.)?\d{4}-\d{4}/

const cepRegex = /\d{5}-\d{3}/

const cpfRegex = /\d{3}\.\d{3}\.\d{3}-\d{2}/

const add = joi.object({
  name: joi.string().trim().required(),
  email: joi.string().email().required(),
  phone: joi.string().pattern(phoneRegex).required(),
  address: joi.object({
    cep: joi.string().pattern(cepRegex).required(),
    state: joi.string().length(2).required(),
    city: joi.string().required(),
    district: joi.string().trim().required(),
    street: joi.string().trim().required(),
    number: joi.string().trim().required()
  }),
  cpf: joi.string().pattern(cpfRegex).required()
})

const id = joi.object({ id: joi.string().trim().required() })

export default { add, id }
