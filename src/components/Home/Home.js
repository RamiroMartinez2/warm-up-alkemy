import React, { useState, useEffect } from "react";
import { ListPosts } from "../ListPosts/ListPosts";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts/";

  // Get Method

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6">
            <h3>Add New Post</h3>
            <form className="add-post-form">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title-value" />
              </div>
              <div className="form-group">
                <label htmlFor="body">Content</label>
                <textarea className="form-control" id="body-value" />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Add Post
              </button>
            </form>
          </div>
        </div>
      </div>

      {posts?.map((post) => (
        <ListPosts post={post} />
      ))}
    </>
  );
};
