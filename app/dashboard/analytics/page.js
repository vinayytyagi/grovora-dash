"use client"
import { BiExport } from 'react-icons/bi';
import { MdInsertChart } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdOutlineDiscount } from 'react-icons/md';
import { FaFileAlt } from 'react-icons/fa';
import {
  VisitorLine,
  RevenueBar,
  CustomerSatisfaction,
  TargetVsReality,
  VolumeServices,
} from './Charts'
import Image from 'next/image';

// Data ko component ke bahar rakha gaya hai taaki code saaf rahe
const products = [
    { name: "Home Decor Range", percentage: 45, color: "blue-500", lightBg: "blue-100" },
    { name: "Disney Princess Pink Bag 18'", percentage: 29, color: "green-500", lightBg: "green-100" },
    { name: "Bathroom Essentials", percentage: 18, color: "purple-500", lightBg: "purple-100" },
    { name: "Apple Smartwatches", percentage: 25, color: "orange-500", lightBg: "orange-100" }
];

// Yeh component ab responsive hai.
// Mobile par alag layout dikhega aur desktop par alag.
const TopProductRow = ({ index, name, percentage, color, lightBg }) => (
    <>
        {/* Mobile View: lg:hidden class isse bade screens par hide kar deti hai */}
        <div className="lg:hidden flex flex-col gap-1 py-3 border-b border-gray-100">
            <div className="flex justify-between items-center">
                <div className="flex items-baseline gap-1">
                    <span className="text-gray-400 font-medium text-xs">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-gray-800 font-medium text-xs">{name}</span>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold  border rounded-md text-${color} border-${color}`}>
                    {percentage}%
                </span>
            </div>
            <div className={`w-full bg-${lightBg} rounded-full h-2`}>
                <div className={`bg-${color} h-2  rounded-full text-xs`} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>

        {/* Desktop View: Mobile par hidden rehta hai aur lg (large) screen se dikhna shuru hota hai */}
        <div className="hidden lg:grid grid-cols-12 items-center gap-4 py-3 border-b border-gray-100">
            <div className="col-span-1 text-gray-400 font-medium text-xs">
                {String(index + 1).padStart(2, '0')}
            </div>
            <div className="col-span-5 text-gray-800 text-xs font-medium">
                {name}
            </div>
            <div className="col-span-4">
                <div className={`w-full bg-${lightBg} rounded-full h-2`}>
                    <div className={`bg-${color} h-2 rounded-full text-xs`} style={{ width: `${percentage}%` }}></div>
                </div>
            </div>
            <div className="col-span-2  text-center">
                <span className={`px-3 py-1 text-xs font-semibold border rounded-md text-${color} border-${color}`}>
                    {percentage}%
                </span>
            </div>
        </div>
    </>
);


const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-6 py-6 bg-gray-100 px-4 sm:px-6">

      <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-xl p-4 shadow-sm">
          <div className="w-full flex justify-between items-start">
            <div>
              <h2 className="font-bold text-lg">Today's Sales</h2>
              <span className="text-gray-500 text-sm">Sales Summary</span>
            </div>
            <button className='w-auto flex gap-2 items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700 font-medium'>
              <BiExport size={20} />
              Export
            </button>
          </div>

          <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
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
              <div className='text-red-600 text-xs font-semibold mt-1'>0.5% from yesterday</div>
            </div>
          </div>
        </div>

        <div className="w-full min-w-[300px]">
          <VisitorLine />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <RevenueBar />
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomerSatisfaction />
          <TargetVsReality />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white rounded-xl p-4 sm:p-6 shadow-sm">
            <h3 className='text-xl font-bold mb-4'>Top Products</h3>
            
            {/* Desktop Headers: Mobile par hide ho jayenge */}
            <div className="hidden lg:grid grid-cols-12 items-center gap-4 pb-2 border-b border-gray-200 text-sm text-gray-500 font-semibold">
                <div className="col-span-1 text-xs">#</div>
                <div className="col-span-5 text-xs">Name</div>
                <div className="col-span-4 text-xs">Popularity</div>
                <div className="col-span-2 text-xs text-center">Sales</div>
            </div>

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

        <div className="lg:col-span-1 bg-white rounded-xl p-4 shadow-sm">
          <h3 className='text-lg font-semibold mb-4'>Sales Mapping by Country</h3>
          <div className='w-full h-52 flex items-center justify-center'>
            {/* Maine yahan Next.js Image component ko aache se use kiya hai */}
            <Image src="/world.svg" width={300} height={300} alt="World Map" className='max-h-full h-auto w-auto object-contain' />
          </div>
        </div>

        <div className="lg:col-span-1">
          <VolumeServices />
        </div>
      </div>

    </div>
  )
}

export default page;