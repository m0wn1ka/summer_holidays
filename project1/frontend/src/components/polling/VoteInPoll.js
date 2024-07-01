import axios from 'axios'
import {useEffect,useState} from 'react'
import PollQuestion from './PollQuestion'
import { config1 } from "./../../Config";
export default function VoteInPoll(){
    let [change,setChange]=useState(false)
    let [res1,setRes1]=useState([])
    useEffect(()=>{
        async function fetchData(){
            let body={}
            body.givenToken=localStorage.getItem("user")
            let headers= {'Content-Type': 'application/json'}
            let response=await axios.post(config1+"/poll/getData",body=body,headers=headers)
            // console.log("response in vote in polls",response.data.response)
            setRes1(response.data.response)
        }
        fetchData()
    },[change])
    let x=res1
    let res=x.map(y=><PollQuestion data1={y}  quesId={y._id} change={change} setChange={setChange}/>)
    return(<>
    {res}
    </>)
}