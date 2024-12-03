import { PiNetworkBold } from "react-icons/pi";

const stages = [
  { title: "stage 1", progress: 20 },
  { title: "stage 2", progress: 40 },
  { title: "stage 3", progress: 60 },
  { title: "stage 4", progress: 80 },
  { title: "stage 5", progress: 100 },
  { title: "stage 6", progress: 70 },
  { title: "stage 7", progress: 50 },
  { title: "stage 8", progress: 90 },
];

const Networking = () => {
  return (
    <div className="bg-[#003366] p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4 flex justify-start items-center gap-3">
        <PiNetworkBold />
        Networking progress:
      </h2>
      {stages.map((stage, index) => (
        <div key={index} className="mb-4">
          <h3 className="mb-2 font-semibold">{stage.title} (....)</h3>
          <div className="relative w-full bg-gray-200 rounded h-4">
            <div
              className={`absolute top-0 left-0 h-full bg-[#ff3300] rounded`}
              style={{ width: `${stage.progress}%` }}
            />
          </div>
          <p className="text-right text-sm">{stage.progress}%</p>
        </div>
      ))}
    </div>
  );
};

export default Networking;
