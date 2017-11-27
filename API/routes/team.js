const express = require('express');
const Team = require('../models/team')
const router = express.Router();

// Get a list of teams
router.get('/teams', (req, res) => {  
  Team.find()
  .populate('retro.number')
  .populate('goals.todo')
  .then((teams) => {
    res.json(teams)
  })
  .catch((error) => {
    return error
  }) 
});

// Read single
router.get('/teams/:id', (req,res) => {
  const id = req.params.id
  Team.findById(id)
    .populate('retro.number')
    .populate('goals.todo')
    .then((team) => {
      res.json(team)
    })
    .catch((error) => {
      res.status(404).json({ error: error })
    })
})

// Create Team
router.post('/teams', (req,res) => {
  const newTeam = req.body
    Team.create(newTeam)
      .then((team) => {
        res.json(team)
      })
      .catch((error) => {
        res.status(500).json({ error: error })
      })
})

// Update/Edit
router.patch('/teams/:id', (req,res) => {
  const oldTeam = Team.findById(req.params.id)
  const updatedTeam = req.body
  oldTeam.findOneAndUpdate(updatedTeam)
    .then(() => {
      res.json(updatedTeam)
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})


// Delete
router.delete('/team/:id', (req,res) => {
  const team = Team.findById(req.params.id)
  team.remove()
    .then(() => {
      res.send('Team Deleted')
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})



module.exports = router;