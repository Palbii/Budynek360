import React, { useEffect, useState } from 'react';
import data from '../data/floors.json';

const FloorList = () => {
  const [floors, setFloors] = useState([]);

  useEffect(() => {
    setFloors(data);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista pięter i pokojów</h1>
      {floors.map((floor) => (
        <div key={floor.floor} className="mb-6">
          <h2 className="text-xl font-semibold">Piętro {floor.floor}</h2>
          <div className="grid grid-cols-6 gap-2 mt-2">
            {floor.rooms.map((room) => (
              <div key={room} className="bg-gray-100 p-2 rounded shadow text-center">
                Pokój {room}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloorList;
