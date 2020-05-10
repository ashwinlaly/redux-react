import React from 'react';

export default function UserInfo (props){
    return (
        <div>
            <table className="table table-responsive">
               <tbody>
                    <tr>
                        <td>name</td>
                        <td>{props.name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{props.email}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{props.age}</td>
                    </tr>
               </tbody>
            </table>
        </div>
    )
}