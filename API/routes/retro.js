const express = require('express');
const Retro = require('../models/retro')
const router = express.Router();

// Get a list of retro
router.get('/retro', (req, res) => {  
  Retro.find()
  // .populate('retroAction.action')
  .then((retro) => {
    res.json(retro)
  })
  .catch((error) => {
    return error
  }) 
});

// read single
router.get('/retro/:id', (req,res) => {
  const id = req.params.id
  Retro.findById(id)
    // .populate('retroAction.action')
    .then((retro) => {
      res.json(retro)
    })
    .catch((error) => {
      res.status(404).json({ error: error })
    })
})

// Create
router.post('/retro', (req,res) => {
  const newRetro = req.body
    Retro.create(newRetro)
      .then((retro) => {
        res.json(retro)
      })
      .catch((error) => {
        res.status(500).json({ error: error })
      })
})

// Update/Edit
router.patch('/retro/:id', (req,res) => {
  const oldRetro = Retro.findById(req.params.id)
  const updatedRetro = req.body
  oldRetro.findOneAndUpdate(updatedRetro)
    .then(() => {
      res.json(updatedRetro)
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})


// Delete
router.delete('/retro/:id', (req,res) => {
  const retro = Retro.findById(req.params.id)
  retro.remove()
    .then(() => {
      res.send('Retro Deleted')
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})



module.exports = router;