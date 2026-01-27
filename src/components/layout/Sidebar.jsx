import { FiHome, FiUsers, FiShoppingCart } from "react-icons/fi";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaTableList, FaMoneyBill1 } from "react-icons/fa6";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";



import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition
     ${isActive
        ? "bg-[#006D77] text-[#EDF6F9]"
        : "text-gray-700 hover:bg-[#006D77] hover:text-[#EDF6F9]"
    }`;

export default function Sidebar() {
    return (
        <nav className="p-4">
            <ul className="space-y-2">
                <NavLink to="/" className={linkClass}>
                    <FiHome />
                    Dashboard
                </NavLink>

                <NavLink to="/users" className={linkClass}>
                    <FiUsers />
                    Users
                </NavLink>

                <NavLink to="/offices" className={linkClass}>
                    <RiHomeOfficeFill />
                    Offices
                </NavLink>

                <NavLink to="/head-master" className={linkClass}>
                    <FaTableList />
                    Budget Head
                </NavLink>

                <NavLink to="/allocation" className={linkClass}>
                    <FaCoins />
                    Budget Allocation
                </NavLink>

                <NavLink to="/expenditure" className={linkClass}>
                    <BsCurrencyExchange />
                    Budget Expenditure
                </NavLink>

                <NavLink to="/budget-expenditure-cash" className={linkClass}>
                    <FaMoneyBill1 />
                    Expenditure Cash
                </NavLink>
            </ul>
        </nav>
    );
}
