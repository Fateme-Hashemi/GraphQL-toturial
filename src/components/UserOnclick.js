import React, {useState} from "react";
import {  useLazyQuery } from '@apollo/client';
import { GET_USER } from "../graphQL/queries";


function UserOnClick () {
const [id, setId] = useState("");
const changeHandler = (e) => {
    setId(e.target.value);
}
const [getEachUser, {loading, data, error, called}] = useLazyQuery(GET_USER, {
    variables: {id: id}
});
console.log({loading, data, error, called});
if (loading) return <h3>loading ...</h3>
if (error) return <h3>something went wrong ...</h3>
    return (
        <>
        <div>User</div>
        <input value={id} placeholder="enter user id" onChange={changeHandler} />
         <button onClick={() => getEachUser()}>Get User</button>
         {data && (
            <>
             <h1>{data.user.name}</h1>
            <p>{data.user.email}</p>
            <p>{data.user.phone}</p></>
         )}
       
        </>
    )
}

export default UserOnClick