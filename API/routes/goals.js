const express = require('express');
const Goal = require('../models/goals')
const router = express.Router();

// Get a list of goals
router.get('/goals', (req, res) => {  
  Goal.find()
  .then((goals) => {
    res.json(goals)
  })
  .catch((error) => {
    return error
  }) 
});

// read single
router.get('/goals/:id', (req,res) => {
  const id = req.params.id
  Goal.findById(id)
    .then((goals) => {
      res.json(goals)
    })
    .catch((error) => {
      res.status(404).json({ error: error })
    })
})

// Create
router.post('/goals', (req,res) => {
  const newGoal = req.body
    Goal.create(newGoal)
      .then((goals) => {
        res.json(goals)
      })
      .catch((error) => {
        res.status(500).json({ error: error })
      })
})

// Update/Edit
router.patch('/goals/:id', (req,res) => {
  const oldGoal = Goal.findById(req.params.id)
  const updatedGoal = req.body
  oldGoal.findOneAndUpdate(updatedGoal)
    .then(() => {
      res.json(updatedGoal)
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})


// Delete
router.delete('/goals/:id', (req,res) => {
  const goal = Goal.findById(req.params.id)
  goal.remove()
    .then(() => {
      res.send('Goal Deleted')
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})



module.exports = router;