
import { Link } from 'react-router-dom';
import { useAuth } from '../Provider/AuthProvider';

const Navbar = () => {
    const { logOut } = useAuth();
    return (
        <nav className="bg-gradient-to-r p-4 shadow-md">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">

                <Link to="/" className="text-white text-3xl font-extrabold tracking-wide mb-2 md:mb-0 transition-transform transform hover:scale-110">
                    Task Manager
                </Link>


                <div className="flex items-center space-x-6">
                    <button
                        onClick={logOut}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Logout
                    </button>


                </div>
            </div>
        </nav>
    );
};

export default Navbar;