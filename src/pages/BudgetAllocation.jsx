import React from "react";
import TableDisplay from "../components/TableDisplay";

function BudgetAllocation() {

    const columns = [
        {
            header: "Allocation ID",
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
            header: "MPBPL",
            accessor: "MPBPL",
            isdisplay: true,
            className: "text-right",
            type: "currency",
        },
        {
            header: "MPIND",
            accessor: "MPIND",
            isdisplay: true,
            className: "text-right",
            type: "currency",
        },
        {
            header: "MPGWL",
            accessor: "MPGWL",
            isdisplay: true,
            className: "text-right",
            type: "currency",
        },
    ];

    const allocations = [
        {
            id: "BA001",
            head: "Infrastructure Development",
            MPBPL: 500000,
            MPIND: 300000,
            MPGWL: 200000,
        },
        {
            id: "BA002",
            head: "Operational Expenses",
            MPBPL: 200000,
            MPIND: 150000,
            MPGWL: 100000,
        },
        {
            id: "BA003",
            head: "Training & Skill Development",
            MPBPL: 120000,
            MPIND: 80000,
            MPGWL: 50000,
        },
    ];

    return (
        <div className="p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
                Office-wise Budget Allocation
            </h2>

            <TableDisplay
                columns={columns}
                data={allocations}
                pageSize={10}
            />
        </div>
    );
}

export default BudgetAllocation;
