// frontend/src/components/CommentForm.js

import React, { useState } from 'react';
import api from '../services/api';

function CommentForm({ postId }) {
  const [content, setContent] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    await api.post('/comments', { content, post_id: postId });

    setContent('');
  }

  return (
    <div>
      <h3>Adicionar Comentário</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Comentário:
          <textarea value={content} onChange={e => setContent(e.target.value)} />
        </label>
        <button type="submit">Adicionar Comentário</button>
      </form>
    </div>
  );
}

export default CommentForm;
