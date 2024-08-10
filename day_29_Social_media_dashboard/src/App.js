import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout";
import AddPost from "./components/AddPost";
import { useEffect, useState } from "react";
import Register from "./components/Register";
import AllPosts from "./components/AllPosts";

function App() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    // Check if a user is already logged in
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              user={user}
              setUser={setUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              allUsers={allUsers}
              setAllUsers={setAllUsers}
            />
          }
        />
        <Route
          path="/register"
          index
          element={
            <Register
              user={user}
              setUser={setUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              allUsers={allUsers}
              setAllUsers={setAllUsers}
            />
          }
        />
        <Route
          path="/"
          element={
            <Layout
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              user={user}
            />
          }
        >
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/allpost" element={<AllPosts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
