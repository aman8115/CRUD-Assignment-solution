const mongoose = require('mongoose')
const databaseConnection = async()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Registerapp')
    .then((connec)=>{
        console.log(` database is connected ${connec.connection.host}`)
    })
    .catch((error)=>{
        console.log(" database could not connect"+ error)
    })
}
module.exports = databaseConnection