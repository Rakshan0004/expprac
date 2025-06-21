const express = require('express');
const router = express.Router();
const members = require('./Members');

//Get all members
router.get('/api/members', (req, res) =>{
    res.json(members);
});

//Get single member from the array
router.get('/api/members/:id', (req, res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    }else{
        res.status(400).json({ msg: `Member not found with the id of ${req.parms.id}`})
    }
});

module.exports= router;