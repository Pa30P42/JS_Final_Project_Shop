import axios from 'axios';

const baseUrl = 'https://goit-store.herokuapp.com/users';

const getInfo = async () => {
  try {
    const response = await axios.get(baseUrl);
  } catch (error) {}
};
