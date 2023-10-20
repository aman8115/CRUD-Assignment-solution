const mongoose = require('mongoose')
const userShema = new mongoose.Schema({
    user_name:{
        type:String,
        required:[true,"userName is required "],
        maxLength:[6,"userName should be lesstah 7"]
    },
    user_email:{
        type:String,
        required:[true," email is required "],
        unique:true
    },
    user_password:{
        type:String,
        required:[true,"password is required "],
        maxLength:[6," password should be lessthan 6"]
    }
})
module.exports = mongoose.model("Userdata",userShema)