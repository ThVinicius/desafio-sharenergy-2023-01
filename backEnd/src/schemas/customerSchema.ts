import joi from 'joi'

const remove = joi.object({ id: joi.string().trim().required() })

export default { remove }
