 const app = require("./app.js");
 require('dotenv').config()
 const PORT = process.env.PORT||8000
 app.listen(PORT,()=>{
    console.log(` server is running at http://localhost:${PORT}`)
 })
 