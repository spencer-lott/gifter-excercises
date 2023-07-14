import React, { useEffect, useState } from "react";
import { getUserPostsById } from "../APIManagers/PostManager";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardImg } from "reactstrap";


export const UserPosts = () => {
    const [userPost, setPost] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      getUserPostsById(id).then((data) => {
        setPost(data)
    })
    .catch((error) => {
        console.log("Error fetching user posts:", error)
    });
    }, [id]); 

    return (
      <div className="userCardContainer">
        {userPost.posts?.map((post) => (
        <Card key={post.id}>
                <CardImg top src={post.imageUrl} alt={post.title} />
                <CardBody>
                  <p>{post.title}</p>
                  <p>{post.caption}</p>
                </CardBody>
          </Card>
        ))}
      </div>
    );
}