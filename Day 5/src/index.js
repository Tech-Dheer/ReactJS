import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Emps from './Components/Emps';
import Depts from './Components/Depts';
import NotFound from './Components/NotFound';
import Details from './Components/Details';
import ProtectedRoute from './Components/ProtectedRoute';
import Login from './Components/Login';
import SignOut from './Components/SignOut';

const routing = (
  <Router>
      <div style={{textAlign : "center"}}>
        <h3>Routing implementation in React JS</h3>
        <hr/>
        <Link to="/">Home</Link>|
        <Link to="/Emps">Employees</Link>|
        <Link to="/Depts">Departments</Link>|
        <Link to="/About">About Us</Link> |
        <Link to="/Contact">Contact Us</Link>  |
        <Link to="/Hello">Invalid</Link>  |
        <Link to="/Login">Login</Link>  |
        <Link to="/SignOut">SignOut</Link>
        <hr />
      </div>


      <Routes>
        <Route path="/" element={<App/>} />

        <Route path="emps" element={
          <ProtectedRoute returnUrl="/Emps">
              <Emps/>
            </ProtectedRoute>} />

        <Route path="/Depts" element={
          <ProtectedRoute returnUrl="/">
              <Depts/>
            </ProtectedRoute>} />
        
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignOut" element={<SignOut/>} />
        <Route path="/Details/:id" element={<Details/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

  </Router>

)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
