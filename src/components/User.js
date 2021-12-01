import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table,Container } from "reactstrap"
import {
    useQuery,
    gql
  } from "@apollo/client";
const userSchema = gql`
query ExampleQuery {
  allUsers {
      email
      name
      id
      posts {
         title
        author {
          email
          name
        }
      }
 }
 }
`;
function User() {

  const { loading, error, data } = useQuery(userSchema);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error}</p>;

  return(
      <Container >
         <Table bordered={true}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
               {data.allUsers.map(({ email,name,posts })=> (

                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{email}</td>
                    </tr>
                    </tbody>
                    ))}
                   
                
            </Table>
            </Container>
  );
}


export default User;