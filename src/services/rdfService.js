import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/rdf';

const postData = async (formData) => {
  try {
    const response = await axios.post(baseUrl, formData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to send data!');
  }
};

const gatherData = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to gather data!');
  }
};
export default {
  postData,
  gatherData,
};
