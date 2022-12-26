const { Router } = require('express');
const app = Router();

const Winner = require('../models/winner')

app.post('/winner',async(req, res)=> {
    try{
      const data = await Winner.create(req.body)
      if(data){
          res.json({
              msg: `ticket number ${req.body.ticketNo} and color ${req.body.color} has been set as winner`
          })
      }else{
        res.json({
            msg: "something went wrong"
        })
      }
    }catch(err){
        console.log(err)
    }
  
  })

  app.get('/winner',async(req, res)=> {
    try{
      const data = await Winner.find()
      res.json({
        winnerList: data
      })    
    }catch(err){
        console.log(err)
    }
  
  })
  
  module.exports = app;

