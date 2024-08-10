import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Add, ImageSharp } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, setIsLoggedIn }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const navigate = useNavigate();

  const handleListItemClick = (event, index, path) => {
    setSelectedIndex(index);
    navigate(path);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
    localStorage.removeItem("loggedInUser");
  };

  return (
    <Box
      sx={{
        width: "25%",
        backgroundColor: "transparent",
        boxShadow: "3px 0px 10px rgb(0,0,0,0.3)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "fixed",
        left: 0,
      }}
    >
      <Typography
        sx={{ textAlign: "center", fontSize: "1.5rem", padding: "2rem" }}
      >
        Welcome, {user.username}
      </Typography>
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{ padding: 0 }}
      >
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0, "addpost")}
        >
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="Add new post" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1, "allpost")}
        >
          <ListItemIcon>
            <ImageSharp />
          </ListItemIcon>
          <ListItemText primary="All Posts" />
        </ListItemButton>
      </List>
      <Button
        sx={{
          paddingY: "20px",
          backgroundColor: "burlywood",
          ":hover": { backgroundColor: "Highlight" },
          color: "white",
          fontWeight: "700",
        }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Navbar;
