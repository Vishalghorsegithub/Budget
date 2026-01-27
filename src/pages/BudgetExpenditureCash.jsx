import React from 'react'
import TableDisplay from '../components/TableDisplay';

function BudgetExpenditureCash() {

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
        <>

            <div className="p-6 bg-white rounded-xl shadow">
                <h2 className="text-2xl font-bold mb-4">Budget Expenditure</h2>
                <div className="bg-white p-4 rounded-xl shadow mb-4">

                    <TableDisplay
                        columns={columns}
                        data={expenditures}
                        pageSize={10}
                    />

                </div>
            </div>
        </>
    )
}

export default BudgetExpenditureCash