import React from 'react';

export const ViewPost = (selectedPost) => {
  const { title, body, userId } = selectedPost;

  return (
    <div>
      <br></br>
      <div className = "card col-md-6 offset-md-3">
        <h3 className = "text-center"> View Posts Details</h3>
        <div className = "card-body">
          <div className = "row">
            <label>Post Title: </label>
            <div>{title}</div>
          </div>
          <div className = "row">
            <label>Post Body: </label>
            <div>{body}</div>
          </div>
          <div className = "row">
            <label>Post User ID: </label>
            <div>{userId}</div>
          </div>
        </div>
      </div>
    </div>
  )
};
