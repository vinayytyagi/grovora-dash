'use client'
import Image from "next/image";
import { redirect } from "next/navigation";
import { CustomerSatisfaction } from "./analytics/Charts"; // Maan kar chal rahe hain ki yeh component maujood hai
import { BiExport } from "react-icons/bi";
import { MdInsertChart, MdOutlineDiscount } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";

// Data ko component ke bahar rakha gaya hai taaki code saaf rahe
const products = [
    { name: "Home Decor Range", percentage: 45, color: "blue-500", lightBg: "blue-100" },
    { name: "Disney Princess Pink Bag 18'", percentage: 29, color: "green-500", lightBg: "green-100" },
    { name: "Bathroom Essentials", percentage: 18, color: "purple-500", lightBg: "purple-100" },
    { name: "Apple Smartwatches", percentage: 25, color: "orange-500", lightBg: "orange-100" }
];

// Yeh component ab mobile aur desktop ke liye poori tarah responsive hai.
const TopProductRow = ({ index, name, percentage, color, lightBg }) => (
    <>
        {/* Mobile View: Badi screens par chhipa rehta hai */}
        <div className="lg:hidden flex flex-col gap-2 py-3 border-b border-gray-100">
            <div className="flex justify-between items-center">
                <div className="flex items-baseline gap-2">
                    <span className="text-gray-400 font-medium text-sm">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-gray-800 font-medium text-sm">{name}</span>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold border rounded-md text-${color} border-${color}`}>
                    {percentage}%
                </span>
            </div>
            <div className={`w-full bg-${lightBg} rounded-full h-2.5`}>
                <div className={`bg-${color} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>

        {/* Desktop View: Choti screens par chhipa rehta hai */}
        <div className="hidden lg:grid grid-cols-12 items-center gap-4 py-3 border-b border-gray-100">
            <div className="col-span-1 text-gray-400 font-medium text-sm">
                {String(index + 1).padStart(2, '0')}
            </div>
            <div className="col-span-5 text-gray-800 text-sm font-medium">
                {name}
            </div>
            <div className="col-span-4">
                <div className={`w-full bg-${lightBg} rounded-full h-2.5`}>
                    <div className={`bg-${color} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
                </div>
            </div>
            <div className="col-span-2 text-center">
                <span className={`px-3 py-1 text-xs font-semibold border rounded-md text-${color} border-${color}`}>
                    {percentage}%
                </span>
            </div>
        </div>
    </>
);

const Page = () => {
    const quickLinks = [
        { name: "Send Messages", logo: 'dashboardmsg.svg', url: '/dashboard/messages' },
        { name: "Create Contact", logo: 'dashboardcontact.svg', url: '/dashboard/contact' },
        { name: "Start Campaign", logo: 'dashboardcampain.svg', url: '/dashboard/campaign' },
        { name: "View Analytics", logo: 'dashboardanlatys.svg', url: '/dashboard/analytics' },
        { name: "Manage Templates", logo: 'dashboardtemplate.svg', url: '/dashboard/templates' },
        { name: "Integration", logo: 'dashboardintegration.svg', url: '/dashboard/integration' }
    ];

    return (
        // Mukhya container ab ek flexbox hai jo choti screens par wrap hota hai
        <main className="w-full min-h-screen bg-gray-50 flex flex-col lg:flex-row p-4 sm:p-6 gap-6">
            
            {/* Left Column */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
                
                {/* Welcome Banner */}
                <div className="w-full h-80 rounded-xl overflow-hidden relative shadow-lg">
                    <Image alt="Welcome Banner" src='/dashboardImage1.svg' layout="fill" className="w-full h-full object-cover" />
                    <div className="w-full h-full text-white flex flex-col justify-center bg-black/20 absolute z-10 p-4 sm:p-8">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Welcome, Alex</h2>
                        <p className="text-base sm:text-lg mt-3">Get started with our platform and connect with your <br className="hidden sm:block"/>customers on WhatsApp.</p>
                        <button className="cursor-pointer bg-[#3FB863] hover:bg-[#35a458] transition-colors mt-4 text-white font-semibold rounded-full px-5 py-2.5 w-fit h-auto">
                            Start Free Trial
                        </button>
                    </div>
                </div>

                {/* Today's Sales */}
                <div className="w-full bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                    <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h2 className="font-bold text-xl">Today's Sales</h2>
                            <span className="text-gray-500 text-sm">Sales Summary</span>
                        </div>
                        <button className='w-full sm:w-auto flex gap-2 items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700 font-medium'>
                            <BiExport size={20} />
                            Export
                        </button>
                    </div>
                
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-4'>
                        {/* Sales Cards */}
                        <div className="p-4 rounded-lg bg-[#FFE2E5]">
                            <div className='w-10 h-10 bg-[#FA5A7D] rounded-full flex items-center justify-center'><MdInsertChart className='text-white' size={22} /></div>
                            <h3 className='text-2xl font-bold mt-4'>$1k</h3>
                            <span className='text-gray-600 text-sm'>Total Sales</span>
                            <div className='text-green-600 text-xs font-semibold mt-1'>+8% from yesterday</div>
                        </div>
                        <div className="p-4 rounded-lg bg-[#FFF4DE]">
                            <div className='w-10 h-10 bg-[#FF947A] rounded-full flex items-center justify-center'><FaFileAlt className='text-white' size={18} /></div>
                            <h3 className='text-2xl font-bold mt-4'>300</h3>
                            <span className='text-gray-600 text-sm'>Total Order</span>
                            <div className='text-green-600 text-xs font-semibold mt-1'>+5% from yesterday</div>
                        </div>
                        <div className="p-4 rounded-lg bg-[#DCFCE7]">
                            <div className='w-10 h-10 bg-green-500 rounded-full flex items-center justify-center'><MdOutlineDiscount className='text-white' size={22} /></div>
                            <h3 className='text-2xl font-bold mt-4'>5</h3>
                            <span className='text-gray-600 text-sm'>Product Sold</span>
                            <div className='text-green-600 text-xs font-semibold mt-1'>+1.2% from yesterday</div>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F3E8FF]">
                            <div className='w-10 h-10 bg-[#BF83FF] rounded-full flex items-center justify-center'><AiOutlineUserAdd className='text-white' size={22} /></div>
                            <h3 className='text-2xl font-bold mt-4'>8</h3>
                            <span className='text-gray-600 text-sm'>New Customers</span>
                            <div className='text-red-600 text-xs font-semibold mt-1'>-0.5% from yesterday</div>
                        </div>
                    </div>
                </div>

                {/* Setup Checklist */}
                <div className="w-full h-auto p-4 sm:p-6 flex flex-col gap-4 bg-white rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold">Setup Checklist</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Checklist Cards */}
                        <div className="flex-1 min-h-[180px] rounded-lg p-4 flex bg-gray-50 flex-col justify-between">
                            <div>
                                <span className="text-[#3FB863] text-xs font-semibold">Step 1</span>
                                <h2 className="font-bold mt-1">Apply for API</h2>
                                <p className="text-gray-500 text-xs mt-1">Submit your application to get access to the WhatsApp Business API.</p>
                            </div>
                            <button className="cursor-pointer bg-[#3FB863] hover:bg-[#35a458] text-white w-full text-sm font-semibold mt-3 rounded-full py-2.5">Apply Now</button>
                        </div>
                        <div className="flex-1 min-h-[180px] rounded-lg p-4 flex bg-gray-50 flex-col justify-between">
                            <div>
                                <span className="text-[#3FB863] text-xs font-semibold">Step 2</span>
                                <h2 className="font-bold mt-1">Create Template</h2>
                                <p className="text-gray-500 text-xs mt-1">Design and submit your message template for approval.</p>
                            </div>
                            <button className="cursor-pointer bg-[#E7F3EF] hover:bg-[#dbe9e4] text-gray-700 w-full text-sm font-semibold mt-3 rounded-full py-2.5">Create Template</button>
                        </div>
                        <div className="flex-1 min-h-[180px] rounded-lg p-4 flex bg-gray-50 flex-col justify-between">
                            <div>
                                <span className="text-[#3FB863] text-xs font-semibold">Step 3</span>
                                <h2 className="font-bold mt-1">Launch Campaign</h2>
                                <p className="text-gray-500 text-xs mt-1">Start your first campaign and reach your audience on WhatsApp.</p>
                            </div>
                            <button className="cursor-pointer bg-[#E7F3EF] hover:bg-[#dbe9e4] text-gray-700 w-full text-sm font-semibold mt-3 rounded-full py-2.5">Launch Campaign</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3">
                {/* Quick Links */}
                <div className="flex flex-col gap-4 w-full p-4 sm:p-6 rounded-xl ">
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {quickLinks.map((link, idx) => (
                            <div onClick={() => redirect(link.url)} key={idx} className="cursor-pointer flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="h-16 w-full  rounded-lg p-2 relative">
                                    <div className="relative bg-gray-50 w-full h-full">
                                        <Image alt={`${link.name} icon`} src={`/${link.logo}`} layout="fill" className="object-contain" />
                                    </div>
                                </div>
                                <span className="text-gray-600 text-center text-xs sm:text-sm font-medium">{link.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Customer Satisfaction */}
                <div className="flex flex-col gap-2 bg-white w-full p-4 sm:p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                    <CustomerSatisfaction />
                </div>

                {/* Top Products */}
                <div className="flex flex-col gap-2 bg-white w-full p-4 sm:p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold">Top Products</h3>
                    <div className='mt-2'>
                        {products.map((product, index) => (
                            <TopProductRow 
                                key={index}
                                index={index}
                                name={product.name}
                                percentage={product.percentage}
                                color={product.color}
                                lightBg={product.lightBg}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page;