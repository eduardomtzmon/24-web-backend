const { Schema, Model, model } = require("mongoose")

const UserSchema = Schema({
    userName: {
        type: String,
        required: [true, "El username es requerido"],    // al abrir los [] el primer param es el valor y el segundo es el mensaje si no cumple con el valor
        unique: true
    },
    email: {
        type: String,
        required: [true, "El email es requerido"],    // al abrir los [] el primer param es el valor y el segundo es el mensaje si no cumple con el valor
        unique: true
    },
    phone: {
        type: Number
    },
    password: {
        type: String,
        required: [true, "El password es requerido"]
    },
    active: {
        type: Boolean,
        default: true
    }
})

module.exports = model( 'User', UserSchema )