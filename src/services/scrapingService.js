import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/scrape';

const getData = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to gather data!');
  }
};

export default {
  getData,
};
