import React, { MouseEventHandler, ReactNode } from "react";
import { RxCross2 } from "react-icons/rx";

interface Props {
  children: ReactNode;
  handleOpenChatBot: MouseEventHandler<HTMLButtonElement>;
}
const ChatWrapper = ({ children, handleOpenChatBot }: Props) => {
  return (
    <div className="h-screen w-screen fixed flex justify-end bg-white/20 z-10 top-0 left-0 text-black p-2 ">
      <div className="h-[92%] bg-gray-100 w-full max-w-[380px] rounded-lg flex flex-col p-3">
        <button
          onClick={handleOpenChatBot}
          className="flex w-full justify-between mb-4 items-center"
        >
          <div className="flex gap-2 items-center">
          <img src="./12731216.png" alt="icon" className="h-[70px] w-[70px]" />
            <span className="text-xl">Assistant</span>
          </div>
          <RxCross2 size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default ChatWrapper;
