import axios from 'axios';
import {BASE_URL} from '../constant/ApiConstant';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchGetData = async url => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const fetchPostData = async (url, data) => {
  try {
    console.log('URl:', url);
    const response = await api.post(url, data);
    console.log('Response:', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export {fetchGetData, fetchPostData};
