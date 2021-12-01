import React, { useState } from 'react';
import {
    gql, useMutation
  } from "@apollo/client";
import { Card, Form,Button,CardBody, CardHeader } from 'reactstrap';

const AddUser = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const userSignup = gql`
  mutation($data: UserCreateInput!){
    signupUser(data: $data) {
        id
        name
         email
    }
  }`;

    const [createUser] = useMutation(userSignup, {
      variables: {
          data:{ name: formState.name,
            email: formState.email}
        
      } 
    });


  return (
    <div style={{
      display:'flex',
      alignItems:'center',
      justifyContent:"center",
      marginTop:'7%',
      fontFamily: 'sans-serif',
      fontStyle:'italic'
  }}>
    <Card >
    
      <CardHeader style={{ backgroundColor:'black', color:'white'}}>AddUser</CardHeader>
    <CardBody>
       
    

<Form 
      onSubmit={(e) => {
        e.preventDefault();
        createUser();
      }}
    >
        <div >
         <input className="form-control"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Name"
          /> <br></br>
         <input className="form-control"
            value={formState.email}
            onChange={(e) =>
              setFormState({
                ...formState,
                email: e.target.value
              })
            }
            type="text"
            placeholder="Email"
          />
        </div> <br></br>
        <Button type="submit" className="btn btn-success ">Submit</Button>
      </Form>
      </CardBody>
    </Card>
    </div>
  );
};

export default AddUser;