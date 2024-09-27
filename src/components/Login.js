import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link,  useNavigate} from "react-router-dom";
import '../App.css';
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
    const { loginWithRedirect } = useAuth0();

    const navigate=useNavigate();
    const [values,setValues]=useState({
        email:"",
        pswd:""
    });
    const [db_data,setDb_data]=useState('');
    const [message,setMessage]=useState('');
    let name,value;
const handleInput=(e)=>{
name=e.target.name;
value=e.target.value;
setValues({...values,[name]:value});

}

const handleSubmit=async(e)=>{
    e.preventDefault();
    const data=await fetch("http://localhost:8080/R-code/API/user.php");
    const resData=await data.json();
    console.log(resData);
    const records=resData.length;
    console.log(values);
   for(let i=0;i<records;i++){
  if((resData[i]['email']===values.email) && (resData[i]['password']===values.pswd)){
    
    loginWithRedirect()
   navigate("/Home");
  }
  
}
    // const formData={username:values.name,userpswd:values.pswd};
    // const res= await axios.post("http://localhost:8080/R-code/API/user.php",formData);
    
 setMessage("Failed to login! Please check the credentials;")   ;

}
  return (
      <>
     
<h3 style={{color: "red",marginTop:'15%',marginLeft:'1%'}}>{message}</h3>
     <div className="container1">
        <div className="container2">
            <div className="head">
              <h1 style={{fontWeight: '700'}}>ReactJs</h1>
            </div>
            <hr/>

            <div className="body">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <input type="email" className="form-control" placeholder="Email" style={{height: '3rem'}} 
                            onChange={handleInput}
                            name="email"/>
                        </div>
                       
                    </div>
                   
                    <input type="text" className="form-control my-2" placeholder="password" style={{height: '3rem'}} name="pswd" onChange={handleInput}/>
                    <div className=" text-center footer" >

                        <button type="submit" className="btn btn-success my-2">Login in</button>
                        <p><Link to="Register" style={{color:'grey'}}>Register Here</Link></p>
                    </div>
                   
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login;
