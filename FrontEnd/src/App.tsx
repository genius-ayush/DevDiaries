
import './App.css'
import Navbar from '../../FrontEnd/src/Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './Components/Body';
import Register from './Components/Register';
import Login from './Components/Login';
import CreateBlog from './Components/CreateBlog';
import MyBlogs from './Components/MyBlogs';
import BlogDetail from './Components/BlogDetail';
import Hero from './Components/Hero';

function App() {

  return (
    <div className=' w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 '>
      
      <Router>
      <Navbar />
        
        <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/home' element={<Body />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<CreateBlog/>} />
        <Route path='/myBlogs' element={<MyBlogs/>} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      <Footer/>
      </Router>
      </div>
  )
}

export default App
