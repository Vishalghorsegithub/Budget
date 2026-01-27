import React from 'react';
import TableDisplay from '../components/TableDisplay';
import { FiEdit2, FiTrash2 } from "react-icons/fi"; // Using react-icons for a pro look

function Users() {
    const updateStatus = (isActive, name, email) => {
        alert(`Status Update: ${name} is ${isActive ? 'Active' : 'Inactive'}`);
    };

    // NEW: Action Handlers
    const handleEdit = (row) => alert("Editing: " + row.name);
    const handleDelete = (id) => {
        if (window.confirm("Are you sure?")) console.log("Deleting ID:", id);
    };

    const columns = [
        { header: "S No.", accessor: "", isdisplay: true, className: "w-12 text-center", type: "normal" },
        { header: "User", accessor: "name", isdisplay: true, className: "font-semibold", type: "normal" },
        { header: "Email", accessor: "email", isdisplay: true, className: "font-semibold", type: "normal" },
        { header: "Status", accessor: "isActive", isdisplay: true, type: "Button", clickFunction: updateStatus, clickFunctionParams: ["isActive", "name", "email"] },

        // --- ADDED ACTIONS COLUMN ---
        {
            header: "Actions",
            isdisplay: true,
            className: "text-center w-28",
            type: "Actions",
            // We pass the functions we want the table to trigger
            actions: [
                { icon: <FiEdit2 />, color: "text-blue-600", fn: handleEdit, label: "Edit" },
                { icon: <FiTrash2 />, color: "text-red-600", fn: (row) => handleDelete(row.id), label: "Delete" }
            ]
        },
    ];

    const data = [
        { id: 1, name: "John Doe", email: "john@example.com", isActive: true, date: "2024-01-10" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", isActive: false, date: "2024-02-15" },
        { id: 3, name: "Mike Ross", email: "mike@pearson.com", isActive: true, date: "2024-03-01" },
        { id: 4, name: "Rachel Zane", email: "rachel@zane.com", isActive: true, date: "2024-03-05" },
        { id: 5, name: "Louis Litt", email: "louis@litt.com", isActive: false, date: "2024-04-12" },
        { id: 6, name: "Harvey Specter", email: "harvey@specter.com", isActive: true, date: "2024-05-20" },
        { id: 7, name: "John Doe", email: "john@example.com", isActive: true, date: "2024-01-10" },
        { id: 8, name: "Jane Smith", email: "jane@example.com", isActive: false, date: "2024-02-15" },
        { id: 9, name: "Mike Ross", email: "mike@pearson.com", isActive: true, date: "2024-03-01" },
        { id: 10, name: "Rachel Zane", email: "rachel@zane.com", isActive: true, date: "2024-03-05" },
        { id: 11, name: "Louis Litt", email: "louis@litt.com", isActive: false, date: "2024-04-12" },
        { id: 12, name: "Harvey Specter", email: "harvey@specter.com", isActive: true, date: "2024-05-20" },
    ];

    return (
        <div className="p-6 bg-[#ffffff] rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-6">User Management</h2>
            <TableDisplay columns={columns} data={data} pageSize={10} />
        </div>
    );
}

export default Users;