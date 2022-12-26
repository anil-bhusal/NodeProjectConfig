const { Router } = require('express');
const app = Router();

const Users = require('../models/users')


app.get('/tickets/:ticketno',(req, res)=> {
    console.log(req.params.ticketno)
})

app.post('/tickets',(req, res)=> {
  console.log(req)
})

app.get('/tickets', async(req, res) => {
    try{
    const data = await Users.find()
  res.json({
      ticketList: data,
  })
}catch(err){
    console.log(err)
}
})

module.exports = app;