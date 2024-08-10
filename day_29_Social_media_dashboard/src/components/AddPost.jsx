import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
  InputLabel,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const CreatePost = () => {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(null);

  const handleTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    // Retrieve the current user from local storage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    //Get all users data from local storage
    const allUsers = JSON.parse(localStorage.getItem("allUsers"));

    if (loggedInUser) {
      // Create a new post object
      const newPost = {
        text: postText,
        image: image,
        timestamp: new Date().toISOString(),
        likes: 0,
      };

      if (!newPost.text || !newPost.image) {
        alert("Title and Image are required");
        return;
      }

      // Add the new post to the user's posts array
      const updatedPosts = [...(loggedInUser.posts || []), newPost];

      // Update the user object with the new posts array
      const updatedUser = { ...loggedInUser, posts: updatedPosts };

      // Save the updated user object back to local storage
      localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

      // Update the allUsers array with the updated user
      const updatedUsers = allUsers.map((user) =>
        user.username === loggedInUser.username ? updatedUser : user
      );

      // Save updated all users array to localstorage
      localStorage.setItem("allUsers", JSON.stringify(updatedUsers));

      // Clear the input fields after submission
      setPostText("");
      setImage(null);

      console.log("Post added:", newPost);
    } else {
      console.error("No logged-in user found.");
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
        minWidth: "400px",
        minHeight: "600px",
        width: "80%",
        height: "85%",
        marginY: "50px",
        overflowY: "scroll",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        Create Post
      </Typography>
      <TextField
        label="What's on your mind?"
        multiline
        rows={1}
        value={postText}
        onChange={handleTextChange}
        variant="outlined"
        fullWidth
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <InputLabel htmlFor="upload-image">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
            <Typography sx={{ paddingX: "10px" }}>Add Photo</Typography>
          </IconButton>
        </InputLabel>
        <input
          accept="image/*"
          id="upload-image"
          type="file"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        {image && (
          <Box
            component="img"
            src={image}
            alt="Selected"
            sx={{
              width: "70%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        )}
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ marginTop: "10px" }}
      >
        Post
      </Button>
    </Container>
  );
};

export default CreatePost;
