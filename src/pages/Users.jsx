import React from 'react';
import TableDisplay from '../components/TableDisplay';

function Users() {
    const columns = [
        { header: "S No.", accessor: "", isdisplay: true, className: "w-12 text-center", type: "normal" },
        { header: "User", accessor: "name", isdisplay: true, className: "font-semibold", type: "normal" },
        { header: "Email", accessor: "email", isdisplay: true, className: "text-xs italic", type: "normal" },
        { header: "Registered On", accessor: "date", isdisplay: true, type: "Date", format: "en-IN" },
        { header: "Status", accessor: "isActive", isdisplay: true, type: "Button", clickFunction: updateStatus, clickFunctionParams: ["isActive", "name", "email"] },
    ];


    const data = [
        { name: "John Doe", email: "john@example.com", isActive: true, date: "2024-01-10" },
        { name: "Jane Smith", email: "jane@example.com", isActive: false, date: "2024-02-15" },
        { name: "Mike Ross", email: "mike@pearson.com", isActive: true, date: "2024-03-01" },
        { name: "Rachel Zane", email: "rachel@zane.com", isActive: true, date: "2024-03-05" },
        { name: "Louis Litt", email: "louis@litt.com", isActive: false, date: "2024-04-12" },
        { name: "Harvey Specter", email: "harvey@specter.com", isActive: true, date: "2024-05-20" },
    ];

    return (
        <div className="p-8 bg-gray-50 min-h-screen">


            {/* Scalable Table with PageSize = 4 */}
            <TableDisplay columns={columns} data={data} pageSize={5} perPageRecords={3} totalRecords={data.length} />

        </div>
    );
}

export default Users;