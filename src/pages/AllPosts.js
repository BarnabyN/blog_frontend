import React from "react";
import { useHistory, Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import dbstring from "../constants.js";
import "../styles/AllPostsPage.css";
require("dotenv").config();

export default function AllPostsPage() {
  const history = useHistory();

  const [posts, setPosts] = React.useState([]);
  const [tag, setTag] = React.useState("All");
  const [tags, setTags] = React.useState([]);

  React.useEffect(() => {
    fetch(dbstring + "/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts.reverse());
      });
  }, []);

  React.useEffect(() => {
    fetch(dbstring + "/tags")
      .then((res) => res.json())
      .then((data) => data.alltags)
      .then((data) => {
        data.splice(0, 0, "All");
        return data;
      })
      .then((data) => {
        setTags(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="reactWrapper">
      <CustomNavbar />
      <div className="content">
        <div className="div-tagbar">
          {tags.map((t) => (
            <Link
              className="tagbutton"
              onClick={() => setTag(t)}
              style={{
                borderBottomColor: tag === t ? "black" : "transparent",
              }}
            >
              {t}
            </Link>
          ))}
        </div>
        <ul>
          {posts
            .filter((p) => {
              if (tag === "All") {
                return p;
              } else {
                return p.tags.includes(tag);
              }
            })
            .map((p) => {
              return (
                <li>
                  <Link className="list-item" to={`/post/${p.id}`}>
                    {p.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
