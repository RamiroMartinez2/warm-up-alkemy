import React from "react";
import { Link } from "react-router-dom";

export const ListPosts = (id) => {

  return (
    <>
      <div className="container">
        <div className="posts-list row">
          <div className="card mt-4 col-md-6 bg-ligt">
            <div className="card-body">
              <h5 className="card-title">{id.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Description</h6>
              <p className="card-text">{id.body}</p>
              <Link className="card-link" to={`/post/${id}`}>
                Edit
              </Link>
              <Link className="card-link">Delete</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
