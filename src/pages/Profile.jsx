import Timer from "../components/Timer";
import { GiMineExplosion } from "react-icons/gi";
import { GiCometSpark } from "react-icons/gi";

const Profile = () => {
  return (
    <div className=" flex flex-col justify-start py-10 items-center min-h-screen bg-gradient-to-b from-[#ff3300] to-[#fc925a]">
      <div className="flex justify-between items-center gap-2 mb-5 ">
        <GiMineExplosion className="text-yellow-400" />
        <h3 className="text-md font-bold text-white ">
          To The Ultimate Mining Network!
        </h3>
        <GiMineExplosion className="text-yellow-400" />
      </div>
      <p className="text-gray-200 text-center mb-14">
        You're earning Bitcoin every moment with our unique system.
      </p>
      <Timer />
      <button className="text-[#ff3300] bg-white font-semibold px-10 py-1 rounded-md mt-2 mb-5 hover:bg-[#ff3300] hover:text-white hover:scale-105 transition-transform duration-200">
        Invite
      </button>
      <div className="bg-[#003366] w-full max-h-screen p-2 flex justify-center items-center gap-3">
        <GiCometSpark className="text-white text-2xl" />
        <p className="text-white">
          Speed ​​up your coin mining by building and expanding your team .
        </p>
      </div>
    </div>
  );
};

export default Profile;
