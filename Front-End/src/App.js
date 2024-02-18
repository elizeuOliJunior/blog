
import React from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div>
      <h1>Meu Blog Pessoal</h1>
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
