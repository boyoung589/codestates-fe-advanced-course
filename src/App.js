//import axios from 'axios';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  const Main = lazy(() => import('./pages/Main'));
  const UserPost = lazy(() => {
    return import('./pages/UserPost');
  });

  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/posts/:id' element={<UserPost />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
