import React from 'react';

function App() {

  

        let  file1 = "https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg";

        let file2  = "img3.jpg";


  return (
      <>
        <h3>Working with Images React JS</h3>
        <hr/>

        <img  width="100"  src="https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg" />
        <br/>
        <img  width="100"  src={file1} />
        <hr/>

        <img  width="100"   src="./Images/img1.jpg" />
        <img  width="100"   src="./Images/img2.jpg" />
        <hr/>

        <img  width="100"   src={ "./Images/" + file2} />
        <hr/>

      </>     
  );
}

export default App;