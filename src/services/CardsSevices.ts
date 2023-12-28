import api from './api';

export async function RegisterCard() {
  try {
    const resultado = await api.get('/cards');
    console.log('resultado');
    return resultado.data;
  } catch (error: unknown) {
    console.error(error);
    return null;
  }
}
