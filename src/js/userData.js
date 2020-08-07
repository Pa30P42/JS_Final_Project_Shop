import bigTech from '../images/category/big-tech.jpg';
import buildInTech from '../images/category/build-in-tech.jpg';
import homeCareTech from '../images/category/home-care-tech.jpg';
import kitchenTech from '../images/category/kitchen-tech.jpg';
import { userDataFn } from './setting';
export default {
  localFavourites: [],
  currentPrintElements: [],
  settings: {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  },
  allProducts: [],
  user: {
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

  categories: {},

  pagination: {
    currentPage: 1,
    maxPages: 0,
    totalProducts: 0,
    perPage: 0,
    pagesCount: 0,
    category: '',
  },

  categoriesItems: [],
  appliances: {
    large_home_appliances: {
      name: 'Крупная бытовая техника',
      value: 'large_home_appliances',
      image: bigTech,
      categories: [],
      filter: ['refrigerators', 'washing_machines', 'dishwashers', 'сookers', 'freezers', 'drying_machines'],
    },
    built_in_appliances: {
      name: 'Встраиваемая техника',
      value: 'built_in_appliances',
      image: buildInTech,
      categories: [],
      filter: ['built_in_ovens', 'built_in_hobs', 'cooker_hoods', 'food_waste_disposers', 'Accessories_for_vbt'],
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
  getSettings(width = document.documentElement.clientWidth) {
    userDataFn();
    if (localStorage.getItem('info')) {
      if (JSON.parse(localStorage.getItem('info')).user)
        this.user = { ...this.user, ...JSON.parse(localStorage.getItem('info')).user.user };
    }
    // userData();
    if (width < 768) {
      this.settings.isMobile = true;
      this.pagination.perPage = 6;
    }
    if (width >= 768 && width < 1200) {
      this.settings.isTablet = true;
      this.pagination.perPage = 9;
    }
    if (width >= 1200) {
      this.settings.isDesktop = true;
      this.pagination.perPage = 10;
    }
  },

  getName(link) {
    return this.categoriesItems.find(category => category.value.toLowerCase().includes(link.toLowerCase())).name;
  },

  getValue(link) {
    return this.categoriesItems.find(category => category.name.toLowerCase().includes(link.toLowerCase())).value;
  },
};
