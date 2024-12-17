"use client";
import React, { useState } from "react";
import ChatWrapper from "./ChatWrapper";
import Chat from "./Chat";

const ChatBot = () => {
  const [openChatBot, setOpenChatBot] = useState<boolean>(false);
  const handleOpenChatBot = () => {
    setOpenChatBot(!openChatBot);
  };
  return (
    <>
      <div className="flex flex-col gap-5 items-center bg-white/90 min-h-screen h-fit w-full text-black p-4 pb-[30px]">
        <h1
          className="font-bold text-2xl p-4 pl-6 pr-6 bg-blue-500 h-fit w-fit rounded-md mt-4 text-white"
          style={{ boxShadow: "4px 2px 9px 2px #5D469633" }}
        >
          Chatbot Replica: Your Virtual Assistant
        </h1>
        <p style={{ boxShadow: "4px 2px 9px 2px #5D469633 inset" }} className="p-20 pt-14 pb-14 text-center text-xl text-blue-600 font-bold bg-gray-500/10 w-[80%] rounded-xl">
          Experience intelligent conversations with our AI-powered chatbot!
          Whether you need help, want to chat, or have questions, our virtual
          assistant is here to assist you 24/7. It&apos;s simple, fast, and ready to
          make your experience seamless and enjoyable. Give it a try now and let
          the conversation begin!
        </p>

        <button
          onClick={handleOpenChatBot}
          className="flex flex-col p-6 justify-center items-center rounded-full h-[120px] w-[120px] bg-white/20 mt-[40px] text-wrap font-bold hover:bg-blue-400 hover:text-white"
          style={{ boxShadow: "4px 2px 9px 2px #5D469633" }}
        >
          <span>Chat with</span> <span>me</span>
        </button>
      </div>
      {openChatBot ? (
        <ChatWrapper handleOpenChatBot={handleOpenChatBot}>
          <Chat />
        </ChatWrapper>
      ) : null}
    </>
  );
};

export default ChatBot;
