"use client";
import React, { useState } from "react";
import ChatWrapper from "./ChatWrapper";
import Chat from "./Chat";

const ChatBot = () => {
  const [openChatBot, setOpenChatBot] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col items-center bg-white/80 h-full w-full text-black">
        <h1
          className="font-bold text-2xl p-4 pl-6 pr-6 bg-black h-fit w-fit rounded-md mt-4 text-white"
          style={{ boxShadow: "4px 2px 9px 2px #5D469633" }}
        >
          Chatbot Replica
        </h1>

        <button
          onClick={() => setOpenChatBot(!openChatBot)}
          className="flex flex-col p-6 justify-center items-center rounded-full h-[120px] w-[120px] bg-white/20 mt-[250px] text-wrap font-bold"
          style={{ boxShadow: "4px 2px 9px 2px #5D469633" }}
        >
          <span>Chat with</span> <span>me</span>
        </button>
      </div>
      {openChatBot ? (
        <ChatWrapper>
          <Chat />
        </ChatWrapper>
      ) : null}
    </>
  );
};

export default ChatBot;
