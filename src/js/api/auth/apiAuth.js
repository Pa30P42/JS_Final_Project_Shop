import axios from 'axios';

// Get All Users

const usersUrl = 'https://goit-store.herokuapp.com/users';
const regUrl = 'https://goit-store.herokuapp.com/auth/registration';
const loginUrl = 'https://goit-store.herokuapp.com/auth/login';

const btnRef = document.querySelector('.check');

const getInfo = async () => {
  try {
    const response = await axios.get(usersUrl);
    console.log(response);
  } catch (error) {
    console.log(error);
    // throw error;
  }
};

const register = async () => {
  try {
    const user = {
      email: 'ismayilnew@gmail.com',
      password: 'ismayil123123',
    };
    const response = await axios.post(regUrl, user);
    console.log(response);
  } catch (error) {
    console.log(error);
    // throw error;
  }
};

const login = async () => {
  try {
    const user = {
      email: 'ismayil@gmail.com',
      password: 'ismayil123123',
    };
    const response = await axios.post(loginUrl, user);
    // console.log(response.data.accces_token);
    // console.log(response);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// const changeInfo = async () => {
//   try {
//     const user = {
//       name: 'Ismayil',
//       email: 'ismayil@gmail.com',
//       password: 'ismayil123123',
//     };
//     const response = await axios.patch(usersUrl, user);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//     //     // throw error;
//   }
// };

btnRef.addEventListener('click', login);

// import axios from 'axios';
// import { refs } from '../components/refs';

// const regUrl = 'https://goit-store.herokuapp.com/auth/registration';
// const usersUrl = 'https://goit-store.herokuapp.com/users';
// const loginUrl = 'https://goit-store.herokuapp.com/auth/login';
// const favorite =
//   'https://goit-store.herokuapp.com/users/addFavoriteProduct/5f1021fbc7a15c871d735f48';
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZC…zk3fQ.hXt1biMKvHo_3qAHd7ak2Wb7KIvVFbobfaDE0EzWanA';

// const getInfo = async () => {
//   try {
//     const response = await axios.get(usersUrl);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//     // throw error;
//   }
// };
// const reg = async () => {
//   try {
//     const user = {
//       name: 'Ismayil',
//       email: 'ismayil@gmail.com',
//       password: 'ismayil123123',
//     };
//     const response = await axios.post(regUrl, user);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//     // throw error;
//   }
// };
// const login = async () => {
//   try {
//     const user = {
//       email: 'ismayil@gmail.com',
//       password: 'ismayil123123',
//     };
//     const response = await axios.post(loginUrl, user);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//     // throw error;
//   }
// };
// const getFavorite = async () => {
//   try {
//     const response = await axios.get(favorite);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//     // throw error;
//   }
// };

// // reg();

// getInfo();

// // login();

// getFavorite();
