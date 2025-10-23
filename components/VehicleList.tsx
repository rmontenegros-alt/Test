
import React from 'react';
import type { Vehicle } from '../types';

interface VehicleListProps {
  vehicles: Vehicle[];
}

const VehicleList: React.FC<VehicleListProps> = ({ vehicles }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-6">Vehículos Registrados</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {vehicles.length === 0 ? (
          <p className="text-center text-gray-400 py-8">No hay vehículos registrados aún.</p>
        ) : (
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs uppercase bg-gray-700 text-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Patente
                </th>
                <th scope="col" className="px-6 py-3">
                  Marca
                </th>
                <th scope="col" className="px-6 py-3">
                  Modelo
                </th>
                <th scope="col" className="px-6 py-3">
                  Cliente
                </th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => (
                <tr key={vehicle.id} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600 transition-colors duration-200">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                    {vehicle.patente}
                  </th>
                  <td className="px-6 py-4">{vehicle.marca}</td>
                  <td className="px-6 py-4">{vehicle.modelo}</td>
                  <td className="px-6 py-4">{vehicle.cliente}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default VehicleList;
