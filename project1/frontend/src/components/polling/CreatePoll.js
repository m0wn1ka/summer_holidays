import polling from "../images/polling.jpeg"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { config1 } from "./../../Config";
export default function CreatePoll(){

    const navigate = useNavigate();
    const [singlePollOption,setSinglePollOption]=useState("")
    const [pollData,setPollData]=useState({'pollQuestion':"","pollDescription":"","pollOptions":[],"givenToken":"","pollTag":""})
    const [pollOptions,setPollOptions]=useState([])
    function onChangeHandler1(e){
        setPollData((polData)=>({...pollData,[e.target.name]:e.target.value}))
    }
    function addAnotherHandler(e){
        let x=document.getElementById("singleOption").value;
        setPollOptions((pollOptions)=>([...pollOptions,x]))
    }
    async function onSubmitHandler(e){
        e.preventDefault()
        // window.alert("see console")
        pollData.pollOptions=pollOptions
        pollData.givenToken=localStorage.getItem("user")
        // console.log("pooll data=",pollData)
        let headers= {'Content-Type': 'application/json'}
        let    body=pollData
        let res=await axios.post(config1+"/poll/create",body=body,headers=headers)
        navigate("/voteInPoll")
    }
    return(<>
    <form className="h-screen flex flex-col items-center justify-center" onSubmit={(e)=>onSubmitHandler(e)}>
        <img src={polling} alt="polling logo" className="rounded-full w-24 h-24"/>
       pollQuestion: <input type='text' value={pollData.pollQuestion} name="pollQuestion" onChange={(e)=>onChangeHandler1(e)} className="text-blue-600"/><br/>
       pollDescription:<input type="text" value={pollData.pollDescription} name="pollDescription" onChange={(e)=>onChangeHandler1(e)} className="text-blue-600"/><br/>
       pollTag:<input type="text" value={pollData.pollTag} name="pollTag" onChange={(e)=>onChangeHandler1(e)} className="text-blue-600"/><br/>
       pollOptions:<input type="text" value={singlePollOption} name="singlePollOption" id="singleOption"onChange={(e)=>setSinglePollOption(e.target.value)} className="text-blue-600"/><br/>
       <input type="button" onClick={addAnotherHandler} value={"+"}/>
      <button>submit</button>

    </form>
    
    
    </>)
}