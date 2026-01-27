import React from "react";
import TableDisplay from "../components/TableDisplay"; // adjust path
import { Link } from "react-router-dom";

function BudgetExpenditure() {

    const columns = [
        {
            header: "Expenditure ID",
            accessor: "id",
            isdisplay: true,
            className: "text-center",
            type: "normal",
        },
        {
            header: "Budget Head",
            accessor: "head",
            isdisplay: true,
            className: "text-left",
            type: "normal",
        },
        {
            header: "Office",
            accessor: "office",
            isdisplay: true,
            className: "text-left",
            type: "normal",
        },
        {
            header: "Date",
            accessor: "date",
            isdisplay: true,
            className: "text-center",
            type: "normal",
        },
        {
            header: "Amount Spent",
            accessor: "amount",
            isdisplay: true,
            className: "text-right",
            type: "currency",
        },
        {
            header: "Remarks",
            accessor: "remarks",
            isdisplay: true,
            className: "text-left",
            type: "normal",
        },
    ];

    const expenditures = [
        {
            id: "BE001",
            head: "Infrastructure Development",
            office: "Bhopal Office",
            date: "2024-08-12",
            amount: 85000,
            remarks: "Initial construction work",
        },
        {
            id: "BE002",
            head: "Operational Expenses",
            office: "Indore Office",
            date: "2024-08-15",
            amount: 12000,
            remarks: "Electricity & internet bill",
        },
        {
            id: "BE003",
            head: "Training & Skill Development",
            office: "Gwalior Office",
            date: "2024-08-20",
            amount: 30000,
            remarks: "Employee training program",
        },
    ];

    return (
        <div className="p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">Budget Expenditure</h2>

            <div className="bg-white p-4 rounded-xl shadow mb-4">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-end">

                    <div className="flex justify-center items-center">
                        <Link to="/add-budget-expenditure" className="w-full bg-[#006D77] hover:bg-[#006D77] max-w-[150px] text-white py-2 px-4 rounded-lg">
                            + Add
                        </Link>
                    </div>

                    <div>
                        <input type="text" placeholder="Head Name" className="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-400 outline-none" />
                    </div>

                    <div>
                        <input type="text" placeholder="Office Name" className="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-400 outline-none" />
                    </div>

                    <div>
                        <input type="date" className="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-400 outline-none" />
                    </div>

                    <div>
                        <input type="date" className="mt-1 border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-400 outline-none" />
                    </div>

                    <div className="flex gap-2">
                        <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
                            Search
                        </button>
                        <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg">
                            Reset
                        </button>
                    </div>
                </div>
            </div>


            <TableDisplay
                columns={columns}
                data={expenditures}
                pageSize={10}
            />
        </div>
    );
}

export default BudgetExpenditure;

