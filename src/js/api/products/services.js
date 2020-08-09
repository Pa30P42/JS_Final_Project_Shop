import userData from '../../userData';

export const getAppliances = categories => {
  const getCategoryItems = key => {
    const result = categories.reduce((acc, category) => {
      
      for (const item of userData.appliances[key].filter) {

        if (category.value === item) {
        
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
   
  }
}

