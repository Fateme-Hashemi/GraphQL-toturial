import React from "react";
import { useQuery } from '@apollo/client';
import { GET_USERS } from "../graphQL/queries";


function Users () {
    const {data, loading, error} = useQuery(GET_USERS);
    console.log({data, loading, error})
    if (loading) return <h3>loading ...</h3>
    if (error) return <h3>something went wrong ...</h3>
    return (
        <div>{data.users.data.map(user =><div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>

        </div> )}</div>
    )
}

export default Users