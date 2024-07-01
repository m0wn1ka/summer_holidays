import PollOption from "./PollOption"
export default function PollQuestion({ data1, quesId,change,setChange }) {
  
    // console.log("in poll quesiont",data1.pollOptions)
    let o = data1.pollOptions
    let x = o.map(y => <PollOption data2={y} quesId={quesId} optionId={y._id} change={change} setChange={setChange}/>)
    return (<div className="h-screen flex flex-col items-center justify-center container">
        <div className="row">
            <span className="col-lg-6">Question</span><span className="col-lg-6">{data1.pollQuestion} </span>
        </div>
        <div className="row">
            <span className="col-lg-6">Posted by</span><span >{data1.pollCreator} </span>
        </div>
        <div className="row">
            <span className="col-lg-6">Description</span><span className="col-lg-6">{data1.pollDescription} </span>
        </div>
        {/*  <span>id:{data1._id} </span> */}
        <br />
        <br />
        {x}

    </div>)
}