import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

const Spinner = () => (
  <div className="flex justify-center items-center">
    <GridLoader />
  </div>
);

const CryptoPrices = () => {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPrices = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,ripple,tether,solana,binancecoin,dogecoin,cardano,usd-coin,staked-ether&vs_currencies=usd&include_24hr_change=true"
      );
      const data = await response.json();
      setPrices(data);
    } catch (error) {
      console.error("Error fetching the cryptocurrency prices:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  if (loading) {
    return (
      <div className="py-5 px-2">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Loading Prices...
        </h2>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="py-5 px-2">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Cryptocurrency Prices:
      </h2>
      <div className="flex flex-col space-y-2">
        {Object.keys(prices).map((key) => (
          <div
            className="flex justify-between items-center bg-[#003366] text-white p-3 rounded-md shadow"
            key={key}
          >
            <span className="font-semibold">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </span>
            <div className="flex flex-row-reverse gap-3 md:gap-7 md:text-xl text-sm">
              <span className="mr-4">${prices[key]?.usd}</span>
              <span
                className={`font-bold ${
                  prices[key]?.usd_24h_change > 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {prices[key]?.usd_24h_change.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoPrices;
