// Frontend-only direct calls to GNews API.
// WARNING: This exposes YOUR API KEY in the client. Keep for testing or public keys only.
import axios from 'axios';

const API_KEY = '3051d09ada164e76859d6de90f9c16db'; // replace before build

export const fetchNews = (params = {}) => {
  return axios.get('https://gnews.io/api/v4/search', {
    params: { ...params, apikey: API_KEY }
  }).then(r => r.data);
};
