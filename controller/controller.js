const Userdata = require('../model/schema.js')
exports.registerUser = async(req,res)=>{
    try {
       const{user_name,user_email, user_password} = req.body
       const userData = await Userdata.create({user_name,user_email,user_password})
       res.status(200).json({
        success:true,
        message:" User Registered successfully ",
        userData })
    } catch (error) {
        console.log(error)
        res.status(4001).json({ 
            success:false,
            message:" User can not Register successfully "
        })
        
    }
}
exports.loginUser = async(req,res)=>{
    try {
        const{user_email,user_password} = req.body
       const userlogin = Userdata.findOne({user_email})
       if(userlogin) {
        if(userlogin.user_password == user_password){
            res.status(200).json({
                success:true,
                message:" user logIn successfully He Enjoy here "
            })
           }else{
            res.status(401).json({
                success:false,
                message:" enter password is Incorrect"
            })
           }

       }
      
    } catch (error) {
        console.log(error)
        res.status(501).json({
            success:false,
            message:" User not rgistered through this emailid "

        })
        
    }
}