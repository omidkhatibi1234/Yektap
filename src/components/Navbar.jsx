import { Link } from "react-router-dom";
import { SiBitcoinsv } from "react-icons/si";

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
      <h1 className=" font-bold text-white md:text-4xl sm:text-2xl text-xl w-1/3 text-right">
        Welcome user
      </h1>
    </nav>
  );
};

export default Navbar;
