const repl = require('repl')
const Database = require('./db/config')
require('dotenv').config()
const User = require('./models/users')

const saludar = () => {
    console.log('Te saludo');
}

const database = new Database()
database.dbConnection()

const replServer = repl.start()
replServer.context.saludar = saludar
replServer.context.User = User

