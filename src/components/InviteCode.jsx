// src/Card.js
import { useState } from "react";

const InviteCode = () => {
  const [inviteCode, setInviteCode] = useState("");
  const [inputValue, setInputValue] = useState("");

  // Random Code
  const generateInviteCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setInviteCode(code);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function for Handle Code
  const handleInvite = () => {
    alert(`This is a Invite Code : ${inviteCode}`);
  };

  return (
    <div className=" px-5 rounded-md bg-[#003366] overflow-hidden py-4  shadow-lg flex justify-center items-center gap-16  mt-2 mb-5">
      <div>
        {inviteCode ? (
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-white">
              Your Invite Code : <strong>{inviteCode}</strong>
            </p>
            <button
              onClick={generateInviteCode}
              className="text-[#ff3300] bg-white font-semibold  w-28 h-8 rounded-md  hover:bg-[#ff3300] hover:text-white hover:scale-105 transition-transform duration-200"
            >
              New Code
            </button>
          </div>
        ) : (
          <button
            onClick={generateInviteCode}
            className="text-[#ff3300] bg-white font-semibold  w-28 h-8 rounded-md  hover:bg-[#ff3300] hover:text-white hover:scale-105 transition-transform duration-200"
          >
            Invite
          </button>
        )}
      </div>
      <div className="flex items-center justify-center gap-3 ">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your code..."
          className="bg-transparent border-2 border-white rounded-md w-52 px-4 py-2 text-white focus:outline-none placeholder:text-white text-sm h-fit"
        />
        <button
          onClick={handleInvite}
          className="bg-[#ff3300] hover:bg-white hover:text-[#ff3300] text-white font-semibold py-2 px-4 rounded text-sm"
        >
          Confirm Code
        </button>
      </div>
    </div>
  );
};

export default InviteCode;
