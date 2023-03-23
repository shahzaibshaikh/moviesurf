import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.VITE_OMDB_BASE_URL
});
