import logo from './logo.svg';
import './App.css';
import React from 'react';
import EmployeeTable from './EmployeeTable';
import Details from './Details';
import ImageCollection from './Image_Collecrtion';

function App() {

  // let employees = [
  //   {id:1, name:'Rahul', job:'Developer', salary: 30000, deptNo:11},
  //   {id:2, name:'Rohit', job:'Tester', salary: 25000, deptNo:16},
  //   {id:3, name:'Rajkumar', job:'HR', salary: 28000, deptNo:21},
  //   {id:4, name:'Ram', job:'Manager', salary: 35000, deptNo:25}
  // ];
        // let usersArray  =  [{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},			
        //                     {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},			
        //                     {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},			
        //                     {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},			
        //                     {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},			
        //                     {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}
			  // ];
  return (
    <>
      {/* <div>
        <h1>Employee Details</h1>
        <hr/>
        <EmployeeTable employees={employees} />
        
      </div>
      <div>
        <h1>Some images</h1>
        <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Pic" />
      </div> */
      
      // <div>
      //   <h1>Details Table</h1>
      //   <hr/>
      //   <Details userArray={usersArray} />

      // </div>

      <div className="App">
        <ImageCollection/>
      </div>

      }
    </>
  );
}

export default App;
