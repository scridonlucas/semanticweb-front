import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/jsonServer/';

const postData = async (data) => {
  try {
    const response = await axios.post(baseUrl, data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to post data!');
  }
};

const gatherData = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to gather JSON data!');
  }
};

export default {
  postData,
  gatherData,
};
