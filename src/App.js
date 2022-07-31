//import axios from 'axios';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // axios.get('https://jsonplaceholder.typicode.com/posts/1')
  //   .then(result => console.log('/posts/1', result))
  // axios.get('https://jsonplaceholder.typicode.com/comments')
  //   .then(result => console.log('/comments',result.data))
  // axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
  //   .then(result => console.log('/comments?postId=1',result.data))

  // axios.get('https://jsonplaceholder.typicode.com/users?email=Jayne_Kuhic@sydney.com')
  //   .then(result => console.log('/user/1', result))
  const Main = lazy(() => import('./pages/Main'));
  const PostPage = lazy(() => import('./pages/PostPage'));

  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/posts/:id' element={<PostPage />} />
        </Routes>
      </Suspense>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
