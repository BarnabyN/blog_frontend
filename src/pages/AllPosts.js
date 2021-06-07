import React from "react";
import { useHistory, Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import dbstring from "../constants.js";
import "../styles/AllPostsPage.css";
require("dotenv").config();

export default function AllPostsPage() {
  const history = useHistory();

  const [posts, setPosts] = React.useState([]);
  const [tag, setTag] = React.useState("all");
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
        data.splice(0, 0, "all");
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
        <form className="form-tagselect">
          <select
            className="select-tagselect"
            onChange={(e) => setTag(e.target.value.toLowerCase())}
          >
            {tags.map((t) => (
              <option>{t[0].toUpperCase() + t.substring(1)}</option>
            ))}
          </select>
        </form>
        <ul>
          {posts
            .filter((p) => {
              if (tag === "all") {
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
