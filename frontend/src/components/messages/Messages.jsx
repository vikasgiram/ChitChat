import React from 'react'
import Message from './Message';
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeletons/MessageSkeletons"

const Messages = () => {
  const {messages, loading}=useGetMessages();
  console.log("Messages:",messages);
  return (
    <div className='px-4 flex-1 overflow-auto'>
        {loading && [...Array(3)].map((_, idx)=> < MessageSkeleton key={idx} />)}

        {!loading && messages.length === 0  && (
          <p className='text-center'> Send a message to start a conversation</p>
        )}
    </div>
  );
};

export default Messages;
