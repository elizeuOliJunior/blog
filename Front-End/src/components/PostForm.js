
import React, { useState } from 'react';
import api from '../services/api';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    await api.post('/posts', { title, content });

    setTitle('');
    setContent('');
  }

  return (
    <div>
      <h2>Adicionar Novo Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Conteúdo:
          <textarea value={content} onChange={e => setContent(e.target.value)} />
        </label>
        <button type="submit">Adicionar Post</button>
      </form>
    </div>
  );
}

export default PostForm;
