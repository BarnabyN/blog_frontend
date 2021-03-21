import React from "react";
import { useParams } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import dbstring from "../constants.js";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    fetch(dbstring + `/post/${id}`)
      .then((res) => res.json())
      .then((p) => {
        setPost(p);
        console.log(p);
      });
  }, []);

  if (post === null) {
    return (
      <div>
        <CustomNavbar />
        <div className="main">Loading post...</div>
      </div>
    );
  }

  if (post.error) {
    return (
      <div>
        <CustomNavbar />
        <div>Error: {post.error}</div>
      </div>
    );
  }

  return (
    <div className="reactWrapper">
      <CustomNavbar />
      <div className="content">
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}
