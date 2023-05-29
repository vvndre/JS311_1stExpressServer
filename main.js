const express = require('express')

const app = express()

app.use(express.json());

app.get("/",(req, res) => {
  res.json("welcome to my server")
})

app.get("/add",(req, res) => {
  const num1 = req.query.num1;
  const num2 = req.query.num2;

  res.json(parseInt(num1) + parseInt(num2))
})

app.post("/multiply", (req, res) => {
  const body = {
    num1: req.body.num1,
    num2: req.body.num2,
  }

  res.json(body.num1 * body.num2)

})

app.get("/negate/:num", (req, res) => {
  res.json(parseInt(req.params.num) * -1)
})

app.listen(9001, function(){
  console.log("Application Started")
})