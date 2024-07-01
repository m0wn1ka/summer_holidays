import { useState,useEffect,useContext } from "react";
import human from "../images/human.jpeg"
import { config } from "./../../config";
import axios from 'axios'
import { stateContext,stateDispatchContext } from '../contextAPI/Context1';
import { useNavigate } from "react-router-dom";
export default function Register(){

    const navigate = useNavigate();
    const state1=useContext(stateContext)
    const [userData,setUserData]=useState({name:"",email:"",password:"",admin_password:""})
    function onChangeHandler(e){
        // window.alert("cac")
        setUserData((userData)=>({...userData,[e.target.name]:e.target.value}))
    }
    async function onSubmitHandler(e){
        e.preventDefault()
        window.alert("sumbtted")
        // console.log("value..",userData)
        let headers= {'Content-Type': 'application/json'}
        let body=userData
        //  body={"email":"email2","name":"name2","passowrd":"pass2"}
        let response=await axios.post(config+"/auth/register",body=body,headers=headers)
        console.log("res is ",response)
        // navigate("/login")
        window.alert(response.statusText)
         navigate("/")

    }
    // useEffect(()=>{
    //     if(state1.authorized){
    //         navigate("/profile")
    //     }
    // })
    return(<>
    <form className="h-screen flex flex-col items-center justify-center" onSubmit={(e)=>onSubmitHandler(e)}>
        <img src={human} alt="human logo" className="rounded-full w-24 h-24"/>
       name: <input type='text' value={userData.name} name="name" onChange={(e)=>onChangeHandler(e)} className="text-blue-600"/><br/>
       email:<input type="email" value={userData.email} name="email" onChange={(e)=>onChangeHandler(e)} className="text-blue-600"/><br/>
       company new password:<input type="password" value={userData.password} name="password" onChange={(e)=>onChangeHandler(e)} className="text-blue-600"/><br/>
       admin password:<input type="password" value={userData.admin_password} name="admin_password" onChange={(e)=>onChangeHandler(e)} className="text-blue-600"/><br/>
      
      <button>submit</button>

    </form>
    
    </>)
}