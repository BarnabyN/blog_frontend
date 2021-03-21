import React from "react";
import { useHistory, Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import dbstring from "../constants.js";
import "../styles/AdminHome.css";

// CKEditor imports
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

require("dotenv").config();

export default function AdminHome() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const [posts, setPosts] = React.useState([]);
  const [currentAdmin, setCurrentAdmin] = React.useState("");

  React.useEffect(() => {
    // If logged in: Get username
    if (token) {
      fetch(dbstring + "/get-current-admin", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((u) => {
          setCurrentAdmin(u["name"]);
        });
    }
    //  If not logged in, redirect to login page
    else {
      history.push("/admin-login");
    }
  }, [token]);

  // Get all posts
  React.useEffect(() => {
    fetch(dbstring + "/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts.reverse());
      });
  }, []);

  return (
    <div className="reactWrapper">
      <CustomNavbar />
      <div className="content">
        <Link to={`/newpost/`}>New Post</Link>
        <ul>
          {posts.map((p) => {
            return (
              <li>
                <Link to={`/editpost/${p.id}`}>{p.title}</Link>
              </li>
            );
          })}
        </ul>
        <button
          className="logout-button"
          onClick={() => {
            localStorage.removeItem("token");
            history.push("/posts");
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
