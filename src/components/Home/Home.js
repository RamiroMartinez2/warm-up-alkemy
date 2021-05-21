import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const Home = ({ title, body, id, onEdit, onDelete, addPost }) => {
  const [isEdit, setIsEdit] = useState(false);
  const history = useHistory();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) history.push("/login");
  }, [history, token]);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.title.value, evt.target.body.value);
    setIsEdit(!isEdit);
  };

  return (
    <div key={id} className="container d-block mx-auto">
      <div className="posts-list row mx-1">
        <div className="card mt-4 col-md-6">
          <div className="card-body border border-white">
            {isEdit ? (
              <form className="form-control border border-white" onSubmit={handleOnEditSubmit}>
                <input
                  className="form-control"
                  placeholder="title"
                  name="title"
                  defaultValue={title}
                />
                <textarea
                  className="form-control mt-4 mb-4"
                  placeholder="content"
                  name="body"
                  defaultValue={body}
                />
                <button
                  className="btn btn-primary mr-3"
                  onSubmit={handleOnEditSubmit}
                >
                  Save
                </button>
              </form>
            ) : (
              <div className="card-body">
                <h5 className="card-title mb-5">{title}</h5>
                <p className="card-title mb-3">{body}</p>
                <div>
                  <button class="btn btn-warning ms-4" onClick={handleEdit}>
                    Edit
                  </button>
                  <button class="btn btn-danger ms-4" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
