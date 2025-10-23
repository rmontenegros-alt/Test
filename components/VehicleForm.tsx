
import React from 'react';
import type { NewVehicle } from '../types';

interface VehicleFormProps {
  vehicle: NewVehicle;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputField: React.FC<{
  id: keyof NewVehicle;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}> = ({ id, label, value, onChange, placeholder }) => (
  <div>
    <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-300">
      {label}
    </label>
    <input
      type="text"
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 placeholder-gray-400"
      placeholder={placeholder}
      required
    />
  </div>
);

const VehicleForm: React.FC<VehicleFormProps> = ({ vehicle, onInputChange, onSubmit }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-semibold text-white mb-6">Registrar Nuevo Vehículo</h2>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField id="patente" label="Patente" value={vehicle.patente} onChange={onInputChange} placeholder="AA-BB-12" />
          <InputField id="marca" label="Marca" value={vehicle.marca} onChange={onInputChange} placeholder="Toyota" />
          <InputField id="modelo" label="Modelo" value={vehicle.modelo} onChange={onInputChange} placeholder="Corolla" />
          <InputField id="cliente" label="Cliente" value={vehicle.cliente} onChange={onInputChange} placeholder="Juan Pérez" />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors duration-300"
        >
          Registrar Vehículo
        </button>
      </form>
    </div>
  );
};

export default VehicleForm;
