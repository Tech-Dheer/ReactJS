import "./Details.css";
import React from 'react';
function Details({userArray}){
    return(
        <table class="Details-Table">
            <thread>
                <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>avatar</th>
                </tr>
                <tbody>
                    {userArray.map(detail => (
                        <tr key={detail.id}>
                            <td>{detail.id}</td>
                            <td>{detail.email}</td>
                            <td>{detail.first_name}</td>
                            <td>{detail.last_name}</td>
                            <td>{detail.avatar}</td>
                            </tr>
                    ))}
                </tbody>
            </thread>
        </table>
    )
}

export default Details;