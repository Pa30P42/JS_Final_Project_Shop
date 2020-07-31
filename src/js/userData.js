import bigTech from '../images/category/big-tech.jpg';
import buildInTech from '../images/category/build-in-tech.jpg';
import homeCareTech from '../images/category/home-care-tech.jpg';
import kitchenTech from '../images/category/kitchen-tech.jpg';

export default {
  user: {
    favorites: [],
    name: '',
    phone: '',
    email: '',
    adress: {
      country: '',
      city: '',
      place: '',
      street: ' ',
      block: '',
      building: '',
      flat: '',
      zip: '',
    },
    cartItem: {
      id: '',
      name: '',
      price: 0,
      image: '',
      quantity: 0,
    },
    cart: {
      cartItems: [],
      totalAmount: 0,
      totalQuantity: 0,
    },
  },

  categoriesItems: [],
  appliances: {
    large_home_appliances: {
      name: 'Крупная бытовая техника',
      value: 'large_home_appliances',
      image: bigTech,
      categories: [],
      filter: [
        'refrigerators',
        'washing_machines',
        'dishwashers',
        'сookers',
        'freezers',
        'drying_machines',
      ],
    },
    built_in_appliances: {
      name: 'Встраиваемая техника',
      value: 'built_in_appliances',
      image: buildInTech,
      categories: [],
      filter: [
        'built_in_ovens',
        'built_in_hobs',
        'cooker_hoods',
        'food_waste_disposers',
        'Accessories_for_vbt',
      ],
    },
    home_and_clothing_care: {
      name: 'Уход за домом и одеждой',
      value: 'home_and_clothing_care',
      image: homeCareTech,
      categories: [],
      filter: [
        'vacuum_cleaner',
        'robot_vacuum_cleaners',
        'irons',
        'sewing_equipment_and_accessories',
        'steam_cleaners',
        'accessories_for_home_care_and_clothing_products',
      ],
    },
    kitchen_appliances: {
      name: 'Техника для кухни',
      value: 'kitchen_appliances',
      image: kitchenTech,
      categories: [],
      filter: [
        'coffee_machines',
        'multicooker',
        'microwave_ovens',
        'blenders',
        'grills',
        'accessories_for_kitchen_appliances',
        'other_small_equipment',
      ],
    },
  },
};
