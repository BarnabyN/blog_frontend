import React from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import dbstring from "../constants.js";
import "../styles/AdminEditPost.css";

// CKEditor imports
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

require("dotenv").config();

export default function AdminEditPost() {
  const { id } = useParams();
  const history = useHistory();
  const token = localStorage.getItem("token");

  const [post, setPost] = React.useState();
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");
  const [content, setContent] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [tagslist, setTagslist] = React.useState([]);
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

  React.useEffect(() => {
    fetch(dbstring + `/post/${id}`)
      .then((res) => res.json())
      .then((p) => {
        setPost(p);
        setTitle(p.title);
        setDate(p.date);
        setContent(p.content);
        setTags(p.tags);
      });
  }, []);

  // Render all tags for the author to see
  React.useEffect(() => {
    fetch(dbstring + "/tags")
      .then((res) => res.json())
      .then((data) => data.alltags)
      .then((data) => {
        setTagslist(data);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(dbstring + `/editpost/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        date,
        currentAdmin,
        tags,
        content,
        id,
      }),
    })
      .then((res) => res.json())
      .then(history.push("/admin"));
  }

  return (
    <div className="reactWrapper">
      <CustomNavbar />
      <div className="content">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input
            className="input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <input
            className="input"
            placeholder="Author"
            value={currentAdmin}
            readOnly="true"
          />
          <br />
          <input
            className="input"
            value={tags.join(",")}
            onChange={(e) => setTags(e.target.value.split(","))}
          />
          <span className="alltags-list">({tagslist.join(", ")})</span>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <CKEditor
              editor={ClassicEditor}
              data={content}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
            />
          </div>
          <button type="submit">Update</button>
        </form>
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
