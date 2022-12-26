const app = require('express')()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
const mongoose = require('mongoose')
const Connect = require('./src/db/connect')
const Users = require('./src/models/users')
const Winner = require('./src/models/winner')
const ticket = require('./src/routes/ticketRouter')
const winnerUser = require('./src/routes/winnerRouter')

const { Schema } = mongoose;

Connect()

app.use(ticket)
app.use(winnerUser)


app.get('/users',async (req, res)=> {
    if(req.query.name){
        const usersList = await Users.findOne({name: req.query.name})
        const searchWinColor = await Winner.findOne({ticketNo: req.query.ticketNo})
        if(searchWinColor?.color === req.query.color && usersList){
          res.json({
              msg: "hurray! wiiner winner chicken dinner"
          })
        }else{
            if(!usersList){
                res.json({
                  errMsg: 'not registered'
                })
            }else{
                res.json({
                    errMsg: 'you have lost'
                })
            }
        }
    }else{
        const usersList = await Users.find()
        res.json({
            usersList: usersList
        })

    }


})

  
  app.put('/register',async(req, res)=> {
//req.bodyt

//task : save it in db not with await Users.create(req.body)
//we have to update await Users.findOneAndUpdate
  
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

