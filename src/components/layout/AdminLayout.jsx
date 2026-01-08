import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-200 flex">

            {/* Sidebar */}
            <aside className={`fixed md:static z-40 w-64 md:w-60 bg-orange-200 min-h-screen transform transition-transform duration-300
                   ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 `} >
                <div className="p-4 font-bold">Sidebar</div>
                <Sidebar />


            </aside>

            {/* Overlay for mobile */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 z-30 md:hidden"
                />
            )}


            {/* Main Content */}
            <main className="flex-1 bg-blue-200 min-h-screen">

                <div className="md:hidden p-3 bg-white shadow flex items-center gap-3">
                    <button onClick={() => setOpen(true)} className="px-3 py-1 bg-gray-800 text-white rounded" >  ☰
                    </button>
                    <span className="font-semibold">Admin Panel</span>
                </div>
                <div className="p-6">
                    {/* Main Content Area */}
                    {children}
                </div>
            </main>
        </div>
    );
}
