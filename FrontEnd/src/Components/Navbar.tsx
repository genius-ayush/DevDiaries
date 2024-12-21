    import { NotebookText } from 'lucide-react';
    import { motion } from "framer-motion";
    import { CircleUserRound } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';
    function Navbar() {
        const user = false;
        const navigate = useNavigate()

        return (
            <nav className="sticky mx-auto wrapper top-0 z-50 flex items-center gap-2 py-6 w-2/3">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10 }}
                    className="flex w-full justify-between mx-auto bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg  border-gray-700 border-[0.1px] p-6 rounded-2xl">
                    <div className="flex items-center gap-2 cursor-pointer"onClick={() => {
                                navigate("/home");
                              }}>
                        <NotebookText className='text-white ' />

                        <span className="text-lg md:text-2xl font-bold tracking-tight text-foreground hidden md:block text-white"><span className=''>Dev</span>Diaries</span>

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
                        {!user ? (
                            <button className="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded" onClick={() => {
                                navigate("/login");
                              }}>
                                Login
                            </button>
                        ) : (
                            <CircleUserRound className='text-white ' size={32} />
                        )}


                    </div>

                </motion.div>
            </nav>
        )
    }

    export default Navbar