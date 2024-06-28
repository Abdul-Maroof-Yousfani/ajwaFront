import axios from 'axios';
import { baseURL } from './config';

export const POST = async (url, data = {}, headers = {}) => {
  const token = JSON.parse(localStorage.getItem('ajwaUser') ?? '{}');
  try {
    const res = await axios.post(baseURL + url, data, {
      headers: { Authorization: `Bearer ${token.verificationToken}` },
      validateStatus: status => {
        // console.log(status);
        return status >= 200;
      },
    });
    return res.data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const PUT = async (url, data = {}, headers = {}) => {
  const token = JSON.parse(localStorage.getItem('ajwaUser') ?? '{}');

  try {
    const res = await axios.put(baseURL + url, data, {
      headers: { Authorization: `Bearer ${token.verificationToken}` },
      validateStatus: status => {
        // console.log(status);
        return status >= 200;
      },
    });
    return res.data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const GET = async (url, headers = {}) => {
  const token = JSON.parse(localStorage.getItem('ajwaUser') ?? '{}');
  console.log(token.verificationToken);

  try {
    const res = await axios.get(baseURL + url, {
      headers: { Authorization: `Bearer ${token.verificationToken}` },
      validateStatus: status => {
        // console.log(status);
        return status >= 200;
      },
    });
    return res.data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const DELETE = async (url, headers = {}) => {
  const token = JSON.parse(localStorage.getItem('ajwaUser') ?? '{}');

  try {
    const res = await axios.delete(baseURL + url, {
      headers: { Authorization: `Bearer ${token.verificationToken}` },
      validateStatus: status => {
        // console.log(status);
        return status >= 200;
      },
    });
    return res.data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};
