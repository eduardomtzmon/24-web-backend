const {response, request} = require("express")
const User = require("../models/users")


const createUser = async (req, res) => {
    try {
        const {body} = req // Esto viene siendo equivalente a const body = req.body()   Se le dice desestructuración
        const user = new User(body)
        await user.save()
        res.status(201).json({
            msg:'Usuario creado',
            user
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error al crear el usuario'
        })
    }
    
}

const getUser = async (req, res) => {
    try {
        const {limit = 3} = req.query // se juega con el limite de resultados requeridos
        const queryParam = {active:true} //  se filtra por un parametro y valor especifico
        const recordLenght = await User.countDocuments() // numero de documentos(entries) en db
        const user = await User.find(queryParam).limit(Number(limit)) // linea de función, el .find() es una función preestablecida de mongoose
        res.json({
            recordLenght,
            user
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener el usuario',
            error
        })
    }
}

const updateUser = (req, res) => {
    res.json({
        msg: 'Update users'
    })
}

const deleteUser = (req, res) => {
    res.json({
        msg: 'Borrar users desde controller'
    })
}

module.exports = {
     createUser,
     getUser,
     updateUser,
     deleteUser
}