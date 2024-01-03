import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere-herokuapp.com/localhost:3000',
});

export default api;
