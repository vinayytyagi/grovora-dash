'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  FiPlus,
  FiFilter,
  FiChevronDown,
  FiMenu,
  FiX,
  FiUser,
  FiArrowUp
} from 'react-icons/fi';
import { BiSearchAlt } from 'react-icons/bi';
import { HiOutlineViewList } from "react-icons/hi";
import { LuSparkles } from "react-icons/lu";


import TemplateCard from '../components/TemplateCard';

export default function TemplatesPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('All Template');
  const [searchQuery, setSearchQuery] = useState('');

  const allTemplates = [
    {
      id: 1,
      title: 'Welcome Message',
      type: 'Manual',
      status: 'Approved',
      creator: 'User',
      date: '2025-05-15',
      backgroundType: 'green',
      iconType: 'flame',
      needsReview: false
    },
    {
      id: 2,
      title: 'Flash Sale Offer',
      type: 'AI',
      status: 'Approved',
      creator: 'AI',
      date: '2025-02-15',
      backgroundType: 'blue',
      iconType: 'star',
      needsReview: false
    },
    {
      id: 3,
      title: 'Order Confirmation',
      type: 'Manual',
      status: 'Approved',
      creator: 'User',
      date: '2025-03-20',
      backgroundType: 'green',
      iconType: 'flame',
      needsReview: false
    },
    {
      id: 4,
      title: 'Welcome Message',
      type: 'AI',
      status: 'Pending Review',
      creator: 'AI',
      date: '2025-03-15',
      backgroundType: 'beige',
      iconType: 'flame',
      needsReview: false
    },
    {
      id: 5,
      title: 'Welcome Message',
      type: 'Manual',
      status: 'Approved',
      creator: 'User',
      date: '2025-05-15',
      backgroundType: 'green',
      iconType: 'star',
      needsReview: false
    },
    {
      id: 6,
      title: 'Abandoned Card Reminder',
      type: 'Manual',
      status: 'Draft',
      creator: 'User',
      date: '2025-02-24',
      backgroundType: 'blue',
      iconType: 'flame',
      needsReview: true
    },
    {
      id: 7,
      title: 'Customer Feedback Request',
      type: 'AI',
      status: 'Rejected',
      creator: 'AI',
      date: '2025-07-19',
      backgroundType: 'green',
      iconType: 'star',
      needsReview: false
    },
    {
      id: 8,
      title: 'Shipping Updates',
      type: 'Manual',
      status: 'Approved',
      creator: 'User',
      date: '2025-06-28',
      backgroundType: 'beige',
      iconType: 'flame',
      needsReview: false
    }
  ];

  const aiSuggestions = [
    {
      id: 1,
      title: 'Weekend Flash Sale',
      subtitle: 'Discount',
      content: 'Hey [[name]] This weekend only - Get 40% OFF on all products. Use Code WEEKEND40 at checkout',
      backgroundType: 'green',
      iconType: 'flame',
      topLeftIcon: 'star'
    },
    {
      id: 2,
      title: 'Welcome Message',
      subtitle: 'Welcome',
      content: 'Welcome to Growora, [[name]]. We are excited to have you. Here is 15% of on your first order',
      backgroundType: 'blue',
      iconType: 'star',
      topLeftIcon: 'star'
    },
    {
      id: 3,
      title: 'Cart Follow Up',
      subtitle: 'Reminder',
      content: 'Hi {{name}}, your left something behind complete your order now and get free shipping',
      backgroundType: 'beige',
      iconType: 'droplet',
      topLeftIcon: 'star'
    },
    {
      id: 4,
      title: 'Order Delivery Update',
      subtitle: 'Order Update',
      content: 'Great News, {{name}}! Your order #{{order_id}} is out for delivery and will arrive today',
      backgroundType: 'beige',
      iconType: 'flame',
      topLeftIcon: 'star'
    },
    {
      id: 5,
      title: 'Weekend Flash Sale',
      subtitle: 'Discount',
      content: 'Hey [[name]] This weekend only - Get 40% OFF on all products. Use Code WEEKEND40 at checkout',
      backgroundType: 'green',
      iconType: 'flame',
      topLeftIcon: 'star'
    },
    {
      id: 6,
      title: 'Welcome Message',
      subtitle: 'Welcome',
      content: 'Welcome to Growora, [[name]]. We are excited to have you. Here is 15% of on your first order',
      backgroundType: 'blue',
      iconType: 'star',
      topLeftIcon: 'star'
    },
    {
      id: 7,
      title: 'Cart Follow Up',
      subtitle: 'Reminder',
      content: 'Hi {{name}}, your left something behind complete your order now and get free shipping',
      backgroundType: 'beige',
      iconType: 'droplet',
      topLeftIcon: 'star'
    },
    {
      id: 8,
      title: 'Order Delivery Update',
      subtitle: 'Order Update',
      content: 'Great News, {{name}}! Your order #{{order_id}} is out for delivery and will arrive today',
      backgroundType: 'beige',
      iconType: 'flame',
      topLeftIcon: 'star'
    }
  ];

  const currentTemplates = activeTab === 'AI Suggestions' ? aiSuggestions : allTemplates;

  const filteredTemplates = currentTemplates.filter(template =>
    template.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      
        <div className="p-4 sm:p-6">
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
              <div className="relative flex-1 w-full sm:max-w-md">
                <input
                  type="text"
                  placeholder="Search Template"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 text-black py-3 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-[#E7F3EF]"
                />
                <BiSearchAlt className="text-xl absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              </div>

              <button
                onClick={() => router.push('/templates/create')}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-[#5F9D72] text-white text-sm font-medium rounded-full hover:bg-green-600 transition-colors cursor-pointer w-full sm:w-auto"
              >
                <FiPlus className="text-lg" />
                <span className="hidden sm:inline">Create Template</span>
                <span className="sm:hidden">Create</span>
              </button>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('All Template')}
                  className={`pb-2 border-b-2 font-medium whitespace-nowrap cursor-pointer transition-colors 
                    flex items-center gap-2 ${activeTab === 'All Template'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                >
                  <HiOutlineViewList className="text-sm" />
                  All Template
                </button>
                <button
                  onClick={() => setActiveTab('AI Suggestions')}
                  className={`pb-2 border-b-2 font-medium whitespace-nowrap cursor-pointer transition-colors 
                    flex items-center gap-2
                    ${activeTab === 'AI Suggestions'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                >
                  <LuSparkles className="text-sm" />
                  AI Suggestions
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <FiFilter className="text-sm" />
                  <span className="text-sm font-medium hidden sm:inline">Filters</span>
                </div>
                <select className="px-3 py-1 border border-gray-300 text-black rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                  <option>All templates</option>
                  <option>Approved</option>
                  <option>Draft</option>
                  <option>Pending Review</option>
                  <option>Rejected</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                isAISuggestion={activeTab === 'AI Suggestions'}
              />
            ))}
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            <span>Scroll for more templates</span>
          </div>
        </div>
    </div>
  );
}
