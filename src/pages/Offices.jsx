import React from "react";
import TableDisplay from "../components/TableDisplay"; // adjust path

function Offices() {

    const columns = [
        {
            header: "S No.",
            accessor: "id",
            isdisplay: true,
            className: "w-12 text-center",
            type: "normal"
        },
        {
            header: "Office Name",
            accessor: "name",
            isdisplay: true,
            className: "text-left",
            type: "normal"
        },
        {
            header: "Office Code",
            accessor: "code",
            isdisplay: true,
            className: "text-center",
            type: "normal"
        },
        {
            header: "City",
            accessor: "city",
            isdisplay: true,
            className: "text-center",
            type: "normal"
        },
        {
            header: "Office ID",
            accessor: "officeID",
            isdisplay: true,
            className: "text-center",
            type: "normal"
        }
    ];

    const offices = [
        { id: 1, name: "Bhopal Office", code: "MPBPL", city: "Bhopal", officeID: "101" },
        { id: 2, name: "Indore Office", code: "MPIND", city: "Indore", officeID: "102" },
        { id: 3, name: "Gwalior Office", code: "MPGWL", city: "Gwalior", officeID: "103" },
        { id: 4, name: "Bhopal Office", code: "MPBPL", city: "Bhopal", officeID: "101" },
        { id: 5, name: "Indore Office", code: "MPIND", city: "Indore", officeID: "102" },
        { id: 6, name: "Gwalior Office", code: "MPGWL", city: "Gwalior", officeID: "103" }
    ];

    return (
        <div className="p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-6">Office Management</h2>

            <TableDisplay
                columns={columns}
                data={offices}
                pageSize={10}
            />
        </div>
    );
}

export default Offices;
