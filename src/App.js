import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contect from "./components/Contect";
import Service from "./components/Service";
import Card from "./components/Card";
import Error from "./components/Error";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return (
    <>
      <div className="App">
        
        <Routes>
          <Route exact path="/Home" Component={Home} />
          <Route path="/Service" Component={Service} />
          <Route path="/About" Component={About} />
          <Route path="/Contect" Component={Contect} />
          <Route path="/Card" Component={Card} />
          <Route path="/" Component={Login} />
          <Route path="/login" Component={Login} />
          <Route path="/login/Register" Component={Register} />
          <Route path="/Register" Component={Register} />
          <Route path="/login/Register/login" Component={Login} />
          <Route path="*" Component={Error} />
        </Routes>
      </div>
      {/* <button className="btn btn-primary">button</button> */}
    </>
  );
}

export default App;
