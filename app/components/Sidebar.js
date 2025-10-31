import {
  FiPieChart,
  FiBarChart,
  FiFileText,
  FiBriefcase,
  FiTrendingUp,
  FiMessageCircle,
  FiSettings,
  FiCreditCard,
  FiZap,
  FiX
} from 'react-icons/fi';
import { IoCalendarOutline } from "react-icons/io5";

export default function Sidebar({ activeItem = 'Templates', isOpen, setIsOpen }) {
  const navigationItems = [
    { name: 'Dashboard', icon: FiPieChart, id: 'dashboard' },
    { name: 'Live Chat', icon: FiBarChart, id: 'live-chat' },
    { name: 'Templates', icon: FiFileText, id: 'templates' },
    { name: 'Scheduler', icon: IoCalendarOutline, id: 'scheduler' },
    { name: 'Contact Us', icon: FiBriefcase, id: 'contact' },
    { name: 'Campaigns', icon: FiTrendingUp, id: 'campaigns' },
    { name: 'Ads Manager', icon: FiMessageCircle, id: 'ads-manager' },
    { name: 'Flows', icon: FiSettings, id: 'flows' },
    { name: 'Payments', icon: FiCreditCard, id: 'payments' },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiZap className="text-2xl text-green-600" />
              <span className="text-xl font-bold text-green-600">Growora</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              <FiX className="text-2xl" />
            </button>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id}>
                  <a
                    href={`/${item.id === 'templates' ? 'templates' : item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${activeItem === item.name
                        ? 'bg-green-500 text-white shadow-sm'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                  >
                    <IconComponent className="text-lg" />
                    <span className="font-medium">{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}