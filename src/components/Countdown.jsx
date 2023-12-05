import React, { useState, useEffect } from "react";
import { calculateTimeLeft } from "./calculateTimeleft.js";
import {
  stars,
  hills,
  facebook,
  instagram,
  pinterest,
} from "../assets/index.jsx";

const Countdown = () => {
  const targetDate = "2024-01-01T00:00:00Z";
  const [countdown, setCountdown] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="py-20">
        <h1 className="uppercase text-white text-lg tracking-[0.25rem] ">
          We're Launching Soon
        </h1>
      </div>
      <div>
        <div className="scale-[0.65] sm:scale-100">
          <ul className="flex gap-3">
            {Object.entries(countdown).map(([unit, value]) => (
              <li key={unit} className="flex flex-col items-center">
                <div className="p-5 w-32 flex justify-center rounded-lg bg-blue1 mb-5">
                  <p className="text-accent text-7xl">{value}</p>
                </div>

                <p className="text-base text-xs tracking-[4px] uppercase">
                  {unit}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-3 absolute bottom-10 z-10">
        <img src={facebook} alt={"facebook icon"} />
        <img src={instagram} alt={"instagram icon"} />
        <img src={pinterest} alt={"pinterest icon"} />
      </div>
      <div className="absolute h-full top-0">
        <img src={stars} className="h-full object-none" />
      </div>
      <div className="absolute bottom-0">
        <img src={hills} alt="hills" />
      </div>
    </div>
  );
};

export default Countdown;
