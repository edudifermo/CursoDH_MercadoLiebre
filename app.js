const express = require("express")
const app = express();
const path = require('path')

app.use(express.static( path.join(__dirname, '/public')))

app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

//
//app.listen(3030, ()=>{
//    console.log("Servidor escuchando en el puerto 3030")})
//

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor escuchando en el puerto 3000")
})

                                             