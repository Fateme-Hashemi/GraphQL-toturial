import { gql } from "@apollo/client";

const CREATE_USER = gql`
mutation CreateUser($name: String!, $username: String!, $email: String!, $phone: String!) {
CreateUser (
    input: {
    name: $name
    username: $username
    email: $email
    phone: $phone
}
) {
    id
    name
    username
    email
    phone
}
}
`
export {CREATE_USER};




const UPDATE_USER = gql`
mutation updateUser ($id: ID!, $name: String!) {
    updateUser(id: $id, input: {name: $name}) {
        id
        name
        email
        todos {
            data {
                title
            }
        }
    }
}
`
export {UPDATE_USER};

const DELETE_USER = gql`
mutation deleteUser ($id: ID!){
deleteUser (id: $id) 
}
`
export {DELETE_USER};