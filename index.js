const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const productRoute = require('./routes/api')
const app = express()

dotenv.config()
//middlewaree
app.use(express.json())
app.use(bodyParser.json())
app.use(cors({}))
//route middleware
app.use('/api/v1',productRoute)
//
app.use(express.static(path.join(__dirname,"./frontend/build")))
app.get("*",function(_,res){
    res.sendFile(
        path.join(__dirname,"./frontend/build/index.html"),
        function(err){
            res.status(500).send(err)
        }
    )
})

//db and server
const port = process.env.PORT || 8000
mongoose.connect(process.env.DB_URI).then(()=>{
    console.log(`DB Connected in ${mongoose.connection.host}`);
}).catch((err)=>console.log(err)).finally(()=>{
    app.listen(port,()=>console.log(`server runnin in ${port}`))
})
