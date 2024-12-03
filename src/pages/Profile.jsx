import Timer from "../components/Timer";
import InviteCode from "../components/InviteCode";

import { GiMineExplosion } from "react-icons/gi";
import { GiCometSpark } from "react-icons/gi";

const Profile = () => {
  return (
    <div className=" flex flex-col justify-start pt-10 items-center  bg-gradient-to-b from-[#ff3300] to-[#fc925a]">
      <div className="flex justify-between items-center gap-2 mb-5 ">
        <GiMineExplosion className="text-yellow-400" />
        <h3 className="text-md font-bold text-white ">
          To The Ultimate Mining Network!
        </h3>
        <GiMineExplosion className="text-yellow-400" />
      </div>
      <p className="text-gray-200 text-center mb-14">
        You are earning Bitcoin every moment with our unique system.
      </p>
      <Timer />
      <InviteCode />
      <div className="bg-white w-full max-h-screen p-2 flex justify-center items-center gap-3">
        <GiCometSpark className="text-[#003366] text-2xl" />
        <p className="text-[#003366]">
          Speed up your coin mining by building and expanding your team .
        </p>
      </div>
    </div>
  );
};

export default Profile;
