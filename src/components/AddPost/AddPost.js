import React from "react";

export const AddPost = ({ addPost }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    addPost(evt.target.title.value, evt.target.body.value);
    evt.target.title.value = "";
    evt.target.body.value = "";
  };

  return (
    <div className="container ">
      <div className="row mt-3">
        <div className="col-md-6">
          <h3 className="mt-5">Add new post</h3>
          <form className="add-post-form" onSubmit={handleOnSubmit}>
            <div className="form-group mt-5">
              <label htmlFor="title">Title</label>
              <input
                className="form-control"
                placeholder="Add title"
                name="title"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Content</label>
              <textarea
                className="form-control"
                placeholder="Add content"
                name="body"
                required
              />
            </div>

            <button className="btn btn-primary mt-3" onSubmit={handleOnSubmit}>
              Add Post
            </button>
            <hr />
          </form>
        </div>
      </div>
    </div>
  );
};
