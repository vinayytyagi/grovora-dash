'use client'
export const dynamic = 'force-dynamic'
import { useEffect, useState } from "react";
import ChatIdCard from "../components/ChatIdCard"
import Sidebar from "../components/Sidebar"
import { BiSearchAlt } from "react-icons/bi";
import { FiArrowUp, FiUser, FiMenu, FiPieChart, FiBarChart, FiFileText, FiBriefcase, FiTrendingUp, FiMessageCircle, FiSettings, FiCreditCard, FiCalendar } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { BsCalendarMonth } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import EmojiPicker from "./components/EmojiPicker";
import { PiImageLight } from "react-icons/pi";
import Image from "next/image";
import AiChatSuggestion from "../components/AiChatSuggestion";


//   Data
const messagesData = [{
    id: 1,
    user: {
      id: 1,
      sendTo:2,
      message: "Hello, Who are you?",
    }
  },
    {
    id: 2,
    user: {
      id: 2,
      sendTo:1,
      message: "I am John.",
    }
  }]


const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChat, setSelectedChat] = useState(1);
  const [text, setText] = useState('');
  const [showChatList, setShowChatList] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState(messagesData);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // Dummy User Account
  const agent = {
    id: 3,
    name: 'binod',
  }


  useEffect(() => {
    setMessages(messagesData);
  },[selectedChat])

  const getMonthsSince = (dateStr) => {
    if (!dateStr || typeof dateStr !== 'string') return null;
    const parts = dateStr.split('/');
    if (parts.length !== 3) return null;
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);

    const joined = new Date(year, month, day);
    const now = new Date();

    let months = (now.getFullYear() - joined.getFullYear()) * 12 + (now.getMonth() - joined.getMonth());
    if (now.getDate() < joined.getDate()) months -= 1;
    return months >= 0 ? months : 0;
  };

  const userData = [{
    image: '/user.svg',
    name: 'Karan',
    quate: "I am a developer",
    userId: 1,
    special: "loved",
    messagesIds: [1],
    contactDetails: {
      email: 'karan@gmail.com',
      phone: '+91 1234567890',
      adress: "Maratha collage Madhya pradesh, India",
      joinDate: "12/12/2022"
    }
  }, {
    image: '/user.svg',
    name: 'Jone doe',
    quate: "I am a Graphic designer",
    userId: 2,
    special: "favroite",
    messagesIds: [1],
    contactDetails: {
      email: 'john@gmail.com',
      phone: '+91 0987654321',
      adress: "Borivali Mumbai, India",
      joinDate: "12/12/2024"
    }
  }, {
    image: '/user.svg',
    name: "binod",
    quate: "I am a developer",
    userId: 3,
    special: "cool",
    messagesIds: [1],
    contactDetails: {
      email: 'binod@gmail.com',
      phone: '+91 1234567890',
      adress: "Maratha collage Madhya pradesh, India",
      joinDate: "12/12/2022"
    }
  }, {
    image: '/user.svg',
    name: "Ram krishna",
    quate: "I am a Editor",
    userId: 4,
    messagesIds: [1],
    contactDetails: {
      email: 'binod@gmail.com',
      phone: '+91 1234567890',
      adress: "Maratha collage Madhya pradesh, India",
      joinDate: "12/12/2022"
    }
  }]



  const getUserWithId = (id) => {
    return userData.find((user) => user.userId === id);
  };

  const searchedUsers = (name)=>{
    return userData.filter((user) => user.name.toLowerCase().includes(name.toLowerCase())) || []
  }

  const handleSendMessage = (msg, senderId,userId) => {

    const newMessage = {
      id: messagesData.length + 1,
      user: {
        id: senderId,
        sendTo:userId,
        message: msg,
      }
    }
    console.log(newMessage)
    setMessages([...messages, newMessage])
    setText('')
  }

  const handleEmojiSelect = (emoji) => {
    setText((prev) => (prev || '') + emoji)
    setShowEmojiPicker(false)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeItem="Live Chat" isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <AiChatSuggestion />
      <div className="flex-1 lg:ml-64">
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <FiMenu className="text-2xl" />
          </button>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-3 py-2 bg-green-500 text-white text-xs font-medium rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
              <FiArrowUp className="text-sm" />
              <span>Upgrade</span>
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
              <FiUser className="text-sm text-gray-600" />
            </div>
          </div>
        </div>

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
              <button className="flex items-center gap-1 px-3 sm:px-4 py-2 bg-green-500 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
                <FiArrowUp className="text-sm" />
                <span className="hidden sm:inline">Upgrade Plan</span>
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
                <FiUser className="text-sm text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full h-[91vh] overflow-hidden">
          <div className="hidden lg:block w-full lg:w-1/4 bg-white h-[92vh]">
            <div className="relative flex-1 max-w-md w-5/6 mx-auto my-2 ">
              <input
                type="text"
                placeholder="Search Template"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className=" pl-10 pr-4 w-full text-black py-3 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-[#E7F3EF]"
              />
              <BiSearchAlt className="text-xl absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
            </div>
            <div className="flex flex-col overflow-y-auto scrollbar-hide">
              {searchQuery === '' ? userData.map((user) => (
                <ChatIdCard key={user.userId} selectedChat={selectedChat} setChat={setSelectedChat} data={user} />
              )) :
              searchedUsers(searchQuery).length > 0 ? searchedUsers(searchQuery).map((user) => (
                <ChatIdCard key={user.userId} selectedChat={selectedChat} setChat={setSelectedChat} data={user} />
              )) :
              <div className="flex justify-center items-center h-full">
                <p className="text-gray-500">No user found</p>
                </div>
              }
            </div>
          </div>
          <div className="w-full lg:w-2/4 bg-gray-100 h-[92vh] flex flex-col relative pb-[5%]">
            <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
              <button
                onClick={() => setShowChatList(true)}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                <BiSearchAlt className="text-xl" />
              </button>
              <div className="flex items-center gap-3">
                <Image
                  src={userData.find(u => u.userId === selectedChat)?.image}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover"
                  alt={userData.find(u => u.userId === selectedChat)?.name || "Current chat"}
                />
                <span className="font-medium">{userData.find(u => u.userId === selectedChat)?.name}</span>
              </div>
              <button
                onClick={() => setShowUserDetails(true)}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                <FiUser className="text-xl" />
              </button>
            </div>
            <div style={{ backgroundImage: "url('/assets/ChatBackground.svg')" }} className="messages flex flex-col gap-4 px-4 pt-8 scrollbar-hide pb-24 flex-1 overflow-y-auto">
              {
                messages.map((message) => {
                  const user = userData.find((user) => user.userId === message.user.id);
                  const isSender = agent.id === user.userId;

                  return (
                    <div key={message.id}>
                      {isSender ?
                        <div className="flex justify-end gap-2 relative mt-2">
                          <p className="bg-green-500 text-white rounded-lg rounded-tr-none px-4 py-2 max-w-[70%] break-words shadow-sm">
                            {message.user.message}
                          </p>
                          <p className="absolute z-9 -top-6 text-xs text-[#618A7D] right-16">{user.name}</p>
                          <Image width={48} height={48} className="w-12 h-12 rounded-full object-cover relative right-0 top-5" src={user.image} alt={user.name} />
                        </div> :
                        <div className="flex justify-start relative gap-2 mt-2">
                          <p className="absolute z-9 -top-6 text-xs text-[#618A7D]  left-16">{user.name}</p>
                          <Image width={48} height={48} className="w-12 h-12 rounded-full object-cover relative right-left top-5" src={user.image} alt={user.name} />
                          <p className="bg-white text-black rounded-lg rounded-tl-none px-4 py-2 max-w-[70%] break-words shadow-sm">
                            {message.user.message}
                          </p>
                        </div>
                      }

                    </div>
                  )
                })
              }
              <form onSubmit={(e)=>{
                  e.preventDefault();
                  handleSendMessage(text,agent.id,selectedChat)
                }} className="input-field absolute gap-2 bottom-[8%] w-[90%] flex  items-center ">
                <Image width={40} height={40} className="w-10 h-10 rounded-full object-cover relative" src={getUserWithId(selectedChat).image} alt="User avatar" />
                <input
                  type="text"
                  placeholder="Enter message here..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className=" pl-6 pr-4 w-full text-black py-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                />
                <div
                  className="pl-2 lg:pr-4 py-3 flex items-center-justify-between gap-2 h-full w-30 md:w-1/8 absolute right-0 top-1 "
                >
                  <label for='file'>
                    <input type="file" id="file" className="hidden"/>
                    <PiImageLight className="cursor-pointer text-2xl" />
                  </label>
                  <div className="relative">
                      <MdOutlineEmojiEmotions
                      onClick={() => setShowEmojiPicker((s) => !s)}
                      aria-label="Open emoji picker" className="cursor-pointer text-2xl" />
                    {showEmojiPicker && (
                      <div className="absolute bottom-12 right-0 z-50">
                        <EmojiPicker onSelect={handleEmojiSelect} onClose={() => setShowEmojiPicker(false)} />
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>

          </div>
          {
            selectedChat && (
              <div className="hidden lg:flex lg:w-1/4 flex-col gap-3 h-[92vh]">
                <h2 className="text-xl font-bold ml-4 mt-2">Customer Details</h2>

                <div className="flex flex-col bg-white w-[80%] mx-auto p-4 rounded-lg gap-3">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-[#E8F2F0] flex items-center justify-center rounded-lg ">
                      <TfiEmail className="text-2xl" />
                    </div>
                    <div>
                      <h3>{getUserWithId(selectedChat).name}</h3>
                      <p className="text-sm text-[#618A7D]">{getUserWithId(selectedChat).contactDetails.email}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col bg-white w-[80%] mx-auto p-4 rounded-lg gap-3">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-[#E8F2F0] flex items-center justify-center rounded-lg ">
                      <FaPhoneAlt className="text-2xl" />
                    </div>
                    <div>
                      <h3>Phone</h3>
                      <p className="text-sm text-[#618A7D]">{getUserWithId(selectedChat).contactDetails.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col bg-white w-[80%] mx-auto p-4 rounded-lg gap-3">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-[#E8F2F0] flex items-center justify-center rounded-lg ">
                      <CiLocationOn className="text-2xl" />
                    </div>
                    <div>
                      <h3>Adress</h3>
                      <p className="text-xs text-[#618A7D]">{getUserWithId(selectedChat).contactDetails.adress}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col bg-white w-[80%] mx-auto p-4 rounded-lg gap-3">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-[#E8F2F0] flex items-center justify-center rounded-lg ">
                      <BsCalendarMonth className="text-2xl" />
                    </div>
                    <div>
                      <h3>Member Since</h3>
                      <p className="text-sm text-[#618A7D]">
                        {(() => {
                          const months = getMonthsSince(getUserWithId(selectedChat).contactDetails.joinDate);
                          if (months === null) return getUserWithId(selectedChat).contactDetails.joinDate;
                          if (months === 0) return 'Less than a month ago';
                          return `Joined ${months} month${months > 1 ? 's' : ''} ago`;
                        })()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>

        {showChatList && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setShowChatList(false)}
            />
            <div className="lg:hidden fixed inset-y-0 left-0 w-64 bg-white z-50 overflow-y-auto">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-bold">Chats</h2>
                <button
                  onClick={() => setShowChatList(false)}
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                >
                  <span className="text-xl">×</span>
                </button>
              </div>
              <div className="px-2 py-2">
                {userData.map((user) => (
                  <ChatIdCard
                    key={user.userId}
                    selectedChat={selectedChat}
                    setChat={(id) => {
                      setSelectedChat(id);
                      setShowChatList(false);
                    }}
                    data={user}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {showUserDetails && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setShowUserDetails(false)}
            />
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-xl overflow-y-auto max-h-[70vh]">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-bold">Customer Details</h2>
                <button
                  onClick={() => setShowUserDetails(false)}
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                >
                  <span className="text-xl">×</span>
                </button>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex flex-col bg-[#E7F3EF] w-full p-4 rounded-lg gap-3">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-[#E8F2F0] flex items-center justify-center rounded-lg ">
                      <TfiEmail className="text-2xl" />
                    </div>
                    <div>
                      <h3>{getUserWithId(selectedChat).name}</h3>
                      <p className="text-sm text-[#618A7D]">{getUserWithId(selectedChat).contactDetails.email}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col bg-[#E7F3EF] w-full p-4 rounded-lg gap-3">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-[#E8F2F0] flex items-center justify-center rounded-lg ">
                      <FaPhoneAlt className="text-2xl" />
                    </div>
                    <div>
                      <h3>Phone</h3>
                      <p className="text-sm text-[#618A7D]">{getUserWithId(selectedChat).contactDetails.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col bg-[#E7F3EF] w-full p-4 rounded-lg gap-3">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-[#E8F2F0] flex items-center justify-center rounded-lg ">
                      <CiLocationOn className="text-2xl" />
                    </div>
                    <div>
                      <h3>Address</h3>
                      <p className="text-xs text-[#618A7D]">{getUserWithId(selectedChat).contactDetails.adress}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col bg-[#E7F3EF] w-full p-4 rounded-lg gap-3">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-[#E8F2F0] flex items-center justify-center rounded-lg ">
                      <BsCalendarMonth className="text-2xl" />
                    </div>
                    <div>
                      <h3>Member Since</h3>
                      <p className="text-sm text-[#618A7D]">
                        {(() => {
                          const months = getMonthsSince(getUserWithId(selectedChat).contactDetails.joinDate);
                          if (months === null) return getUserWithId(selectedChat).contactDetails.joinDate;
                          if (months === 0) return 'Less than a month ago';
                          return `Joined ${months} month${months > 1 ? 's' : ''} ago`;
                        })()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Page;