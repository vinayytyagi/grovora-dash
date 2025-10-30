'use client'
import { useEffect, useRef } from 'react'

const EMOJIS = [
  '😀','😃','😄','😁','😆','😂','🤣','😊','😇','🙂','🙃','😉','😍','😘','😜','🤪','🤩','🥳','🤔','🤨','😐','😶','😴','😬','😭','😡','👍','👎','👏','🙏','🔥','✨','🎉','💯','💖'
]

export default function EmojiPicker({ onSelect, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose && onClose()
      }
    }

    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [onClose])

  return (
    <div ref={ref} className="w-64 sm:w-72 bg-white p-2 rounded-lg shadow-lg grid grid-cols-6 sm:grid-cols-8 gap-1">
      {EMOJIS.map((emoji) => (
        <button
          key={emoji}
          type="button"
          onClick={() => onSelect && onSelect(emoji)}
          className="p-1 rounded hover:bg-gray-100 text-lg flex items-center justify-center"
          aria-label={`Insert ${emoji}`}
        >
          {emoji}
        </button>
      ))}
    </div>
  )
}
