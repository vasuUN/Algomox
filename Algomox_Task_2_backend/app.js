const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/TaskMaintain'

const app = express()

mongoose.connect(url)
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

//Routing to api functions 
const taskRouter = require('./routes/tasks')
app.use('/tasks',taskRouter)

//localhost port
app.listen(9000, () => {
    console.log('Server started')
})