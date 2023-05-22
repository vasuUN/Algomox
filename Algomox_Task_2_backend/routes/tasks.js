const express = require('express')
const router = express.Router()
const Task = require('../models/task')


// To get all records 
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (err) {
        res.send('Error ' + err)
    }
})

//To get record by id
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.json(task)
    } catch (err) {
        res.send('Error ' + err)
    }
})

//TO create/Add new records 
router.post('/', async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate
    })

    try {
        const a1 = await task.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})

//TO update records 
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            dueDate: req.body.dueDate
        }, { new: true });

        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (err) {
        res.status(500).send('Error ' + err);
    }

})

//To delete record
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndRemove(req.params.id);
        if (task) {
            res.json({ message: 'Task deleted successfully' });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (err) {
        res.status(500).send('Error ' + err);
    }
})

//Login authentication 
router.post('/api/login', async (req, res) => {
    // Retrieve the username and password from the request body
    const { username, password } = req.body;
  
    // You can implement your authentication logic here, such as checking the username and password against a database
    // For simplicity, let's assume the username is 'admin' and the password is 'password'
    if (username === 'admin' && password === 'password') {
      // Authentication successful
      res.json({ message: 'Authentication successful' });
    } else {
      // Authentication failed
      res.status(401).json({ message: 'Authentication failed' });
    }
  });



module.exports = router