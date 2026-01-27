import React from "react";
import { FiUsers, FiShoppingCart, FiActivity } from "react-icons/fi";

function DashBoard() {
    const stats = [
        { title: "Total Users", value: 120, icon: <FiUsers />, color: "bg-blue-500" },
        { title: "Total Offices", value: 35, icon: <FiShoppingCart />, color: "bg-green-500" },
        { title: "Active Tasks", value: 58, icon: <FiActivity />, color: "bg-orange-500" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow p-5 flex items-center gap-4 hover:shadow-lg transition"
                    >
                        <div className={`${item.color} text-white p-3 rounded-full text-xl`}>
                            {item.icon}
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{item.title}</p>
                            <h2 className="text-2xl font-semibold">{item.value}</h2>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-white rounded-xl shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Welcome</h2>
                <p className="text-gray-600">
                    This is your admin dashboard. From here you can manage users,
                    offices, and monitor system activity in real time.
                </p>
            </div>
        </div>
    );
}

export default DashBoard;
