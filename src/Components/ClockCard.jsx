import React from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import { useClockContext } from '../context/ClockContext';
import Clock from './Clock';

function ClockCard({ id, location, timezone }) {
  const { removeClock } = useClockContext();

  return (
    <div className="relative flex flex-col items-center gap-2">
      <Clock timezone={timezone} />
      <div className="text-sm text-white">{location}</div>  
      {id !== 'default' && (
        <button
          onClick={() => removeClock(id)}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-lg"
        >
          <FaDeleteLeft />
        </button>
      )}
    </div>
  );
}

export default ClockCard;
