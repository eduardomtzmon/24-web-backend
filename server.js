const express = require('express')
const cors = require('cors')
const Database = require('./db/config')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 3001
        this.Database = new Database()
        this.middlewares()
        this.dbConnection()
    }

    async dbConnection() {
        await this.Database.dbConnection()
    }

    middlewares(){
        console.log('somebody once told me');
        // Cors asegura los endpoints cuando hacemos peticiones desde el frontend
        this.app.use(cors())
        // Este middleware express.json nos ayuda a recibir e interpretar jsons
        this.app.use(express.json())
        // Urlencoded tambien nos ayuda a recibir jsons
        this.app.use(express.urlencoded({extended:false}))
        // Con esto le digo al server que aqui tenemos lo que vamos a mostrar
        this.app.use(express.static('public'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`App corriendo en el puerto ${this.port}`);
        })
    }
}

module.exports =  Server