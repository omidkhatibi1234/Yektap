import cartImg from "../assets/Card-Example.png";
import Networking from "../components/Networking";
import CryptoPrices from "../APIs/CryptoPrices";
import { FaHistory } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { BsBoxArrowInUp } from "react-icons/bs";
import { BsBoxArrowInDown } from "react-icons/bs";
import { IoWalletSharp } from "react-icons/io5";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { IoLogoUsd } from "react-icons/io";

const Wallet = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full py-7">
      <div className="flex flex-col md:flex-row w-full justify-center items-center md:gap-0 gap-5">
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img src={cartImg} alt="" className=" cart-shadow shadow-lg" />
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center gap-5">
          <div className="flex justify-start gap-10 items-center bg-[#003366] w-full py-5 px-16 rounded-md text-white">
            <IoWalletSharp className="text-white text-4xl" />
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 justify-start items-center ">
                <BsCurrencyBitcoin className=" text-xl text-orange-500" />
                <p>0.5555</p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <IoLogoUsd className=" text-xl text-green-500" />
                <p>76.89</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center md:gap-7 gap-3">
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
      </div>
      <div className="w-full mt-5">
        <Networking />
      </div>
      <div className="w-full mt-5">
        <CryptoPrices />
      </div>
    </div>
  );
};

export default Wallet;
