import React from "react";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import AboutPage from "./pages/About";
import PostPage from "./pages/Post";
import AllPostsPage from "./pages/AllPosts";
import AdminLogin from "./pages/AdminLogin";
import AdminCreatePost from "./pages/AdminCreatePost";
import AdminEditPost from "./pages/AdminEditPost";
import AdminHome from "./pages/AdminHome";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <AllPostsPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
        <Route path="/admin-login">
          <AdminLogin />
        </Route>
        <Route path="/admin">
          <AdminHome />
        </Route>
        <Route path="/newpost">
          <AdminCreatePost />
        </Route>
        <Route path="/editpost/:id">
          <AdminEditPost />
        </Route>
        <Redirect from="*" to="/home" />
      </Switch>
    </BrowserRouter>
  );
}
