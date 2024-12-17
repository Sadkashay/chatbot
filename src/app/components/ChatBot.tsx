"use client";
import React, { useState } from "react";
import ChatWrapper from "./ChatWrapper";
import Chat from "./Chat";
import LandingPage from "./LandingPage";

const ChatBot = () => {
  const [openChatBot, setOpenChatBot] = useState<boolean>(false);
  const handleOpenChatBot = () => {
    setOpenChatBot(!openChatBot);
  };
  return (
    <>
      <div className="flex flex-col items-center bg-white/90 min-h-screen h-fit w-full text-black">
        <LandingPage />
        <section id="about" className="py-20 w-full bg-gray-100 text-center">
          <div className="max-w-screen-xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto text-gray-700">
              Our AI assistant works by processing data and providing tailored
              recommendations, automating tasks, and helping you stay organized.
              With simple integrations and real-time processing, you can elevate
              your productivity to the next level.
            </p>
            <button
              onClick={handleOpenChatBot}
              className="flex p-4 justify-center items-center rounded-full h-[120px] w-[120px] bg-white/20 mt-[40px] text-wrap font-bold hover:bg-blue-400 hover:text-white"
              style={{ boxShadow: "4px 2px 9px 2px #5D469633" }}
            >
              <span>Start Chat</span>
            </button>
          </div>
        </section>
        <section className="py-16 w-full bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg mb-8 px-4">
            Experience the future of productivity. Take control of your tasks
            and get real-time support anytime you need it.
          </p>
          <a
            onClick={handleOpenChatBot}
            className="px-8 py-4 bg-white text-blue-600 font-semibold text-xl rounded-full shadow-lg transition-all duration-300 hover:bg-gray-100"
          >
            Get Started
          </a>
        </section>
        <footer className="py-6 bg-gray-900 w-full text-white text-center">
          <p>© 2024 Your Company. All Rights Reserved.</p>
          <p className="text-sm">
            Contact Us | Privacy Policy | Terms of Service
          </p>
        </footer>
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
