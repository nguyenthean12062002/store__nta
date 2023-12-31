import React from "react";
import { BsSendFill } from "react-icons/bs";
const ChatModal = ({ isShow }) => {
  return (
    <div
      hidden={isShow}
      className="w-full h-[300px] bg-[#FEBD68] z-20  transition-all duration-300 px-half flex items-center justify-center flex-col"
    >
      <div className="w-[98%] h-[80%] bg-slate-100 flex flex-col items-center justify-center">
        {/* screen chatss */}
        <div className="w-full h-[90%] p-[6px]">
          <div>
            <h3>What help do you need?</h3>
          </div>
        </div>
        {/* inputs */}
        <div className="w-[90%] flex items-center justify-between">
          <input
            className="w-[90%] border-[1px] mb-[8px] h-[34px] px-[6px] text-[#333]"
            placeholder="...aaa"
            autoFocus={true}
          />
          {/* icon send */}
          <BsSendFill className="text-[1.4rem]" />
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
