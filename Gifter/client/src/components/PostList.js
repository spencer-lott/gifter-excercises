import React, { useEffect } from "react";
import { useState } from "react";
import { getAllPostsWithComments } from "../APIManagers/PostManager";
import { Post } from "./Post";
import { PostSearch } from "./PostSearch";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    getAllPostsWithComments().then(allPosts => setPosts(allPosts)); 
  };

  useEffect(() => {
    getPosts();
  }, []); 


  return (<>

      <PostSearch />

      <div className="container">
        <div className="row justify-content-center">
          <div className="cards-column">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;

