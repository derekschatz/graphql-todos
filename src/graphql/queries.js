import { gql } from "@apollo/client";

export const CREATE_TODO = gql`
    mutation createTodos ($text: String!) {
        insert_todos (objects: {text: $text}) {
                returning {
                id
                text
                done
            }
        }
    }
`;

export const GET_TODOS = gql`
    query getTodos {
        todos {
            id
            text
            done
        }
    }
`;

export const DELETE_TODOS = gql`
    mutation deleteTodos ($id: uuid) {
        delete_todos (where: {id: {_eq: $id}}) {
            returning {
                id
            }
        }
    }
`;
