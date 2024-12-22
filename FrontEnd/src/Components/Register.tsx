import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

function Login() {
  const [name , setName] = useState('') ; 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://dev-diaries-murex.vercel.app/auth/register', {
        
        name: name , 
        email: email,
        password: password,
      });

      let data = response.data;

      if (data && data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem("userId" , data.userId) ; 
        navigate('/home');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10 }}
                    >
      <div className="bg-gray-800/80 shadow-xl rounded-lg p-8 w-full max-w-md border border-gray-700/40">
        <h1 className="text-center text-3xl font-extrabold text-white">
          Welcome to <span className="text-blue-500">DevDiaries</span>
        </h1>
        <p className="text-center text-gray-400 mt-2">
          Log in to create and share blogs!
        </p>

        <form className="space-y-6 mt-6" onSubmit={handleSubmit}>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-md bg-gray-900 text-gray-300 border border-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none py-2 px-3"
              placeholder="Ayush Rawal"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md bg-gray-900 text-gray-300 border border-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none py-2 px-3"
              placeholder="name@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md bg-gray-900 text-gray-300 border border-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none py-2 px-3"
              placeholder="********"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-2 hover:from-blue-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-400">
          Don’t have an account yet?{' '}
          <a href="/login" className="font-semibold leading-6 text-blue-500 hover:text-blue-300">
            Login
          </a>
        </p>
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      </div>
      </motion.div>
    </div>
  );
}

export default Login;
