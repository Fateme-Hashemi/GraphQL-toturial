import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../graphQL/mutations";





function UpdateUser () {
    const [name, setName] = useState('')
    const [id, setId] = useState('')

    const [updateUser, {data, loading, error, called}] = useMutation(UPDATE_USER,
    {
        variables: {
            name: name,
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
        <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} />
        <button onClick={() => updateUser()}>Create User</button>
        </>
    )
}

export default UpdateUser