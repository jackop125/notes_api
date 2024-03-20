const express = require("express");
const router = express.Router();
const Notes = require("../db/connection.js")
router.get("/",(req,res)=>{
    res.status(200).json({
        "msg":"Hello"
    })
})
router.get("/notes",async(req,res)=>{
    try{
        const result = await Notes.find();
        res.status(200).json(result)
    }catch(err){
        res.status(400).json(err)
    }
})
router.post("/notes",async(req,res)=>{
    try{
        const result = await Notes.create(req.body);
        res.status(200).json(result)
    }catch(err){
        res.status(400).json(err)
    }
})
router.patch("/notes/:id",async(req,res)=>{
    try{
        const result = await Notes.findByIdAndUpdate({_id:req.params.id},req.body,{ new: true });
        res.status(200).json(result)
    }catch(err){
        res.status(400).json(err)
    }
})
router.delete("/notes/:id",async(req,res)=>{
    try{
        const result = await Notes.findByIdAndDelete({_id:req.params.id},{ new: true });
        res.status(200).json(result)
    }catch(err){
        res.status(400).json(err)
    }
})
router.get("*",(req,res)=>{
    res.json({
        "msg":"NOT RIGHT URL"
    })
})

module.exports = router;