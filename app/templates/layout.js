'use client'
import { FiArrowUp, FiMenu, FiUser } from "react-icons/fi"
import Sidebar from "../components/Sidebar"
import { useState } from "react";
import AiChatSuggestion from "../components/AiChatSuggestion";

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-50">
            <Sidebar activeItem="Templates" isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            <AiChatSuggestion />
            <div className="flex-1 lg:ml-64">
                {/* Mobile Header */}
                <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                    >
                        <FiMenu className="text-2xl" />
                    </button>
                    <div className="flex items-center gap-2">
                        <button className="cursor-pointer flex items-center gap-1 px-3 py-2 bg-green-500 text-white text-xs font-medium rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
                            <FiArrowUp className="text-sm" />
                            <span>Upgrade</span>
                        </button>
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
                            <FiUser className="text-sm text-gray-600" />
                        </div>
                    </div>
                </div>

                {/* Desktop Header */}
                <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-center lg:justify-start">
                            <span className="px-2 sm:px-3 py-1 bg-[#5F9D72] text-white text-xs sm:text-sm font-medium rounded-full">
                                API Status: Pending
                            </span>
                            <span className="px-2 sm:px-3 py-1 bg-[#5F9D72] text-white text-xs sm:text-sm font-medium rounded-full">
                                Current Plan: Free Forever
                            </span>
                        </div>
                        <div className="hidden lg:flex items-center gap-2 sm:gap-4">
                            <button className="cursor-pointer flex items-center gap-1 px-3 sm:px-4 py-2 bg-green-500 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
                                <FiArrowUp className="text-sm" />
                                <span className="hidden sm:inline">Upgrade Plan</span>
                            </button>
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
                                <FiUser className="text-sm text-gray-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row w-full bg-[#1E1E1E]/10 min-h-screen overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
  )
}

export default Layout
