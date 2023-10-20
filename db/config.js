const mongoose = require('mongoose')

class Database {
    constructor() {
        this.connection = process.env.MONGO_CNN_DEV
    }

    async dbConnection() {
        try {
            await mongoose.connect(this.connection, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.log('Conectados a la db');
        } catch (error) {
            console.log(error);
            throw new Error('Error al conectarse a la db')
        }
    }

}

module.exports = Database