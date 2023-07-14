import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {

  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
        <p>
          <Link to={`/posts/${post.id}`}>
          <strong>{post.title}</strong>
          </Link>
        </p>
        <p>{post.caption}</p>
        <p>Comments:</p>
        {post.comments !== null ?(
          <div>
        {post.comments.map((comment) => (
        <p key={comment.id}>{comment.message}</p>
              ))}
            </div>
        ) : null}
      </CardBody>
    </Card>
  );
};