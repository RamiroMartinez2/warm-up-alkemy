import React from "react";
import { Link } from "react-router-dom";

const EditPost = ({ onSubmit, handleInputChange, handleEdit, posts }) => {
  console.log(posts);
  // const mapPost = posts.map((i)=>{
  //   return (
  //     i.id
  //   )
  // })
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6">
            <h3>Edit post</h3>
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
                onClick={(e) => handleEdit(e)}
                type="submit"
                className="btn btn-primary mt-3"
              >
                Edit post
              </button>
              <Link to="/">
                <button>Go back</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPost;
