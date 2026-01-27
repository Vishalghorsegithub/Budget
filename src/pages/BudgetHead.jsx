import React from "react";
import TableDisplay from "../components/TableDisplay"; // adjust path

function BudgetHead() {

    const columns = [
        {
            header: "Head ID",
            accessor: "id",
            isdisplay: true,
            className: "text-left",
            type: "normal",
        },
        {
            header: "Head Name",
            accessor: "name",
            isdisplay: true,
            className: "text-left",
            type: "normal",
        },
        {
            header: "Head Class",
            accessor: "class",
            isdisplay: true,
            className: "text-center",
            type: "normal",
        },
        {
            header: "Description",
            accessor: "desc",
            isdisplay: true,
            className: "text-left",
            type: "normal",
        },
    ];

    const budgetHeads = [
        {
            id: "BH001",
            name: "Infrastructure Development",
            class: "I",
            desc: "Funds allocated for building and infrastructure projects",
        },
        {
            id: "BH002",
            name: "Operational Expenses",
            class: "II",
            desc: "Day-to-day operational and maintenance expenses",
        },
        {
            id: "BH003",
            name: "Training & Skill Development",
            class: "III",
            desc: "Budget for employee training and development programs",
        },

        {
            id: "BH004",
            name: "Training & Skill Development",
            class: "III",
            desc: "Budget for employee training and development programs",
        },
        {
            id: "BH005",
            name: "Training & Skill Development",
            class: "IV",
            desc: "Budget for employee training and development programs",
        },
        {
            id: "BH006",
            name: "Training & Skill Development",
            class: "V",
            desc: "Budget for employee training and development programs",
        },
    ];

    return (
        <div className="p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">Budget Heads</h2>

            <TableDisplay
                columns={columns}
                data={budgetHeads}
                pageSize={10}
            />
        </div>
    );
}

export default BudgetHead;
