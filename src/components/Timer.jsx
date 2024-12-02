import { useState, useEffect } from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";

const Timer = () => {
  const [currentNumber, setCurrentNumber] = useState(0.00001);
  const [timeRemaining, setTimeRemaining] = useState(3600);

  useEffect(() => {
    const incrementNumber = setInterval(() => {
      setCurrentNumber((prev) => (parseFloat(prev) + 0.00001).toFixed(5));
    }, 60000);

    const timerInterval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          clearInterval(timerInterval);
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(incrementNumber);
      clearInterval(timerInterval);
    };
  }, []);

  const percentage = (timeRemaining / 3600) * 100;
  const angle = percentage * 3.6;

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="flex flex-col items-center justify-center">
      {/* نمایش عدد خارج دایره */}
      <div className="bg-white px-10 py-5 mb-5 rounded-lg flex justify-between items-center gap-5">
        <BsCurrencyBitcoin className="text-5xl text-[#ff3300]" />
        <p className="text-4xl font-bold  text-black">{currentNumber}</p>
      </div>
      <div className="relative flex items-center justify-center mb-4">
        <div className="w-32 h-32 rounded-full bg-white">
          <div
            className="absolute w-full h-full rounded-full"
            style={{
              background: `conic-gradient(#003366 ${angle}deg, #f0f0f0 ${angle}deg)`,
            }}
          />
        </div>
      </div>
      <div className="text-xl font-bold text-blue-900">
        {`${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds
        }`}
      </div>
    </div>
  );
};

export default Timer;
