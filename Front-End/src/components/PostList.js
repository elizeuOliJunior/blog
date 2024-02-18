
import React, { useState, useEffect } from 'react';
import api from '../services/api';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await api.get('/posts');
      setPosts(response.data.posts);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Lista de Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.title}>
            <strong>{post.title}</strong>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
