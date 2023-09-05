import axios from 'axios';
import axiosInstance from './axiosInstance';

export async function allOutlets() {
  return await axiosInstance.get('/get-all-outlets');
}

export async function coronaData() {
  const response = await axios.get(
    'https://api.coronavirus.data.gov.uk/v1/data'
  );
  console.log({ dataLength: response.data.data.length });

  console.table(response.data.data);
}

// coronaData();

const encodedParams = new URLSearchParams();
encodedParams.set('q', 'English is hard, but detectably so');

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
  },
  data: encodedParams,
};

async function googleTranslate() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// googleTranslate();
