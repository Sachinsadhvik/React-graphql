import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table,Container } from "reactstrap"
import {
    useQuery,
    gql
  } from "@apollo/client";
const postSchema = gql`
query ExampleQuery{
    allPosts {
      title
      content
      author {
       name
       id
        email
      }
    }
    
    }
`;
function Post() {

  const { loading, error, data } = useQuery(postSchema);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error}</p>;

  return(
      <Container >
         <Table bordered={true}>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>content</th>
                        <th>author name</th>
                        <th>author email</th>
                    </tr>
                </thead>
               {data.allPosts.map(({ title,content,author })=> (

                <tbody>
                    <tr>
                        <td>{title}</td>
                        <td>{content}</td>
                        <td>{author.name}</td>
                        <td>{author.email}</td>
                    </tr>
                    </tbody>
                    ))}
                   
                
            </Table>
            </Container>
  );
}


export default Post;