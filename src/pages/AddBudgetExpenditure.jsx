import React from "react";
import { Link } from "react-router-dom";

function AddBudgetExpenditure() {
    // TRICK: Only allow numeric keys (0-9)
    const handleKeyPress = (e) => {
        const pattern = /[0-9]/;
        if (!pattern.test(e.key)) {
            e.preventDefault(); // Blocks the character if it's not a number
        }
    };

    const fields = [
        { label: "Office Name", placeholder: "Office Name", span: "md:col-span-1" },
        { label: "Head ID", placeholder: "Head ID" },
        { label: "Allotment Sub-Head", placeholder: "Sub Head" },
        // Changed type to text, added isNumeric flag
        { label: "Available Amount", placeholder: "0.00", isNumeric: true, readOnly: true },
        { label: "Expenditure Booked", placeholder: "Enter Amount", isNumeric: true },
        { label: "Remaining Amount", placeholder: "0.00", isNumeric: true },
        { label: "Bill No.", placeholder: "Bill Number" },
        { label: "GST No.", placeholder: "GST Number" },
        { label: "PAN No.", placeholder: "PAN Number" },
        { label: "Bank Name", placeholder: "Bank Name", span: "md:col-span-2" },
        { label: "IFSC Code", placeholder: "IFSC Code" },
        { label: "Pay To Account No.", placeholder: "Account Number", span: "md:col-span-3", isNumeric: true },
    ];

    return (
        <div className="p-6 bg-white rounded-xl shadow">

            <div className="p-6 md:p-10 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Add Budget Expenditure
                </h3>

                <Link to="/expenditure">
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl
                           bg-gray-100 text-gray-700 font-semibold
                           hover:bg-gray-200 transition-all active:scale-95">
                        ← Back
                    </button>
                </Link>
            </div>


            <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-5">
                    {fields.map((field, i) => (
                        <div key={i} className={`${field.span || "col-span-1"}`}>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
                                {field.label}
                            </label>
                            <input
                                type="text" // Always text to avoid browser arrows
                                placeholder={field.placeholder}
                                readOnly={field.readOnly}
                                // 🧠 If isNumeric is true, apply the numeric guard
                                onKeyPress={field.isNumeric ? handleKeyPress : null}
                                // Visual styling for read-only fields
                                className={`w-full border rounded-xl p-3 outline-none transition-all duration-200 
                                        ${field.readOnly ? 'bg-gray-100 cursor-not-allowed border-gray-200' : 'bg-gray-50 border-gray-200 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500'}`}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 pt-6 border-t border-gray-100">
                    <button className="w-full sm:w-auto px-10 py-3.5 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
                        Save Expenditure
                    </button>


                    <button className="w-full sm:w-auto px-10 py-3.5 rounded-xl bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-all active:scale-95">
                        Cancel
                    </button>

                </div>
            </div>
        </div>
    );
}

export default AddBudgetExpenditure;