const fastifyPlugin = require('fastify-plugin')
const mongoose = require('mongoose')

// Connect to DB
async function dbConnector(fastify, options) {
    try {
        const url = "mongodb+srv://budget_owner:gfhjkm_666@cluster0.nkkba.mongodb.net/budget?retryWrites=true&w=majority"
        const db = await mongoose
            .connect(url, {
                useNewUrlParser: true
            })
        console.log("Database is connected")
        fastify.decorate('mongo', db)
    } catch (err) {
        console.log(err)
    }

}
module.exports = fastifyPlugin(dbConnector)