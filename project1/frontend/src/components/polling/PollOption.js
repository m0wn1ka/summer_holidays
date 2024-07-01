import { useState } from "react"
import axios from 'axios'
import { config1 } from "./../../Config";
import { useContext } from "react";
import { stateContext,stateDispatchContext } from '../contextAPI/Context1';

export default function PollOption({ data2, quesId, optionId ,change,setChange}) {

    const dispatch=useContext(stateDispatchContext);
    const state1=useContext(stateContext)
    // console.log("data2 ",data2)
    let [pollData, setPollData] = useState({})
    let y = data2.polledPersons.map(x => <li>{x}</li>)

    async function onSubmitHandler(e) {
        // window.alert("caed")
        e.preventDefault()
        pollData.givenToken = localStorage.getItem("user")
        pollData.quesId = quesId
        pollData.optionId = optionId
        // console.log("pooll data=",pollData)
        let headers = { 'Content-Type': 'application/json' }
        let body = pollData
        let res = await axios.post(config1+"/poll/vote", body = body, headers = headers)
        console.log("response is",res.data.response)
        window.alert(res.data.response)
        setChange((x)=>!x)

    }
    return (
        <form onSubmit={(e) => onSubmitHandler(e)} className="container">
            <span className="col-md-3 p-3">{data2.pollOption}</span>
            <span className="col-md-3 p-3">pollCount:</span>
            <span className="col-md-3 p-3">{data2.pollCount}</span>
            {/* polled persons:{y} */}
            <span className="col-md-3 p-3">
                <button>vote</button>
            </span>
        </form>)
}