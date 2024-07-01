import { useEffect, useState } from "react";
import human from "../images/human.png"
import axios from 'axios'
import { config1 } from "./../../Config";
import { useContext } from "react";
import { stateContext,stateDispatchContext } from '../contextAPI/Context1';
import { useNavigate } from "react-router-dom";
export default function Login(){
    // console.log("in login bakc  ulr is",config1)
    const navigate = useNavigate();
    const dispatch=useContext(stateDispatchContext);
    const state1=useContext(stateContext)
    const [userData,setUserData]=useState({email:"",password:""})
    function onChangeHandler(e){
        // window.alert("cac")
        setUserData((userData)=>({...userData,[e.target.name]:e.target.value}))
    }
    useEffect(()=>{
        if(state1.authorized){
            navigate("/profile")
        }
    })
    async function onSubmitHandler(e){
        e.preventDefault()
        // window.alert("sumbtted")
        // console.log("value..",userData)
        let headers= {'Content-Type': 'application/json'}
        let body=userData
        // console.log("backend url from proce.env.url",process.env.BACKEND_URL)
        //  body={"email":"email2","name":"name2","passowrd":"pass2"}
        let response=await axios.post(config1+ "/auth/login",body=body,headers=headers)
        // console.log("response of logn is",response.status)
        // console.log("token:",response.data.token)
        if(response.status==200 && response.data.token){
            navigate("/profile")
            dispatch({
                type: 'LoginSuccess',
                
                text: response.data.token,
              }); 
        }
        else{

          window.alert("incorrect login try again")
            dispatch({
                type:"LoginFail"
            })
        }

    }
    return(<>
    <form className="h-screen flex flex-col items-center justify-center" onSubmit={(e)=>onSubmitHandler(e)}>
        <img src={human} alt="human logo" className="rounded-full w-24 h-24"/>
     email:<input type="email" value={userData.email} name="email" onChange={(e)=>onChangeHandler(e)} className="text-blue-600"/><br/>
       password:<input type="password" value={userData.password} name="password" onChange={(e)=>onChangeHandler(e)} className="text-blue-600"/><br/>
      <button>submit</button>

    </form>
    
    </>)
}