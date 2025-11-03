import { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const Clock = ({ timezone }) => {

    const zone = timezone || moment.tz.guess();
    const [currentTime, setCurrentTime] = useState(null);

    useEffect(() => {
        const updateTime = () => {
            const now = moment.tz(zone);
            setCurrentTime(now);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [zone]);

    if (!currentTime) return null;

    const seconds = currentTime.seconds();
    const minutes = currentTime.minutes();
    const hours = currentTime.hours();

    const secondAngle = seconds * 6;
    const minuteAngle = minutes * 6 + seconds * 0.1;
    const hourAngle = (hours % 12) * 30 + minutes * 0.5;

    return (

        <>
            <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full border-4 border-gray-400 bg-white shadow-md flex items-center justify-center relative">
                
                
                <div className="absolute w-3 h-3 bg-black rounded-full z-20" />

               
                <div
                    className="absolute top-1/2 left-1/2 w-1.5 h-14 bg-gray-800"
                    style={{ 
                        transform: `translate(-50%, -100%) rotate(${hourAngle}deg)`,
                        transformOrigin: 'bottom center'
                    }}
                />

                
                <div
                    className="absolute top-1/2 left-1/2 w-1 h-20 bg-gray-600"
                    style={{ 
                        transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)`,
                        transformOrigin: 'bottom center'
                    }}
                />

                
                <div
                    className="absolute top-1/2 left-1/2 w-0.5 h-24 bg-red-500 z-10"
                    style={{ 
                        transform: `translate(-50%, -100%) rotate(${secondAngle}deg)`,
                        transformOrigin: 'bottom center'
                    }}
                />

                
                {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((number, index) => (
                    <div
                        key={number}
                        className="absolute w-4 h-0.5 bg-gray-900"
                        style={{
                            transform: `rotate(${index * 30}deg) translateY(-90px)`
                        }}
                    />
                ))}
            </div>
            
            
            
        </div>
        </>

    );
};

export default Clock;
