import { useState } from "react";
import axios from "axios";
import {config} from "../config"

export default function Viewer() {
  let [studentId, setStudentId] = useState("");
  let [havePoints,setHasPoints]=useState(false)
  let [answer,setAnswer]=useState(0)
  async function onSubmitHandler(e) {
    e.preventDefault();
    window.alert("fetching... please wait")
    let headers = { "Content-Type": "application/json" };
    let body = { "IdNumber": studentId };
    try{
        // console.log("faf")
   let response= await axios.post(config+"/route1/getData",body=body,headers=headers)
   if(response.status==200){
    // console.log(response.data)
    setAnswer(response.data.points)
    setHasPoints(true)
   }
    }
    catch(e){
        window.alert("contact admin")
    }
  }
  return (
    (!havePoints)?
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={(e)=>onSubmitHandler(e)}>
       id: <input type="text" onChange={(e)=>setStudentId(e.target.value)}className='border-4 border-light-blue-500 border-opacity-100'/><br/>
        <button>submit</button>
      </form>
    </div>
    :
    <div className="h-screen flex items-center justify-center">
    {answer}
    </div>
  );
}
