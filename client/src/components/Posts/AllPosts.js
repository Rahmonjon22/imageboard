import React from 'react';
import Post from "./Post/Post.js";
import useStyles from "./stylesAllPosts.js";

export const AllPosts = () => {
  const classes = useStyles(); // classes container
  return (
    <div>
      <Post />
      <Post />
    </div>
  );
};

export default AllPosts;
