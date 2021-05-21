import "./App.css";
import React, { useState, useEffect } from "react";
import Login from "./components/Login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { AddPost } from "./components/AddPost/AddPost";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  };

  const addPost = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setPosts((posts) => [...posts, data]);
      })
      .catch((error) => console.log(error));
  };

  const onEdit = async (id, title, body) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        const updatedUsers = posts.map((post) => {
          if (post.id === id) {
            post.title = title;
            post.body = body;
          }

          return post;
        });

        setPosts((posts) => updatedUsers);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setPosts(
            posts.filter((post) => {
              return post.id !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <AddPost addPost={addPost} />
            {posts.map((post) => (
              <Home
                id={post.id}
                key={post.id}
                title={post.title}
                body={post.body}
                onEdit={onEdit}
                onDelete={onDelete}
                addPost={addPost}
              />
            ))}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
