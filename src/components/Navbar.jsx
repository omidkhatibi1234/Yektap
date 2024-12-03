import { Link } from "react-router-dom";
import { SiBitcoinsv } from "react-icons/si";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="w-1/3">
        <SiBitcoinsv className="md:text-7xl text-5xl text-white" />
      </div>
      <ul className="flex justify-center items-center md:gap-8 md:text-md text-sm gap-2 w-1/3 text-white font-semibold">
        <li className="bg-[#003366] md:px-10 md:py-2 px-3 py-2 rounded-md hover:bg-[#005F00]">
          <Link to="/">Profile</Link>
        </li>
        <li className="bg-[#003366] md:px-10 md:py-2 px-3 py-2 rounded-md hover:bg-[#005F00]">
          <Link to="/wallet">Wallet</Link>
        </li>
      </ul>
      <div className="w-1/3 flex justify-center items-center">
        {/* <h1 className=" font-bold text-white md:text-4xl sm:text-2xl text-xl ">
          Welcome user
        </h1> */}
        <Link to="/login" className="flex justify-center items-center gap-2">
          <FaUser className="text-2xl cursor-pointer text-white" />
          <p className="font-semibold text-white hidden md:block">
            Login/<span className="text-[#003366]">Sign Up</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
