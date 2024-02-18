
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Ajuste para a porta correta do seu servidor Flask
});

export default api;
