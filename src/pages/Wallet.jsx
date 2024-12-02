import cartImg from "../assets/Card-Example.png";
import { FaHistory } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { BsBoxArrowInUp } from "react-icons/bs";
import { BsBoxArrowInDown } from "react-icons/bs";
import CryptoPrices from "../components/CryptoPrices";

const Wallet = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full py-7">
      <div className="flex flex-col md:flex-row w-full justify-center items-center md:gap-0 gap-5">
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img src={cartImg} alt="" className=" cart-shadow shadow-lg" />
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center md:gap-7 gap-3">
          <button className="hover-btn">
            <a
              href="#"
              className="flex flex-col justify-center items-center bg-[#003366] text-white px-3 py-2 md:px-5 md:py-3 rounded-md"
            >
              <BsBoxArrowInUp className="text-xl md:text-2xl mb-2 rotate-icon" />
              Recive
            </a>
          </button>
          <button className="hover-btn">
            <a
              href="#"
              className="flex flex-col  justify-center items-center bg-[#003366] text-white px-3 py-2 md:px-5 md:py-3 rounded-md"
            >
              <BsBoxArrowInDown className="text-xl md:text-2xl mb-2 rotate-icon" />
              Send
            </a>
          </button>
          <button className="hover-btn">
            <a
              href="#"
              className="flex flex-col  justify-center items-center bg-[#003366] text-white px-3 py-2 md:px-5 md:py-3 rounded-md"
            >
              <FaExchangeAlt className="text-xl md:text-2xl mb-2 rotate-icon" />
              Exchange
            </a>
          </button>
          <button className="hover-btn">
            <a
              href="#"
              className="flex flex-col  justify-center items-center bg-[#003366] text-white px-3 py-2 md:px-5 md:py-3 rounded-md"
            >
              <FaHistory className="text-xl md:text-2xl mb-2 rotate-icon" />
              History
            </a>
          </button>
        </div>
      </div>
      <div className="w-full mt-5">
        <CryptoPrices />
      </div>
    </div>
  );
};

export default Wallet;
