import { FiHome, FiUsers, FiShoppingCart } from "react-icons/fi";

import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            <nav className="p-4">
                <ul className="space-y-2">




                    <Link to="/"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg
                         text-gray-700 hover:bg-gray-100 cursor-pointer
                         transition">
                        <FiHome />
                        Dashboard
                    </Link>



                    <Link to="/users"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg
                         text-gray-700 hover:bg-gray-100 cursor-pointer
                         transition">
                        <FiUsers />
                        Users
                    </Link>

                    <Link to="/offices"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg
                         text-gray-700 hover:bg-gray-100 cursor-pointer
                         transition">
                        <FiShoppingCart />
                        Offices
                    </Link>
                </ul>
            </nav>
        </>
    );
}
