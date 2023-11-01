const Joi = require('joi')

const schema = Joi.object().keys({
    userName: Joi.string().min(3).max(30).required().messages({
        "string.base": "El nombre debe ser un string",
        "string.empty": "El username debe no estar vacio",
        "string.min": "El username debe tener al menos {#limit} caracteres",
    }),
    email: Joi.string().email().required().messages({
        "string.email": "El email debe tener un formato válido"
    }),
    phone: Joi.number().min(8),
    password: Joi.string().min(3).max(30).required()
})


module.exports = { schema }