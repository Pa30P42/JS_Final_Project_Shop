import axios from 'axios';

// Get All Users

const usersUrl = 'https://goit-store.herokuapp.com/users';
const regUrl = 'https://goit-store.herokuapp.com/auth/registration';
const loginUrl = 'https://goit-store.herokuapp.com/auth/login';
const getUserInfoUrl = 'https://goit-store.herokuapp.com/users/currentUser';
const getUserByIdUrl = 'https://goit-store.herokuapp.com/users/getById/';
const changePasswordUrl =
  'https://goit-store.herokuapp.com/users/changePassword';
const updateAddressUrl = 'https://goit-store.herokuapp.com/users/updateAddress';
const addFavoriteUrl =
  'https://goit-store.herokuapp.com/users/addFavoriteProduct/5f154f156a4df46aa14dc526';
const deleteFavoriteUrl =
  'https://goit-store.herokuapp.com/users/removeFavoriteProduct/5f154f156a4df46aa14dc526';

const btnRef = document.querySelector('.check');
const btnRef2 = document.querySelector('.check2');

const addFavorite = async () => {
  try {
    axios.defaults.headers['Authorization'] =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
    const response = await axios.get(addFavoriteUrl);
    console.log(response);
  } catch (error) {
    console.log(error);
    // throw error;
  }
};
const deleteFavorite = async () => {
  try {
    axios.defaults.headers['Authorization'] =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
    const response = await axios.delete(deleteFavoriteUrl);
    console.log(response);
  } catch (error) {
    console.log(error);
    // throw error;
  }
};

const getInfo = async () => {
  try {
    const response = await axios.get(usersUrl);
    console.log(response);
  } catch (error) {
    console.log(error);
    // throw error;
  }
};
const changeUserInfo = async () => {
  try {
    axios.defaults.headers['Authorization'] =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
    const user = { email: 'cheeseburger555555@gmail.com' };
    const response = await axios.patch(usersUrl, user);
    console.log(response);
  } catch (error) {
    console.log(error);
    // throw error;
  }
};
const updateUserAddress = async () => {
  try {
    axios.defaults.headers['Authorization'] =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
    const user = {
      country: 'USA',
      city: 'NY',
      place: 'Brroklyn',
      street: 'Wall street',
      block: '1',
      building: '',
      flat: '15',
      zip: '',
    };
    const response = await axios.patch(updateAddressUrl, user);
    console.log(response);
  } catch (error) {
    console.log(error);
    // throw error;
  }
};
const changeUserPassword = async () => {
  try {
    axios.defaults.headers['Authorization'] =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
    const newPassword = { password: 'qwerty123', confirmPassword: 'qwerty123' };
    const response = await axios.patch(changePasswordUrl, newPassword);
    console.log(response);
  } catch (error) {
    console.log(error);
    // throw error;
  }
};
const getCurrentUser = async () => {
  try {
    axios.defaults.headers['Authorization'] =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
    const response = await axios.get(getUserInfoUrl);
    console.log(response);
  } catch (error) {
    console.log(error);
    // throw error;
  }
};
const getUserInformation = () => {
  const getUserById = async id => {
    try {
      axios.defaults.headers['Authorization'] =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
      const response = await axios.get(`${getUserByIdUrl}${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
      // throw error;
    }
  };
  const getUserInfo = async () => {
    try {
      axios.defaults.headers['Authorization'] =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
      const response = await axios.get(getUserInfoUrl);
      const currentId = response.data._id;
      console.log(currentId);
      return currentId;
    } catch (error) {
      console.log(error);
      // throw error;
    }
  };
  getUserInfo().then(id => getUserById(id));
};
const getUserById = async id => {
  try {
    axios.defaults.headers['Authorization'] =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
    const response = await axios.get(`${getUserByIdUrl}${id}`);
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
      email: 'unotest2@gmail.com',
      password: 'testuno111',
    };
    const response = await axios.post(loginUrl, user);
    localStorage.setItem('token', response.data.accces_token);
    // console.log(response);
    console.log(response.data.accces_token);
    // console.log(response);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

btnRef.addEventListener('click', login);
btnRef2.addEventListener('click', getCurrentUser);
