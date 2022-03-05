const axios = require('axios');

const API_ID = 'FN35ZgxeHr1ORapGK8sX';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books/`;

const getbooks = await axios.get(API_URL).then(
  (response) => Object.entries(response.data).map(([id, bk]) => ({ id, ...bk[0] })),
);
