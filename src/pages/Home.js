import React from "react";
import { useHistory, Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import dbstring from "../constants.js";
import "../styles/HomePage.css";
require("dotenv").config();

export default function Home() {
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

  if (posts === null) {
    return (
      <div>
        <CustomNavbar />
        <div className="main">Loading post...</div>
      </div>
    );
  }

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
                // borderColor: tag === t ? "black" : "",
                borderBottomColor: tag === t ? "black" : "transparent",
              }}
            >
              {t}
            </Link>
          ))}
        </div>
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
              <div className="div-postwrapper">
                <span className="post-title">{p.title}</span>
                <div className="post-info">
                  <span className="post-date">
                    {p.date}&nbsp; &middot; &nbsp;
                  </span>
                  <span className="post-tags">{p.tags.join(", ")}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: p.content }} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
