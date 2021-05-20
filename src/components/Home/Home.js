import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ListPosts } from "../ListPosts/ListPosts";

export const Home = () => {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  console.log(posts);

  const url = "https://jsonplaceholder.typicode.com/posts/";

  // Get Method - Read the posts

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
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
      .then((data) => setPosts([data, ...posts]));
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

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6">
            <h3>Add New Post</h3>
            <form onSubmit={(e) => onSubmit(e)} className="add-post-form">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  id="title-value"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="body">Content</label>
                <textarea
                  name="body"
                  className="form-control"
                  id="body-value"
                  onChange={handleInputChange}
                />
              </div>
              <button
                onClick={(e) => addPost(e)}
                type="submit"
                className="btn btn-primary mt-3"
              >
                Add Post
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            {posts?.map((i) => {
              const { id, title, body } = i || {};
              return <ListPosts id={id} key={id} title={title} body={body} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
