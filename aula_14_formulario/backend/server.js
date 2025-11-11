const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

PORTA = 3000
app.listen(PORTA,()=>{
    console.log("Conexão rodando")
    console.log(`http://localhost:${PORT}`)
})