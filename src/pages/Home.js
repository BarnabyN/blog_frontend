import React from "react";
import { useHistory, Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import dbstring from "../constants.js";
require("dotenv").config();

export default function HomePage() {
  const history = useHistory();

  return (
    <div className="reactWrapper">
      <CustomNavbar />
      <div className="content">
        <h4>Writings</h4>
        <span>
          I call them 'writings' or 'posts' because I am yet to accept the
          reality that I have a blog. The latest article is below, but if you
          want anything older then head over to the{" "}
          <Link className="link" to="/posts">
            posts
          </Link>{" "}
          page.
        </span>
        <p>---Put the latest article in here!---</p>
        <h4>Who are you?</h4>
        <span>
          If you have an interest (as you should) to learn more about the
          individuals behind the opinions you read, then head over to my{" "}
          <Link className="link" to="/about">
            about page
          </Link>
          .
        </span>
      </div>
    </div>
  );
}
