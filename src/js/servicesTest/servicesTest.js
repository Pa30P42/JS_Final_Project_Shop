import axios from 'axios';

const baseUrl = 'https://goit-store.herokuapp.com/users';

const getInfo = async () => {
  try {
    const response = await axios.get(baseUrl);
    console.log(response);
  } catch (error) {
    console.log(error);
    // throw error;
  }
};

// const getUsers = async () => {
//   try {
//     const result = await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(result);
//   } catch (err) {
//     throw err;
//   }
// };

// getInfo();
