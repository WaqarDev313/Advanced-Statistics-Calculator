import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link ,Navigate, useNavigate} from "react-router-dom";
import "../App.css";
import axios from 'axios'; 
function Register() {
  const [msg,setMsg]=useState("");
  const [values, setValues] = useState({
    fname: " ",
    sname: " ",
    date: " ",
    pswd:" ",
    email: " ",
    gender: " ",
   
  });
  const navigate=useNavigate();
  let name;
  let value;
  const handleInput = (e) => {
    
    name = e.target.name;
    value = e.target.value;
    setValues({ ...values, [name]: value });
    
  };
  const handlesubmit=async (e)=>{
    e.preventDefault();
    
    const formData={userfname:values.fname,usersname:values.sname,userpswd:values.pswd,email:values.email,date:values.date,gender:values.gender};
console.log(formData);
    const res= await axios.post("http://localhost:8080/R-code/API/user.php",formData);
    if(res.data.success){

   
  navigate("/Login");
}else{
  setMsg("failed to Register! Please Try agian");
}


  }
  return (
    <>
    <h2 style={{marginTop:"10%"}}>{msg}</h2>
      <div className="container" style={{ marginTop:"-3%"}}>
        <div
          className="main"
          style={{
            width: "45%",
            marginBottom: "-14%",
            marginTop: "5%",
            marginLeft: "27.5%",
          }}
        >
          <div className="main-head">
            <h2>Create a new account</h2>
            <p>It's quick and easy.</p>
          </div>
          <hr />

          <div className="main-body">
            <form onSubmit={handlesubmit}>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="fname" style={{height: '3rem'}}
                    onChange={handleInput}
                  
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Surname"
                    name="sname" style={{height: '3rem'}}
                    onChange={handleInput}
                  
                  />
                </div>
              </div>
              <input
                type="email"
                className="form-control my-2"
                placeholder="Mobile number or email address"
                name="email" style={{height: '3rem'}}
                onChange={handleInput}
               
              />
              <input
                type="text"
                className="form-control my-2"
                placeholder="New password"
                name="pswd" style={{height: '3rem'}}
                onChange={handleInput}
               
              />

              <div className="form-group my-0">
                <label htmlFor="date" className="lbl">
                  Date of birth{" "}
                  <i className="fa fa-question-circle" aria-hidden="true"></i>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date" style={{height: '3rem'}}
                  onChange={handleInput}
                 
                  name="date"
                />
              </div>

              {/* <!-- Gender --> */}
              <h5 className="lbl">
                Gender{" "}
                <i className="fa fa-question-circle" aria-hidden="true"></i>
              </h5>
              <div className="gender">
                <div className="form-group g1">
                  <label htmlFor="Female">Female</label>
                  <input
                    type="radio"
                    id="Female"
                    name="gender"
                    onChange={handleInput}
                    value="Female"
                                      />
                </div>
                <div className="form-group g1">
                  <label htmlFor="Male">Male</label>
                  <input
                    type="radio"
                    id="Male"
                    name="gender"
                    onChange={handleInput}
                   value="male"
                  />
                </div>
                <div className="form-group g1">
                  <label htmlFor="Custom">Custom</label>
                  <input
                    type="radio"
                    id="Custom"
                    name="gender"
                    onChange={handleInput}
                   value="costum"
                  />
                </div>
              </div>

             
              <div className=" text-center footer">
                <button type="submit" className="btn btn-success my-2" >
                  Sign Up
                </button>
                <p>
                  <Link to="login">Already have an account?</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
