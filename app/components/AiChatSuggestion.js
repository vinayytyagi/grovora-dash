'use client'
import { useEffect, useState, useRef, useCallback } from 'react';
import { BsFillMicFill,BsFillSendFill,BsMicMuteFill } from 'react-icons/bs';
import { SiCodemagic } from 'react-icons/si';
const AiChatSuggestion = () => {

    const [querry,setQuerry] = useState('');
    const [openChat,setOpenChat] = useState(false);
    const [micOn,setMicOn] = useState(false);
    const [manuallyOpened, setManuallyOpened] = useState(false);
    const timeoutRef = useRef(null);
    const chatRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (manuallyOpened && chatRef.current && !chatRef.current.contains(event.target)) {
          setOpenChat(false);
          setManuallyOpened(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [manuallyOpened]);

    useEffect(()=>{
      if (!manuallyOpened) {
        openAIChat();
      }
    },[querry, manuallyOpened])

    useEffect(()=>{
      if (!manuallyOpened) {
        openAIChat();
      }
    },[micOn, manuallyOpened])

    useEffect(()=>{
      return ()=>{
        if(timeoutRef.current){
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
      }
    },[])

    const openAIChat = useCallback(()=>{
      setOpenChat(true)
      if(timeoutRef.current){
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }

      if(querry === '' && !micOn){
        timeoutRef.current = setTimeout(()=>{
          if(!manuallyOpened && !micOn){
            setOpenChat(false)
            timeoutRef.current = null
          }
        },5000)
      } else {
        if(timeoutRef.current){
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
        setOpenChat(true)
      }
    },[querry, micOn, manuallyOpened])

  return (
    <div 
      ref={chatRef}
      onClick={(e) => {
        if (!openChat) {
          setManuallyOpened(true);
          setOpenChat(true);
        }
      }} 
      className={`fixed z-50 ${openChat ? 'w-5/6 lg:w-2/4  right-8 lg:right-1/4' : 'w-16 h-12 right-4 cursor-pointer hover:bg-[#3FB863]/80 lg:right-6'} flex gap-2 items-center justify-center  h-16 bg-[#3FB863] rounded-lg bottom-4 px-4 py-2 transition-all duration-300 ease-in-out`}
    >
        {
          openChat ? <>
              {
                micOn ?
                <BsMicMuteFill onClick={(e) => {
                  e.stopPropagation();
                  setMicOn(false);
                }} className='w-6 h-6 cursor-pointer text-red-500' />
                :
                <BsFillMicFill onClick={(e) => {
                  e.stopPropagation();
                  setMicOn(true);
                }} className='w-6 h-6 cursor-pointer text-white' />
              }
            <input 
              value={querry} 
              onChange={e=>setQuerry(e.target.value)}
              onClick={e => e.stopPropagation()}
              placeholder="Type / for commands or speak to Ai.." 
              className="w-full h-full bg-white text-sm placeholder:text-gray-400 px-4 py-3 outline-none rounded-full focus:shadow-sm shadow-[#3FB863]/50 focus:inset-shadow-lg inset-shadow-[#3FB863]/50"
            />
            <button 
              onClick={e => e.stopPropagation()} 
              className="w-12 h-12 p-3 rounded-full"
            >
                <BsFillSendFill className="w-full h-full cursor-pointer text-white active:translate-x-2 active:-translate-y-2  transition-all duration-300 ease-in-out" />
            </button>
          </> :
          <div className='w-full h-full flex items-center justify-center cursor-pointer'>
            <span className='absolute -top-6 left-0 text-sm'>Ask AI ✨</span>
            <SiCodemagic className="text-2xl text-white"/>
          </div>
        }
    </div>
  )
}

export default AiChatSuggestion