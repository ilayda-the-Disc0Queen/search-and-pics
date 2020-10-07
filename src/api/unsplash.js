import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
        Authorization: 'Client-ID GHsPykq_WOuKAe4ruG1ef81xW-Tus9k9TuzXp-baUH4'
      }
});
