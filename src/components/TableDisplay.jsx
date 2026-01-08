import React, { useState, useMemo } from "react";

function TableDisplay({ columns = [], data = [], pageSize = 5 }) {
    const [currentPage, setCurrentPage] = useState(1);

    // 1. Column visibility control
    const visibleColumns = useMemo(
        () => columns.filter(col => col.isdisplay !== false),
        [columns]
    );

    const totalPages = Math.ceil(data.length / pageSize);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        return data.slice(start, start + pageSize);
    }, [data, currentPage, pageSize]);

    // 2. Cell Renderer (Brain of the table)
    const renderCell = (row, col, rowIndex) => {
        const value = row?.[col.accessor];

        // S No.
        if (col.header === "S No.") {
            return (currentPage - 1) * pageSize + rowIndex + 1;
        }

        switch (col.type) {
            case "Date":
                if (!value) return <span className="text-gray-300">N/A</span>;
                return new Date(value).toLocaleDateString(col.format || "en-IN");

            case "Button":
                const isActive = Boolean(value);
                return (
                    <span
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase
              ${isActive
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                    >
                        {isActive ? "Active" : "Inactive"}
                    </span>
                );

            case "normal":
            default:
                return value ?? <span className="text-gray-300">N/A</span>;
        }
    };

    return (
        <div className="w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
            <div className="">
                <table className="display-table  min-w-full border-separate border-spacing-0">
                    <thead className="bg-gray-50">
                        <tr>
                            {visibleColumns.map((col, i) => (
                                <th
                                    key={i}
                                    className={`px-6 py-4 text-xs font-bold uppercase tracking-wider
                    text-gray-500 border-b ${col.className || ""}`}
                                >
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {paginatedData.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-50 transition">
                                {visibleColumns.map((col, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={`px-6 py-4 text-sm ${col.className || ""}`}
                                    >
                                        {renderCell(row, col, rowIndex)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="p-4 flex justify-between items-center border-t bg-gray-50">
                <span className="text-xs text-gray-500">
                    Page {currentPage} of {totalPages}
                </span>

                <div className="flex gap-2">
                    <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-1 text-xs border rounded hover:bg-white disabled:opacity-50"
                    >
                        Prev
                    </button>

                    <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-1 text-xs border rounded hover:bg-white disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TableDisplay;
