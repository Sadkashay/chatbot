import React, { ReactNode } from "react";
import { RxCross2 } from "react-icons/rx";

interface Props {
  children: ReactNode;
}
const ChatWrapper = ({ children }: Props) => {
  return (
    <div className="h-screen w-screen fixed flex justify-end bg-white/60 z-10 top-0 left-0 text-black p-2">
      <div className="bg-white w-full max-w-[380px] rounded-lg flex flex-col">
        <div className="flex w-full justify-end">
            <RxCross2 />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ChatWrapper;
