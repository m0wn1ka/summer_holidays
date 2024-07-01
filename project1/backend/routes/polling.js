const express=require("express")
const router=express.Router()
const UserModel=require("../models/authUser")
const PollModel=require("../models/PollModel")
const {ObjectId}=require("mongodb")
router.get("/create",(req,res)=>{
    return res.send("from polling")
})
router.post("/create",async(req,res)=>{
    // console.log("req.bodyfafaafa",req.body)
const objectId1 = new ObjectId();
const pollOptions = req.body.pollOptions.map(option => ({
    pollOption: option,
    pollCount: 0,
    polledPersons: []
}));
let Poll1=new PollModel({_id:objectId1,pollQuestion:req.body.pollQuestion,pollCreator:req.userEmail.user,pollOptions:pollOptions,pollDescription:req.body.pollDescription,pollTag:req.body.pollTag})
await Poll1.save()
return res.status(200).json({"response":"created poll successfully"})
})
router.post("/vote",async(req,res)=>{
    console.log("req.boyd in poll voting",req.body)
    //req.userEmail
    let poll = await PollModel.findOne({
        _id: req.body.quesId,
        'pollOptions._id': req.body.optionId
    });
    let pollOption = poll.pollOptions.id(req.body.optionId);
    let polled=pollOption.polledPersons.indexOf(req.userEmail.user)
    if(polled==-1){
        pollOption.polledPersons.push(req.userEmail.user);
        pollOption.pollCount++;
        await pollOption.save()
        await poll.save()
    }
    else{
        return res.status(201).json({"response":"already voted"})
    }
    // console.log("poll obj",pollOption)
    return res.status(200).json({"response":"voted succesfully"})
})
router.post("/getData",async(req,res)=>{
    let pollData= await PollModel.find();
    // console.log("poll data iss",pollData)
    return res.status(200).json({"response":pollData})
})
module.exports=router