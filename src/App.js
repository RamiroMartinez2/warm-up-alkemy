import "./App.css";
import React, { useState, useEffect } from "react";
import Login from "./components/Login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import EditPost from "./components/EditPost/EditPost";

function App() {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts/";

  // Get Method - Read the posts

  const getPosts = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  useEffect(() => {
    getPosts();
  }, []);

  // Post Method - insert new post

  const addPost = (e) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data?.title,
        body: data?.body,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts([data, ...posts]);
      });
  };

  const onSubmit = (e) => {
    addPost(e);
  };

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  // Delete post

  const handleDelete = (postId) => {
    fetch(`${url}${postId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts([data, ...posts]);
      });
  };

  // Edit post

  const handleEdit = (postId, title, body) => {
    console.log({ url: `${url}${postId}`, title, body });

    fetch(`${url}${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
      }),
    })
      .then((res) => res.json())
      .then((data) => setPosts([data, ...posts]));
  };
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/post/:id">
            <EditPost
              addPost={addPost}
              onSubmit={onSubmit}
              handleInputChange={handleInputChange}
              posts={posts}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </Route>
          <Route exact path="/">
            <Home
              addPost={addPost}
              onSubmit={onSubmit}
              handleInputChange={handleInputChange}
              posts={posts}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
