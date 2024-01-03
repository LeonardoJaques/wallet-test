// import api from './api';
import {AxiosError} from 'axios';

const mock = {
  cards: [
    {
      id: '4ec42ba9-50af-40d2-af90-8312edbd9ca2',
      number: '3529 5435 3355 8727',
      cvv: '317',
      name: 'John Doe',
      date: '12/2024', // no formato MM/YYYY
    },
  ],
};
export async function RegisterCard() {
  try {
    console.log('resultado');
    // const resultado = await api.get('/card');
    return mock;
  } catch (error: AxiosError | any) {
    console.log('AxiosError', error as AxiosError);
    return null;
  }
}
