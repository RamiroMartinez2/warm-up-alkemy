import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = ({
  addPost,
  onSubmit,
  handleInputChange,
  posts,
  handleEdit,
  handleDelete,
}) => {
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
              const { id, title } = i || {};
              return (
                <div key={id} className="container">
                  <div className="posts-list row">
                    <div className="card mt-4 col-md-6 bg-ligt">
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <Link>Detail</Link>
                        <Link className="card-link" to={`/post/${id}`}>
                        <button onClick={() => handleEdit(id)}>Edit</button>
                        </Link>

                        <button onClick={() => handleDelete(id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
