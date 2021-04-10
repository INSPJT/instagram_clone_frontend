import axios from 'axios';

const fetcher = axios.create({
  baseURL: 'https://yurivon.ml',
});

export default fetcher;
