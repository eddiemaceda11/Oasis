import { useState } from "react";
import CircularProgress from "@/components/ui/CircularProgress";

const InfoBoxes = () => {
  // Progress for circle
  // will be connected to server/db to determine the actual overall properties rented
  const [progress, setProgress] = useState(Math.round((15 / 25) * 100));

  return (
    <section className="flex gap-4">
      <div className="shadow border w-[16rem] h-32 rounded-lg flex items-center justify-center gap-6 bg-white">
        <div className="text-center flex flex-col">
          <p>Total Tenants</p>
          <p className="text-[1.5rem]">18</p>
        </div>
        <CircularProgress progress={progress} />
      </div>
      <div className="shadow border w-[12rem] h-32 rounded-lg flex flex-col items-center justify-center bg-white">
        <div className="text-center flex flex-col">
          <p>AVG Property Cost</p>
          <p className="text-[1.5rem]">$1,800</p>
        </div>
      </div>
      <div className="shadow border w-[12rem] h-32 rounded-lg flex flex-col items-center justify-center bg-white">
        <div className="text-center flex flex-col">
          <p>AVG Lease Term</p>
          <p className="text-[1.5rem]">6 months</p>
        </div>
      </div>
      <div className="shadow border w-[8.3rem] h-32 rounded-lg flex flex-col items-center justify-center bg-white">
        <p>Total Tenants</p>
      </div>
      <div className="shadow border w-[8.3rem] h-32 rounded-lg flex flex-col items-center justify-center bg-white">
        <p>Total Tenants</p>
      </div>
    </section>
  );
};

export default InfoBoxes;
