import React from 'react';
import ClockCard from './ClockCard';
import { useClockContext } from '../context/ClockContext';

function ClockList() {
  const { defaultClock, clocks } = useClockContext();
  

  return (
    <div className="mt-10 w-full max-w-5xl px-4">
      <h2 className="text-xl font-semibold text-white mb-4 text-center">Your Clocks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        
        

        
        {clocks.map(clock => (
          <ClockCard key={clock.id} {...clock} />
        ))}
      </div>
    </div>
  );
}

export default ClockList;
