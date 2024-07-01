import axios from 'axios'
import {useState} from 'react'
import {config} from "../config"
import { useNavigate } from 'react-router-dom';
export default function Student(){
    const navigate = useNavigate();
    let [studentId,setStudentId]=useState("")
    let [studentpass,setStudentpass]=useState("")
    let [havePoints,setHasPoints]=useState(false)
    let [answer,setAnswer]=useState(0)
    async function submitHandler(e){
        e.preventDefault()
        window.alert("calculateing ...please wait")
        let headers= {'Content-Type': 'application/json'}
        let body={"studentId":studentId,"studentpass":studentpass}
        try{
            console.log("h",headers,"b",body,"c",config)
        let response=await axios.post(config+"/route1",body=body,headers=headers)
        if(response.status==200){
            window.alert("on line 20 in student frontend")
            console.log("res,data",response.data)
            setHasPoints(true)
            setAnswer(response.data.points)
        }
        else{
            window.alert("on line 26 in studnt frontend")
            window.alert("try later")
            console.log("response is from /route1 in frontend ",response)
       
        }
    }
    catch(e){
       window.alert("contact admin")
    }
       
    }
    return(
        (!havePoints)?
        <div className='h-screen flex items-center justify-center'>
            <form className='' onSubmit={(e)=>submitHandler(e)}>
                <p>id</p>
                <input type="text" value={studentId} onChange={(e)=>setStudentId(e.target.value)} className='border-4 border-light-blue-500 border-opacity-100'/>
                <p>student pass</p>
                <input type="password" value={studentpass} onChange={(e)=>setStudentpass(e.target.value)} className='border-4 border-light-blue-500 border-opacity-100'/>
                <br/>
                <button>submit</button>
            </form>
        </div>
        :
        <div className='h-screen flex items-center justify-center'>
            <p>{answer}</p>
        </div>

    )
}