import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../graphQL/mutations";





function DeleteUser () {
    const [id, setId] = useState('')

    const [deleteUser, {data, loading, error, called}] = useMutation(DELETE_USER,
    {
        variables: {
           id: id
        }
    }
    );
    console.log({data, loading, error, called})
    if (loading) return <h3>loading ...</h3>
    if (error) return <h3>something went wrong ...</h3>
    return (
        <>
        <div>CreateUser</div>
        <input type="text" value={id} placeholder="id" onChange={(e) => setId(e.target.value)} />
        <button onClick={() => deleteUser()}>Delete User</button>
        </>
    )
}

export default DeleteUser