import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphQL/mutations";





function CreateUser () {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [createUser, {data, loading, error, called}] = useMutation(CREATE_USER,
    {
        variables: {
            name: name,
            username: username,
            email:email,
            phone: phone,
        }
    }
    );
    console.log({data, loading, error, called})
    if (loading) return <h3>loading ...</h3>
    if (error) return <h3>something went wrong ...</h3>
    return (
        <>
        <div>CreateUser</div>
        <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} />
        <input type="text" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={phone} placeholder="phone" onChange={(e) => setPhone(e.target.value)} />
        <button onClick={() => createUser()}>Create User</button>
        </>
    )
}

export default CreateUser