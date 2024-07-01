import Card1 from "./Card1"
import home_page from "./images/home_page.png"
export default function About(){
  let data1="this is a voting website"
    return(   
   <>
    <div className='h-screen flex items-center justify-center'>
      {/* <p>About page</p> */}
      <Card1 source1={home_page} data1={data1}/>

    </div>
   </>)
}