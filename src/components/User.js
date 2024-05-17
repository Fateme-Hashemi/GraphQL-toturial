import React, {useState} from "react";
import {  useQuery } from '@apollo/client';
import { GET_USER } from "../graphQL/queries";


function User () {
const [id, setId] = useState("");
const changeHandler = (e) => {
    setId(e.target.value);
}
const {data, loading, error} = useQuery(GET_USER, {
    variables: {id: id}
});
if (loading) return <h3>loading ...</h3>
if (error) return <h3>something went wrong ...</h3>
console.log({data, loading, error});
    return (
        <>
        <div>User</div>
        <input value={id} placeholder="enter user id" onChange={changeHandler} />
        <h1>{data.user.name}</h1>
            <p>{data.user.email}</p>
            <p>{data.user.phone}</p>
        </>
    )
}

export default User