import userData from '../../userData';

export const getAppliances = categories => {
  const getCategoryItems = key => {
    const result = categories.reduce((acc, category) => {
      for (const item of userData.appliances[key].filter) {
        // console.log(item);
        // console.log(userData.appliances);
        // console.log('CATEG', userData.appliances[key].categories);
        if (category.value === item) {
          // console.log(category);
          acc.push(category);
          break;
        }
      }
      return acc;
    }, []);
    userData.appliances[key].categories = [...result];
  };
  const keys = Object.keys(userData.appliances);
  for (const key of keys) {
    getCategoryItems(key);
    // console.log(getCategoryItems(key));
  }
};
