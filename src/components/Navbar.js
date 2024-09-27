import React from "react";
import "../App.css";
import { Link,useNavigate } from "react-router-dom";
import { AppBar} from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
  const { isAuthenticated} = useAuth0();

 
  const navigate=useNavigate();
  const { logout } = useAuth0();
  const checkAuthentication=()=>{
isAuthenticated ? navigate("/#Home"): navigate("/#login");
console.log(isAuthenticated);
  }
  return (
    <>
    
<AppBar>
      <nav className="main-nav">
        {/* first logo part */}
        <div className="logo">
          <img src="./img/logo.svg" className="App-logo" alt="logo" />
        </div>
        <div className="name">
          <h2>
            <span>R</span>eact
            <span>J</span>s
          </h2>
        </div>  
        {/* navbar-links */}
      </nav>
      <div className="links">
        <ul style={{ display: "flex",marginLeft:"-2%" }}>
          <li>
            <Link exact to="/Home" style={{color: 'white'}}>Home</Link>
          </li>
          <li>
            <Link exact to="/Service" style={{color: 'white'}}>Service</Link>
          </li>
          <li>
            <Link exact to="/About" style={{color: 'white'}}>About</Link>
          </li>
          <li>
            <Link exact to="/Contect" style={{color: 'white'}}>Contact us</Link>
            </li>
          <li>
          <button onClick={() => {logout({ logoutParams: { returnTo: window.location.origin } }); }} style={{borderRadius: "3px",color: "red",backgroundColor:"lightblue"}}>
      Log Out
    </button>
          </li>
        </ul>
      </div>
      </AppBar>
<p>{checkAuthentication}</p>     
    </>
  );
}

export default Navbar;
