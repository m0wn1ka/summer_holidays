
const express = require('express')
const app = express()
const cors = require('cors') 

require('dotenv').config()
app.use(express.json());
app.use(cors()); 
const database1=require("./db/db1")
database1.connection()
const middleware=require("./middlewares/authMiddleWare")

const port = 3001
const auth=require("./routes/auth")
app.use("/auth",auth)
app.use(middleware)
app.use("/profile",require("./routes/profile"))
app.use("/poll",require("./routes/polling"))
app.get('/', (req, res) => {
  res.send('Hello Worlddddd!')
})
app.post("*",(req,res)=>{
  // console.log("req of post type ",req.body)
  res.send("i am from backend")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
