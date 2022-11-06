import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/HomePage/Home';
import Navbar from './Pages/Shared/Navbar';
import PageNotFound from './Pages/Shared/PageNotFound';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Footer from './Pages/Shared/Footer';
import PostDetails from './Pages/HomePage/PostDetails';
import Post from './Pages/HomePage/Post';

const App = () => {
  return (
    <div>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/post' element={<Post/>}></Route>
        <Route path='/posts/:postId' element={<PostDetails/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>

      <Footer/>

      <ToastContainer />
    </div>
  );
};

export default App;