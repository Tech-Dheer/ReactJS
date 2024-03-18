import { useState } from "react";
import { dataServiceObj } from "./services/data.serviceEmp";


function AjaxEmp() {
    const [empsArray, setEmpsArray] = useState([]);

    // For reading data from user through textboxes
    const [empno, setEmpno] = useState("");
    const [empname, setempname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");

    function getDetailsButton_click() {

        dataServiceObj.getAllDetails().then((resData) => {
            setEmpsArray(resData.data);
        });
    }


    function addDetailButton_click() {
        let empObj = {};
        empObj.empno = empno;
        empObj.empname = empname;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno = deptno;
        

        dataServiceObj.addDetail(empObj).then((resData) => {
            alert("New Employee Detail added to Server");
            getDetailsButton_click(); 
            clearFields();
        });
    }

    function clearFields() {
        setEmpno("");
        setempname("");
        setJob("");
        setSal("");
        setDeptno("");
    }


    function deleteDetail_click(empno) {
        dataServiceObj.deleteDetail(empno).then((resData) => {
            alert("Employee detail is deleted from Server");
            getDetailsButton_click();            
        });
    }

    function selectDetail_click(empno) {

        dataServiceObj.getDetailById(empno).then((resData) => {
            let empObj = resData.data;
            
            setEmpno(empObj.empno);
            setempname(empObj.empname);
            setJob(empObj.job);
            setSal(empObj.sal);
            setDeptno(empObj.deptno);
        });
    }

    function updateDetailButton_click() {
        let empObj = {};
        empObj.empno = empno;
        empObj.empname = empname;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno = deptno;

        dataServiceObj.updateDetail(empObj).then((resData) => {
            alert("Details are updated in Server");
            getDetailsButton_click(); // get the latest data from server
            clearFields();
        });
    }

    let resultArray = empsArray.map((item, index) => {
        return <tr key={index}>
            <td>   {item.empno}  </td>
            <td>   {item.empname}  </td>
            <td>   {item.job}  </td>
            <td>   {item.sal}  </td>
            <td>   {item.deptno}  </td>
            <td>
                <a onClick={() => selectDetail_click(item.empno)} href="javascript:void(0);">Select</a> |
                <a onClick={() => deleteDetail_click(item.empno)} href="javascript:void(0);">Delete</a>
            </td>
        </tr>
    });


    return (<>

        <h3>Perform CRUD Operations using JSON-Server in React Application</h3>
        <hr />

        <input type="text" placeholder="Emp Number" value={empno} onChange={(e) => setEmpno(e.target.value)} />
        <input type="text" placeholder="Emp Name" value={empname} onChange={(e) => setempname(e.target.value)} />
        <input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
        <input type="text" placeholder="Salary" value={sal} onChange={(e) => setSal(e.target.value)} />
        <input type="text" placeholder="Dept Number" value={deptno} onChange={(e) => setDeptno(e.target.value)} />
        <hr />

        <input type="button" onClick={getDetailsButton_click} value="Get Depts" />
        <input type="button" onClick={addDetailButton_click} value="Add Dept" />
        <input type="button" onClick={updateDetailButton_click} value="Update Dept" />
        <hr />

        <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>Emp Number</th>
                <th>Emp Name</th>
                <th>Job</th>
                <th>Salary</th>
                <th>Dept Number</th>
                <th></th>
            </tr>
            {resultArray}
        </table>

    </>);
}

export default AjaxEmp;