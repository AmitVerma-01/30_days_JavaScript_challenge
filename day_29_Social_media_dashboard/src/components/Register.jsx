import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = ({
  user,
  setUser,
  isLoggedIn,
  setIsLoggedIn,
  allUsers,
  setAllUsers,
}) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem("allUsers");
    if (storedUsers) {
      setAllUsers(JSON.parse(storedUsers));
    }
  }, [setAllUsers]);

  const handleRegister = () => {
    if (!user.username || !user.password) {
      alert("Both fields are required.");
      return;
    }

    const userExists = allUsers.some((u) => u.username === user.username);

    if (userExists) {
      setError("User already exists!");
    } else {
      // Store the user data in localStorage upon login
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      const updatedUsers = [...allUsers, user];
      setAllUsers(updatedUsers);
      localStorage.setItem("allUsers", JSON.stringify(updatedUsers));

      setIsLoggedIn(true);
      console.log("User logged in:", user);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          border: "1px solid gray",
          width: "25%",
          height: "50%",
          borderRadius: "20px",
          padding: "20px 40px",
          justifyContent: "space-evenly",
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: "1.5rem" }}>
          Register
        </Typography>
        {error && (
          <Typography sx={{ color: "red", textAlign: "center" }}>
            {error}
          </Typography>
        )}
        <FormControl
          sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <TextField
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            value={user.username}
            onChange={handleInputChange}
            required
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            value={user.password}
            onChange={handleInputChange}
            required
          />
          <Button
            sx={{
              backgroundColor: "burlywood",
              color: "white",
              fontWeight: "600",
              ":hover": { backgroundColor: "Highlight" },
            }}
            onClick={handleRegister}
          >
            Register
          </Button>
        </FormControl>
        <Typography
          sx={{
            textAlign: "right",
            cursor: "pointer",
            ":hover": { color: "burlywood" },
          }}
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
