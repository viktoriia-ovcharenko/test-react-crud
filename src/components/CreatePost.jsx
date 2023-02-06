import React, { useState } from 'react';
import { createPost } from '../services/posts';

export const CreatePost = (posts, setPosts) => {
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');

  const savePost = (event) => {
    event.preventDefault();

    const newId = posts.length;
    let post = { userId: 1, id: newId, title: newTitle, body: newComment };

    createPost(post).then(res =>{
      setPosts([post, ...posts]);
    });

    setNewComment('');
    setNewTitle('');
  }

  const changeTitleHandler = (event) => {
    setNewTitle(event.target.value);
  }

  const changeCommentHandler= (event) => {
    setNewComment(event.target.value);
  }

  const cancel = () => {
    setNewComment('');
    setNewTitle('');
  }

  return (
    <div>
      <br></br>
      <div className = "container">
        <div className = "row">
          <div className = "card col-md-6 offset-md-3 offset-md-3">
            <div className = "card-body">
              <form>
                <div className = "form-group">
                  <label> Title: </label>
                  <input placeholder="Title" name="title" className="form-control" 
                      value={newTitle} onChange={changeTitleHandler}/>
                </div>

                <div className = "form-group">
                  <label> Comment: </label>
                  <input placeholder="Comment" name="comment" className="form-control" 
                      value={newComment} onChange={changeCommentHandler}/>
                </div>

                <button className="btn btn-success" onClick={savePost}>
                  Save
                </button>
                
                <button className="btn btn-danger" onClick={cancel} style={{marginLeft: "10px"}}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
