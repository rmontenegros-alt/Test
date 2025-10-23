import React, { useState, useEffect } from 'react';
import VehicleForm from './components/VehicleForm';
import VehicleList from './components/VehicleList';
import Notification from './components/Notification';
import type { Vehicle, NewVehicle, NotificationState } from './types';

const App: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const initialFormState: NewVehicle = { patente: '', marca: '', modelo: '', cliente: '' };
  const [newVehicle, setNewVehicle] = useState<NewVehicle>(initialFormState);
  const [notification, setNotification] = useState<NotificationState>({ message: '', type: null });

  useEffect(() => {
    if (notification.type) {
      const timer = setTimeout(() => {
        setNotification({ message: '', type: null });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewVehicle({ ...newVehicle, [name]: value });
  };
  
  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check for empty fields
    // FIX: Added a type check to ensure the value is a string before calling .trim().
    if (Object.values(newVehicle).some(value => typeof value === 'string' && value.trim() === '')) {
      showNotification('Todos los campos son obligatorios.', 'error');
      return;
    }

    // Check for duplicates
    const isDuplicate = vehicles.some(
      (vehicle) =>
        vehicle.patente.toLowerCase() === newVehicle.patente.toLowerCase() &&
        vehicle.marca.toLowerCase() === newVehicle.marca.toLowerCase() &&
        vehicle.modelo.toLowerCase() === newVehicle.modelo.toLowerCase() &&
        vehicle.cliente.toLowerCase() === newVehicle.cliente.toLowerCase()
    );

    if (isDuplicate) {
      showNotification('Este vehículo ya ha sido registrado con los mismos datos.', 'error');
      return;
    }
    
    // Add new vehicle
    const vehicleToAdd: Vehicle = {
        ...newVehicle,
        id: Date.now(),
    };
    
    setVehicles([...vehicles, vehicleToAdd]);
    setNewVehicle(initialFormState); // Reset form
    showNotification('Vehículo registrado exitosamente.', 'success');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-tight">
            Control de Registro Vehicular
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Mantenga un registro ordenado de los vehículos que ingresan.
          </p>
        </header>
        
        <main>
          <Notification notification={notification} onClose={() => setNotification({ message: '', type: null })} />
          <VehicleForm 
            vehicle={newVehicle}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
          <VehicleList vehicles={vehicles} />
        </main>

        <footer className="text-center mt-12 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Vehicle Registration Control. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
