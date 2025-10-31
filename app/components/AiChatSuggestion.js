'use client'
import { useEffect, useState, useRef, useCallback } from 'react';
import { BsFillMicFill } from 'react-icons/bs';
import { BsFillSendFill } from 'react-icons/bs';
import { SiCodemagic } from 'react-icons/si';

const AiChatSuggestion = () => {

    const [querry,setQuerry] = useState('');
    const [openChat,setOpenChat] = useState(true);

    const timeoutRef = useRef(null)

    useEffect(()=>{
      openAIChat()
    },[querry])
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

      if(querry === ''){
        timeoutRef.current = setTimeout(()=>{
          setOpenChat(false)
          timeoutRef.current = null
        },3000)
      } else {
        if(timeoutRef.current){
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
        setOpenChat(true)
      }
    },[querry])

  return (
    <div  className={`fixed z-50 ${openChat ? 'w-5/6 lg:w-2/4 right-8 lg:right-1/4' : 'w-16 h-12 right-4 lg:right-6'} flex gap-2 items-center justify-center  h-16 bg-[#3FB863] rounded-lg bottom-4 px-4 py-2 transition-all duration-300 ease-in-out`}>
        {
          openChat ? <>
              <BsFillMicFill className='w-6 h-6 cursor-pointer text-white' />
            <input value={querry} onChange={e=>setQuerry(e.target.value)} placeholder="Type / for commands or speak to Ai.." className="w-full h-full bg-white text-sm placeholder:text-gray-400 px-4 py-3 outline-none rounded-full focus:shadow-sm shadow-[#3FB863]/50 focus:inset-shadow-lg inset-shadow-[#3FB863]/50"/>
            <button className="w-12 h-12 p-3 rounded-full cursor-pointer">
                <BsFillSendFill className="w-full h-full text-white active:translate-x-2 active:-translate-y-2  transition-all duration-300 ease-in-out" />
            </button>
          </> :
          <SiCodemagic onClick={openAIChat} className="text-2xl text-white"/>
        }
    </div>
  )
}

export default AiChatSuggestion