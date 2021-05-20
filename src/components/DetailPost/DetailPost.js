import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailPost = ({posts}) => {
  const [dataDetail, setDataDetail] = useState([]);
  console.log(dataDetail);

  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const getPosts = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDataDetail(data));
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <div className="posts-list row">
        <div className="card mt-4 col-md-6 bg-ligt">
          <div className="card-body">
            <h5 className="card-title">{dataDetail.title}</h5>
            <h6>Content</h6>
            <p>{dataDetail.body}</p>
            <Link to='/'>
              <button>Go back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
