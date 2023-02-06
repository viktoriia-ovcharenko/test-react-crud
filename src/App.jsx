import React, { useState, useEffect } from 'react';
import './App.css';
import { CreatePost } from './components/CreatePost';
import { ViewPost } from './components/ViewPost';
import { getAllPosts, deletePost, getPostById } from './services/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const fetchPosts = async () => {
    try {
      setPosts(await getAllPosts());
    } catch (error) {
      throw new Error('error');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const removePost = async (id) => {
    await deletePost(id)

    setPosts(posts.filter(post => post.id !== id));
  };

  const viewPost = async (postId) => {
    setSelectedPost(await getPostById(postId));
  };

  return (
    <>
      {selectedPost && (
        <ViewPost
          selectedPost={selectedPost}
        />
      )}
      <div style={{width: "95%"}}>
        <h2 className="text-center">Post List</h2>
        <div className = "row">
          <CreatePost posts={posts} setPosts={setPosts} />
        </div>
        <br></br>
        <div className = "row">
          <table className = "table table-striped table-bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {
                posts.map(post => 
                  <tr key = {post.id}>
                    <td> {post.title} </td>   
                    <td> {post.body}</td>
                    <td>
                      <button
                        style={{marginLeft: "10px"}}
                        onClick={() => removePost(post.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      <button
                      style={{marginLeft: "10px", backgroundColor: "green", color: "white"}}
                      onClick={ () => viewPost(post.id)}
                      className="btn"
                    >
                      View
                    </button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
