import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

import { Mutation } from '@apollo/client/react/components';
import { GET_TODOS} from './graphql/queries';
import { CREATE_TODO } from './graphql/queries';
import { DELETE_TODOS } from './graphql/queries';

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import input from '@mui/material/Input'; 





//create todos


//delete todos

//mark todos as done --> toggle done status from false to true


function App() {

  const { loading, error, data } = useQuery(GET_TODOS);
  let input;


  if (loading) { 
    return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50 } }>

    <CircularProgress />
    </div>
  
    )
  }


  if (error) return (
    console.error(error),
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50 } }>
      <Alert severity="error">
        <AlertTitle>Error!</AlertTitle>
        <strong>{error.message}</strong>
      </Alert>
    </div>

  )

  return (

    <div className='vh-100 code flex flex-column items-center bg-blue white pa3 fl-1'>
      <h1 className='f2-l'>GraphQL CheckList</h1>

      <Mutation mutation={CREATE_TODO}>
        {(createTodos, { data }) => (

          <form className='mb3'
            onSubmit={e => {
              //stops page refresh on "create" event
              e.preventDefault();

              if (input.value === '') {
                return;
              }

              createTodos({
                variables: {
                  text: input.value
                },
                refetchQueries: [{ query: GET_TODOS }]
              });
              input.value = "";
            }}
         className='mb3' >

            <input 
              ref={node => {
                input = node;
              }}
            className='pa2 f4 b--dashed'/>
          <button className='pa2 f4 bg-green' type="submit">Create an Item</button>
          </form>
        )}
      </Mutation>

      <div>
        {data.todos.map(({ id, text, done }) => (
          <div key={id}>
            <span className="ma2 todo-text">
              {text}
            </span>

            <Mutation data={data} mutation={DELETE_TODOS}>
              {(deleteTodos, { data }) => (

            <button onClick={
              () => {
                deleteTodos({
                  variables: {
                    id
                  },
                  refetchQueries: [{ query: GET_TODOS }]
                });
              }
            }>
              &times;
            </button>
              )}
            </Mutation>
          </div>
        ))}
      </div>
    </div>
  );
}




export default App;