import axios from 'axios';

const API_KEY = 'NN1HcXOTDHlV9FwAzsizei-T2xKxLvenwvTGOAICki2OkmDqn4lNISYNx9TZLzouv7g5-JjAQ-lBcDQImZ-XPqgy1egm_H2_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCSSOADruDFkSTvedWYBKgpum1MDp9p7NFo60u2JlBqoddbYi5jy5hxI_wGaUfW9-1mSo88Ym0ET3ojHbvRYnidHZSzg_Me2f9z9Jw9Md8uu&lib=M210bAo23dVDqBovQm6pzNCvTTABYAXY9';

const fetchData = async () => {
  try {
    const response = await axios.get(`https://script.googleusercontent.com/macros/echo?user_content_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;