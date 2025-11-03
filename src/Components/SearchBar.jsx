import React, { useState } from 'react';
import moment from 'moment-timezone';
import { useClockContext } from '../context/ClockContext';
import Swal from 'sweetalert2';

function SearchBar() {
    const [selectedZone, setSelectedZone] = useState('');
    const { addClock } = useClockContext();
    const [searchTerm, setSearchTerm] = useState('');

    const allTimezones = moment.tz.names();
    const filteredZones = allTimezones.filter(zone =>
        zone.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleAddClock = () => {
        if (selectedZone) {
            addClock(selectedZone, selectedZone);
            setSelectedZone('');
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please select a timezone first!",

            });
        }
    };

    return (
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search timezone"
                className="w-72 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {searchTerm && filteredZones.length > 0 && (
                <ul className="w-72 max-h-60 overflow-y-auto border border-gray-300 rounded-md shadow-sm bg-white mt-2">
                    {filteredZones.map(zone => (
                        <li
                            key={zone}
                            onClick={() => {
                                setSelectedZone(zone);
                                setSearchTerm('');
                            }}
                            className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                        >
                            {zone}
                        </li>
                    ))}
                </ul>
            )}

            <button
                onClick={handleAddClock}
                className="px-5 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition duration-200"
            >
                Add Clock
            </button>
        </div>
    );
}

export default SearchBar;
