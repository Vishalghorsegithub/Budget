import { useState } from "react";
import Sidebar from "./Sidebar";
import { RiMenuFold4Fill } from "react-icons/ri";
import { RiMenuFold3Fill } from "react-icons/ri";


export default function Layout({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="h-screen bg-gray-200 flex overflow-hidden">

            {/* Sidebar */}
            <aside
                className={`fixed md:static z-40 w-64 md:w-60 bg-[#eef9ff] h-full
                transform transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                <div className="h-full flex flex-col">
                    <div className="p-4 font-bold shrink-0">Sidebar</div>

                    {/* Sidebar scroll area */}
                    <div className="flex-1 overflow-y-auto">
                        <Sidebar />
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 z-30 md:hidden"
                />
            )}

            {/* Main Content */}
            <main className="flex-1 h-full flex flex-col bg-[#eaf4f4] overflow-hidden">

                {/* Mobile Header */}
                <div className="md:hidden p-3 bg-white shadow flex items-center gap-3 shrink-0">
                    <button onClick={() => setOpen(true)}
                        className="px-3 py-1 bg-gray-800 text-white rounded"> ☰
                    </button>
                    <span className="font-semibold">Admin Panel</span>
                </div>


                {/* Desktop Header */}
                <div className="hidden md:flex items-center justify-evenly px-6 py-3 bg-white shadow-sm border-b">
                    <div className="flex items-center gap-3">
                        <h2> Fouad Management System</h2>
                    </div>

                    <div className="">  Login As Vishal </div>
                </div>

                {/* Main scroll area */}
                <div className="flex-1 overflow-y-auto p-6">
                    {children}
                </div>

                <footer className="shrink-0 text-center text-sm py-2 bg-white border-t">
                    © {new Date().getFullYear()} All rights reserved by Vishal
                </footer>
            </main>
        </div>
    );
}
