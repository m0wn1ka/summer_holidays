
export default function Card1({source1,data1}){
    
    return (<>
     <img src={source1} alt="human logo" className="rounded-full w-24 h-24"/>
       <div>{data1}</div> 
    </>)
}