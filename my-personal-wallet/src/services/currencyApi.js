import axios from 'axios';

const currencyAPI = async () => {
  try {
    const { data } = await axios('https://economia.awesomeapi.com.br/json/all');

    return data;
  } catch (error) {
    return error;
  }
};

export default currencyAPI;
