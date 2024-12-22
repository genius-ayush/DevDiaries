import  { useEffect, useState } from 'react';
import { NotebookText, CircleUserRound } from 'lucide-react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchedData = async () => {
            try {
                if (token) {
                    const response = await axios.get("http://localhost:3000/auth/me", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                    });

                    const data = response.data;

                    if (data.name) {
                        setName(data.name);
                    }
                }
            } catch (err) {
                console.error("Error fetching data", err);
            }
        };
        fetchedData();
    }, []);

    return (
        <nav className="sticky mx-auto wrapper top-0 z-50 flex items-center gap-2 py-6 w-2/3">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10 }}
                className="flex w-full justify-between mx-auto bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border-gray-700 border-[0.1px] p-6 rounded-2xl"
            >
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => {
                        navigate("/home");
                    }}
                >
                    <NotebookText className='text-white' />
                    <span className="text-lg md:text-2xl font-bold tracking-tight text-foreground hidden md:block text-white">
                        <span className=''>Dev</span>Diaries
                    </span>
                </div>

                <div className='flex items-center gap-8'>
                    <div
                        className="hover:text-gray-300 cursor-pointer text-white"
                        onClick={() => {
                            navigate("/home");
                        }}
                    >
                        Home
                    </div>
                    <div
                        className="hover:text-gray-300 cursor-pointer text-white"
                        onClick={() => {
                            navigate("/myBlogs");
                        }}
                    >
                        My Blogs
                    </div>
                    <div
                        className="hover:text-gray-300 cursor-pointer text-white"
                        onClick={() => {
                            navigate("/create");
                        }}
                    >
                        Create
                    </div>
                    {name ? (
                        <Menu>
                            <MenuButton className="flex items-center gap-2 text-white hover:text-gray-300 cursor-pointer">
                                <CircleUserRound className='text-white' size={32} />
                                {name}
                            </MenuButton>
                            <MenuItems
                                className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-gray-800 p-2 shadow-lg focus:outline-none"
                            >
                                <MenuItem>
                                    {({ active }) => (
                                        <button
                                            className={`${
                                                active ? 'bg-gray-700' : ''
                                            } flex w-full items-center gap-2 px-4 py-2 text-sm text-white`}
                                            onClick={() => navigate('/profile')}
                                        >
                                            Profile
                                        </button>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ active }) => (
                                        <button
                                            className={`${
                                                active ? 'bg-gray-700' : ''
                                            } flex w-full items-center gap-2 px-4 py-2 text-sm text-white`}
                                            onClick={() => navigate('/settings')}
                                        >
                                            Settings
                                        </button>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ active }) => (
                                        <button
                                            className={`${
                                                active ? 'bg-gray-700' : ''
                                            } flex w-full items-center gap-2 px-4 py-2 text-sm text-white`}
                                            onClick={() => {
                                                localStorage.removeItem('token');
                                                navigate('/login');
                                            }}
                                        >
                                            Logout
                                        </button>
                                    )}
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    ) : (
                        <button
                            className="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded"
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            Login
                        </button>
                    )}
                </div>
            </motion.div>
        </nav>
    );
}

export default Navbar;
