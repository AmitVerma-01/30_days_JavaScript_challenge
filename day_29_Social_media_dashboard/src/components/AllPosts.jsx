import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import Post from "./Post";

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Retrieve the logged-in user
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(user);

    // Retrieve all users and their posts from local storage
    const users = JSON.parse(localStorage.getItem("allUsers")) || [];

    // Collect all posts with associated user information
    const posts = users.flatMap((user) =>
      (user.posts || []).map((post) => ({
        username: user.username,
        text: post.text,
        image: post.image,
        timestamp: post.timestamp,
        likes: post.likes,
      }))
    );

    // Only set allPosts if it's currently empty to avoid duplicates
    if (allPosts.length === 0) {
      setAllPosts(posts);
    }
  }, [allPosts]);

  return (
    <Container sx={{ width: "80%" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        All Posts
      </Typography>
      {allPosts.length === 0 && (
        <Typography
          sx={{ textAlign: "center", fontSize: "1.2rem", color: "GrayText" }}
        >
          Add posts to see here
        </Typography>
      )}
      {allPosts.map((post, index) => (
        <Post post={post} key={index} loggedInUser={loggedInUser} />
      ))}
    </Container>
  );
};

export default AllPosts;
