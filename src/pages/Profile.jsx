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
      <div className="flex justify-center items-center gap-5  mt-2 mb-5">
        <input
          type="text"
          placeholder="Enter your code..."
          className="bg-transparent border-2 border-white rounded-md w-52 h-8 px-4 py-2 text-white focus:outline-none placeholder:text-white text-sm"
        />
        <button className="text-[#ff3300] bg-white font-semibold  w-28 h-8 rounded-md  hover:bg-[#ff3300] hover:text-white hover:scale-105 transition-transform duration-200">
          Invite
        </button>
      </div>
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
