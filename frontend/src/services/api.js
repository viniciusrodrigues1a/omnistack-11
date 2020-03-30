import axios from 'axios';

const api = axios.create({
  baseURL: 'https://be-the-hero-omnistack-backend.herokuapp.com/',
});

export default api;
