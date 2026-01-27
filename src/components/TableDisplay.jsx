import React, { useState, useMemo } from "react";

function TableDisplay({ columns = [], data = [], pageSize = 10 }) {
    const [page, setPage] = useState(1);

    const visibleCols = useMemo(() => columns.filter(c => c.isdisplay !== false), [columns]);
    const totalPages = Math.ceil(data.length / pageSize);

    const paginatedData = useMemo(() => {
        const start = (page - 1) * pageSize;
        return data.slice(start, start + pageSize);
    }, [data, page, pageSize]);

    const handleAction = (col, row) => {
        if (col.clickFunction && typeof col.clickFunction === "function") {
            const params = col.clickFunctionParams
                ? col.clickFunctionParams.map(key => row[key])
                : [row];
            col.clickFunction(...params);
        }
    };

    const renderCell = (row, col, rowIndex) => {
        const value = row[col.accessor];

        if (col.header === "S No.") return (page - 1) * pageSize + rowIndex + 1;
        if (col.render) return col.render(value, row);

        switch (col.type) {
            case "Date":
                return value ? new Date(value).toLocaleDateString(col.format || "en-IN") : "-";

            case "Button":
                return (
                    <button
                        onClick={(e) => { e.stopPropagation(); handleAction(col, row); }}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all active:scale-95 shadow-sm
                        ${value ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                    >
                        {value ? "Active" : "Inactive"}
                    </button>
                );

            // --- ADDED THIS CASE FOR ACTION BUTTONS ---
            case "Actions":
                return (
                    <div className="flex justify-center gap-3">
                        {col.actions?.map((action, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); action.fn(row); }}
                                className={`${action.color} hover:scale-110 transition-transform`}
                                title={action.label}
                            >
                                {action.icon}
                            </button>
                        ))}
                    </div>
                );

            default:
                return value ?? <span className="text-gray-300">N/A</span>;
        }
    };

    return (
        <div className="rounded-xl border-t border-l border-gray-200 shadow-lg overflow-hidden bg-white">
            <div className="overflow-x-auto max-h-[85vh]">
                <table className="min-w-full border-separate border-spacing-0">
                    <thead className="sticky top-0 z-20 bg-[#EDF6F9] text-[#1F1E1E]">
                        <tr>
                            {visibleCols.map((col, i) => (
                                <th key={i} className={`px-6 py-4 text-xs font-bold uppercase tracking-widest border-r border-b border-gray-200  ${i % 2 == 0 ? 'bg-blue-50' : ''}   ${col.className}`}>
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-blue-50/40 transition-colors group ${i % 2 == 0 ? 'bg-blue-50' : ''}">
                                {visibleCols.map((col, ci) => (
                                    <td
                                        key={ci}
                                        className={`px-6 py-4 text-sm text-gray-600 border-r border-b border-gray-100 ${col.className}`}
                                        onClick={() => col.type !== "Button" && col.type !== "Actions" && handleAction(col, row)}
                                    >
                                        {renderCell(row, col, rowIndex)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination UI */}
            <div className="p-4 flex justify-between items-center bg-gray-50 border-r border-b border-l border-gray-200 rounded-b-xl">
                <span className="text-xs text-gray-500 font-medium">Page {page} of {totalPages}</span>
                <div className="flex gap-2">
                    <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="px-3 py-1 border rounded bg-white text-xs disabled:opacity-50 hover:bg-gray-100">Prev</button>
                    <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className="px-3 py-1 border rounded bg-white text-xs disabled:opacity-50 hover:bg-gray-100">Next</button>
                </div>
            </div>
        </div>
    );
}

export default TableDisplay;