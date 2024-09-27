import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';
function Error() {
  return (
    <div  style={{marginTop:'15%'}}>
      <h1>404 Error Page</h1>
      <p>Sorry , this page doesn't exist</p>
      <button className="return">
       <Link to="/"  style={{color: 'white',textDecoration: 'none'}}> Go Back</Link>
      </button>
    </div>
  )
}

export default Error
