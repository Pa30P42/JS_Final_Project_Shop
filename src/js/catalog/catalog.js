const categories = [
  {
      "name": "Холодильники",
      "value": "refrigerators"
  },
  {
      "name": "Стиральные машины",
      "value": "washing_machines"
  },
  {
      "name": "Посудомоечные машины",
      "value": "dishwashers"
  },
  {
      "name": "Кухонные плиты",
      "value": "сookers"
  },
  {
      "name": "Морозильные камеры",
      "value": "freezers"
  },
  {
      "name": "Сушильные машины",
      "value": "drying_machines"
  },
  // ==============
  {
      "name": "Встариваемые духовые шкафы",
      "value": "built_in_ovens"
  },
  {
      "name": "Встраиваемые варочные поверхности",
      "value": "built_in_hobs"
  },
  {
      "name": "Кухонные вытяжки",
      "value": "cooker_hoods"
  },
  {
      "name": "Измельчители пищевых отходов",
      "value": "food_waste_disposers"
  },
  {
      "name": "Аксессуары к вбт",
      "value": "Accessories_for_vbt"
  },
  // ======================
  {
      "name": "Кофемашины",
      "value": "coffee_machines"
  },
  {
      "name": "Мультиварки",
      "value": "multicooker"
  },
  {
      "name": "Печи СВЧ",
      "value": "microwave ovens"
  },
  {
      "name": "Блендеры",
      "value": "blenders"
  },
  {
      "name": "Грили",
      "value": "grills"
  },
  {
      "name": "Аксессуары для кухонной техники",
      "value": "accessories_for_kitchen_appliances"
  },
  {
      "name": "Прочая мелкая техника",
      "value": "other_small_equipment"
  },
  // =========================
  {
      "name": "Пылесосы",
      "value": "vacuum cleaners"
  },
  {
      "name": "Роботы-пылесосы",
      "value": "robot_vacuum_cleaners"
  },
  {
      "name": "Утюги",
      "value": "irons"
  },
  {
      "name": "Швейная техника и аксессуары",
      "value": "sewing_equipment_and_accessories"
  },
  {
      "name": "Пароочистители",
      "value": "steam_cleaners"
  },
  {
      "name": "Аксессуары к товарам по уходу за домом и одеждой",
      "value": "accessories_for_home_care_and_clothing_products"
  },
  {
      "name": "Распродажа",
      "value": "sale"
  }
]
const userData = {}
const appliances = {
  large_home_appliances: {
      name: "Крупная бытовая техника",
      value: "large_home_appliances",
      image: '',
      categories: [],
      filter: ["refrigerators", "washing_machines", "dishwashers", "сookers"]
  },
  built_in_appliances: {
      name: "Встраиваемая техника",
      value: "built_in_appliances",
      image: '',
      categories: [],
      filter: ["built_in_ovens", "built_in_hobs", "cooker_hoods", "Accessories_for_vbt", "food_waste_disposers"]
  },
  home_and_clothing_care: {
      name: "Уход за домом и одеждой",
      value: "home_and_clothing_care",
      image: '',
      categories: [],
      filter: ["refrigerators", "washing_machines", "dishwashers", "сookers"]
  },
  kitchen_appliances: {
      name: "Техника для кухний",
      value: "kitchen_appliances",
      image: '',
      categories: [],
      filter: ["refrigerators", "washing_machines", "dishwashers", "сookers"]
  }
}
const getAppliances = (categories) => {
  const getCategoryItems = (key) => {
      const result = categories.reduce((acc, category) => {
          for (const item of appliances[key].filter) {
              if (category.value === item) {
                  acc.push(category);
                  break;
              }
          }
          return acc;
      }, []);
      appliances[key].categories = [...result]
  }
  const keys = Object.keys(appliances);
  for (const key of keys) {
      getCategoryItems(key)
  }
  console.log(appliances)
}
getAppliances(categories);