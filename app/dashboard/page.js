'use client'
import Image from "next/image";
import { redirect } from "next/navigation";

const Page = () => {
    

      const quickLinks = [
        {
            name:"Send Messages",
            logo:'dashboardmsg.svg',
            url:'/dashboard/messages'
        },
        {
            name:"Create Contact",
            logo:'dashboardcontact.svg',
            url:'/dashboard/contact'
        },
        {
            name:"Start Campaign",
            logo:'dashboardcampain.svg',
            url:'/dashboard/campaign'
        },
        {
            name:"View Analytics",
            logo:'dashboardanlatys.svg',
            url:'/dashboard/analytics'
        },
        {
            name:"Manage Templates",
            logo:'dashboardtemplate.svg',
            url:'/dashboard/templates'
        },
        {
            name:"Integration",
            logo:'dashboardintegration.svg',
            url:'/dashboard/integration'
        }
      ]

      

  return (
    <>
    <div className="w-full h-full lg:w-2/3 flex flex-col gap-4 py-4 px-6 ">
                    <div className="w-full h-70 rounded-4xl overflow-hidden relative">
                        <Image alt="Image" src='dashboardImage1.svg' width={1200} height={800} className="w-full h-full object-cover object-center absolute" />
                        <div className="w-full h-full text-white flex flex-col bg-[#000000]/20 absolute z-1 pt-14 pl-8">
                            <h2 className=" text-4xl text-left font-bold">Welcome, Alex</h2>
                            <p className="text-lg mt-3 relative linespace-lg">Get started with our platform and connect with your <br />customers on WhatsApp </p>
                            <button className="cursor-pointer  bg-[#3FB863] mt-3 relative rounded-full px-3 py-2 w-32 h-10">Start Free Trial</button>
                        </div>
                    </div>
                    <div className="w-full h-70 p-3 relative  flex flex-col gap-4">
                        <h3 className="text-xl font-semibold">Setup Checklist</h3>
                        <div className="flex gap-4 realtive ">

                            <div className="w-50 h-50 rounded-lg p-2 flex bg-white relative flex-col">
                                <span className="text-[#3FB863] text-xs ">Step 1</span>
                                <h2 className="font-bold">Apply for API</h2>
                                <p className="text-gray-400 text-xs">Submit your applocation to get access to the whatsapp business API</p>
                                <button className="cursor-pointer bg-[#3FB863] w-44 left-3 absolute bottom-3 w-[80%] mx-auto text-sm  text-white mt-3 rounded-full px-3 py-2  h-10">Apply Now</button>
                            </div>
                            <div className="w-50 h-50 rounded-lg p-2 flex bg-white relative flex-col">
                                <span className="text-[#3FB863] text-xs ">Step 2</span>
                                <h2 className="font-bold">Create Template</h2>
                                <p className="text-gray-400 text-xs">Design and submit your message template for approval</p>
                                <button className="cursor-pointer bg-[#E7F3EF] w-44 left-3 absolute bottom-3 w-[80%] mx-auto text-sm  mt-3 rounded-full px-3 py-2  h-10">Create Template</button>
                            </div>
                            <div className="w-50 h-50 rounded-lg p-2 flex bg-white relative flex-col">
                                <span className="text-[#3FB863] text-xs ">Step 3</span>
                                <h2 className="font-bold">Launch Campaign</h2>
                                <p className="text-gray-400 text-xs">Start your first campaign and reach your audience on WhatsApp</p>
                                <button className="cursor-pointer bg-[#E7F3EF] w-44 left-3 absolute bottom-3 w-[80%] mx-auto text-sm  mt-3 rounded-full px-3 py-2  h-10">Launch Campaign</button>
                            </div>

                        </div>
                    </div>
                    <div className="w-full h-44 overflow-hidden relative">
                        <h3 className="text-xl font-semibold">Quick Links </h3>
                        <div className="h-32 flex gap-3 realtive ">
                            {
                                quickLinks.map((link,idx) => (
                                    <div onClick={()=>redirect(link.url)} key={idx} className="cursor-pointer w-24 h-32 rounded-lg p-2 flex justify-between items-center relative overflow-hidden flex-col">
                                        <div className="h-16 w-full bg-white rounded-lg p-2 relative ">
                                            <div className="relative w-full h-full">
                                              <Image alt="Image" src={link.logo} fill className="object-contain" />
                                            </div>
                                        </div>
                                        <span className="text-[#618A7D] relative  text-center ">{link.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                     <div className="w-full h-60 overflow-hidden relative">
                        <h3 className="text-xl font-semibold">Tutorials </h3>
                        <div className="h-46 flex gap-2 realtive ">
                            <div className="w-50 h-full bg-white gap-1 rounded-lg p-2 flex  relative overflow-hidden flex-col">
                                
                                  <div className="w-full h-22 relative">
                                    <Image alt="Image" src='dashboardImage1.svg' fill className="object-contain" />
                                  </div>
                                  <h2 className="font-bold">Getting Started</h2>
                                  <button className="cursor-pointer bg-[#E7F3EF] w-44 left-3 absolute bottom-3 w-5/6 mt-3 rounded-full px-3 py-2 h-10">Watch Videos</button>
                                


                            </div>
                            <div className="w-50 h-full bg-white gap-1 rounded-lg p-2 flex  relative overflow-hidden flex-col">
                                
                                  <div className="w-full h-22 relative">
                                    <Image alt="Image" src='dashboardImage1.svg' fill className="object-contain" />
                                  </div>
                                  <h2 className="font-bold">Effective Campaigns</h2>
                                  <button className="cursor-pointer bg-[#E7F3EF] w-44 left-3 absolute bottom-3 w-5/6 mt-3 rounded-full px-3 py-2 h-10">Watch Videos</button>
                                


                            </div>
                            <div className="w-50 h-full bg-white gap-1 rounded-lg p-2 flex  relative overflow-hidden flex-col">
                                
                                  <div className="w-full h-22 relative">
                                    <Image alt="Image" src='dashboardImage1.svg' fill className="object-contain" />
                                  </div>
                                  <h2 className="font-bold">API Documentation</h2>
                                  <button className="cursor-pointer bg-[#E7F3EF] w-44 left-3 absolute bottom-3 w-5/6 mt-3 rounded-full px-3 py-2 h-10">Watch Videos</button>
                                


                            </div>
                        </div>
                     </div>
                </div>

                    <div className="flex flex-col gap-4 w-full min-h-screen lg:w-1/3 py-4 px-6">
                        <div className="flex flex-col gap-2 bg-white w-full h-40 p-3 rounded-lg">
                            <h2 className="font-bold text-lg">Plan Information</h2>
                            <span className="text-[#3FB863] text-sm ">Free Forever</span>
                            <button className="cursor-pointer bg-[#3FB863] text-white w-full mt-5 rounded-full px-3 py-2 h-10">Upgrade Plan</button>
                        </div>
                        <div className="flex flex-col gap-2 bg-white w-full h-40 p-3 rounded-lg">
                            <h2 className="font-bold text-lg">Credit Balance</h2>
                            <span className="text-[#3FB863] text-sm ">1000</span>
                            <div className="w-full h-2 bg-[#E7F3EF] rounded-full overflow-hidden">
                                <div className="w-3/5 bg-[#3FB863] h-2"></div>
                            </div>
                            <button className="cursor-pointer bg-[#E7F3EF]  w-full mt-5 rounded-full px-3 py-2 h-10">Add Credits</button>
                        </div>
                        <div className="flex flex-col gap-1 bg-white w-full h-70 p-3 rounded-lg">
                            <div className="w-full h-3/4 flex items-center justify-center bg-[#E7F3EF]  rounded-lg overflow-hidden">
                                <img alt="Image" src='https://media.geeksforgeeks.org/wp-content/uploads/20210511160843/gfgQR.png' className="object-contain w-3/4 h-3/4" />
                            </div>
                            <h2 className="font-bold ">Download Mobile App</h2>
                            <span className="text-[#618A7D] text-sm ">Manage your account on the go</span>
                            
                        </div>
                        <div className="flex flex-col gap-1 bg-white w-full p-3 rounded-lg">
                            <h2 className="font-bold text-lg ">Key Features</h2>
                            <span className="text-[#618A7D] text-sm ">Manage your account on the go</span>
                            <div className="flex flex-col gap-2 mt-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#3FB863]"></div>
                                    <span className="text-[#618A7D]">Automated Messaging</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#3FB863]"></div>
                                    <span className="text-[#618A7D]">Campaign Management</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#3FB863]"></div>
                                    <span className="text-[#618A7D]">Analytics & Reporting</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#3FB863]"></div>
                                    <span className="text-[#618A7D]">Contact Management</span>
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default Page