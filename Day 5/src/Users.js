import { useState } from "react";
import { dataServiceObj } from "./services/data.services";

function Users(){
    const [usersArray, setUsersArray] = useState([]);

    const [UserId, setUserId] = useState("");
    const [Password, setPassword] = useState("");

    function getUsersButton_click(){
        dataServiceObj.getAllDetails().then((resData) => {
            setUsersArray(resData.data);
        });
    }

    function clearFields(){
        setUserId("");
        setPassword("");
    }

    let resultArray = usersArray.map((item, index) => {
        return <tr key={indexb}>
            <td> {item.UserId} </td>
            <td> {item.Password} </td>
        </tr>
    });

    return (
        <>
            <h3>Adding User Details</h3>
            <hr/>

            <input type="text" placeholder="User ID" value={UserId} onChange={(e) => setUserId(e.target.value)} />
            <input type="text" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
            <hr/>

            <input type="button" onClick={getUsersButton_click} value="Get Details" />
            <hr/>

            <table border="3" width="500" cellspacing="5" cellpadding="5">
                <tr>
                    <th>User ID</th>
                    <th>Password</th>
                </tr>
                {resultArray}
            </table>
        </>
    )
}
export default Users;