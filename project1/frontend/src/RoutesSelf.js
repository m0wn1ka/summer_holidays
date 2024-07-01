import { BrowserRouter, Routes, Route } from "react-router-dom"
import Welcome from "./components/Welcome"
import About from "./components/About"
import Register from "./components/auth/Register"

import { useContext } from "react";
import Profile from "./components/personalized/Profile"
import Login from "./components/auth/Login"
import CreatePoll from "./components/polling/CreatePoll"
import VoteInPoll from "./components/polling/VoteInPoll"
import ProtectedComponent from "./components/protectedComponent/ProtectedComponent"

import { stateContext,stateDispatchContext } from './components/contextAPI/Context1';
export default function RoutesSelf(){

  const dispatch=useContext(stateDispatchContext);
  const state1=useContext(stateContext)
    return(
    <>
    <Routes>
    <Route  path="/about" element={<About />}></Route>
    <Route path="/" element={<Welcome />}></Route>
    <Route  path="/register" element={<Register/>}></Route>

    <Route  path="/login" element={<Login/>}></Route>
    {state1.authorized&&<>
    <Route path="/profile" element={<ProtectedComponent><Profile /></ProtectedComponent>}></Route>
      <Route  path="/createPoll" element={<ProtectedComponent><CreatePoll/></ProtectedComponent>}></Route>
    <Route  path="/voteInPoll" element={<ProtectedComponent><VoteInPoll/></ProtectedComponent>}></Route>
    </>}
    <Route path="*" element={<Welcome />}></Route>
    </Routes>
    </>)
}