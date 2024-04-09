import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end '>
        <div className='avatar chat-image'>
            <div className='w-10 rounded-full'>
                <img src="https://avatar.iran.liara.run/public/boy?username=vickygiram" alt="chat bubble" />
            </div>
        </div>
      
      <div className={`chat-bubble text-white bg-blue-500 `}> Hi! what is upp?</div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12.42</div>
    </div>
  )
}

export default Message;
