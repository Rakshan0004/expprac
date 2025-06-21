const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');


//Get all members
router.get('/', (req, res) =>{
    res.json(members);
});

//Get single member from the array
router.get('/:id', (req, res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    }else{
        res.status(400).json({ msg: `Member not found with the id of ${req.params.id}`})
    }
});

//create member
router.post('/', (req, res) =>{
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email) {
        return res.status(400).json({ ms: 'Please incluse a name and email' })
    }
    members.push(newMember);
    res.json(members);
});

//update
router.put('/:id', (req, res) =>{
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        const updateMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updateMember.name ? updateMember.name : member.name;
                member.email = updateMember.email ? updateMember.email : member.email;
                
                res.json({ ms: "Member updated", member });
            }
        });
    }else{
        res.status(400).json({ msg: `Member not found with the id of ${req.params.id}`})
    }
});

module.exports= router;