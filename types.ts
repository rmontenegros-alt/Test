
export interface Vehicle {
  id: number;
  patente: string;
  marca: string;
  modelo: string;
  cliente: string;
}

export type NewVehicle = Omit<Vehicle, 'id'>;

export interface NotificationState {
  message: string;
  type: 'success' | 'error' | null;
}
