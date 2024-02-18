import React, { useState, useEffect } from 'react';
import api from '../services/api';

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const response = await api.get(`/comments/${postId}`);
      setComments(response.data.comments);
    }

    fetchComments();
  }, [postId]);

  return (
    <div>
      <h3>Comentários</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.content}>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
