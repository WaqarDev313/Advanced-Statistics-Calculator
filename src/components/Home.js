import React from 'react';
import Navbar from "./Navbar";
// import { Avatar} from '@material-ui/core';
// import Link from '@material-ui/core/Link';
// import ImageOutlined from '@material-ui/icons/ImageOutlined';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import HourglassEmptyOutlined from '@material-ui/icons/HourglassEmptyOutlined';
// import Button from '@material-ui/core/Button';
function Home() {
  return (
   <>
  <Navbar/>
   <section className="hero-section">
  {/* <HourglassEmptyOutlined/> */}
        <p>wellcome to</p>
{/* <Link className='bg-red'>i am a link</Link> */}
        <h1>React Js Environment</h1>
      </section>
      {/* <Avatar className='bg-secondary'/>
      <div className="icons bg-Darkwhite">
   <h1>Core Icons</h1>
   <Button className='bg-Darkwhite' style={{color:"darkorange"}}><AddIcon className=' text-primary'/></Button>
   <Button className='bg-Darkwhite' ><DeleteIcon style={{color: "red"}}/></Button></div> 
   <ImageOutlined/> */}
   </>
  )
}

export default Home;
//