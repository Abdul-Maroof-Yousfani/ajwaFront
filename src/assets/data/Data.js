import deskbanner from '../../assets/images/website/banner.jpg';
import Vegetables from '../../assets/images/website/cat1.jpg';
import Fruit from '../../assets/images/website/cat2.jpg';
import Meat from '../../assets/images/website/cat3.jpg';
import Seafood from '../../assets/images/website/cat4.jpg';
import Eggs from '../../assets/images/website/cat5.jpg';
import Baking from '../../assets/images/website/cat6.jpg';
import Drinks from '../../assets/images/website/cat7.jpg';
import Cheese from '../../assets/images/website/cat8.jpg';
import Milk from '../../assets/images/website/cat9.jpg';
import Product1 from '../../assets/images/website/product1.jpg';
import Product2 from '../../assets/images/website/product2.jpg';
import Product3 from '../../assets/images/website/product3.jpg';
import Product4 from '../../assets/images/website/product4.jpg';
import Product5 from '../../assets/images/website/product5.jpg';
import Product6 from '../../assets/images/website/product6.jpg';
import Product7 from '../../assets/images/website/product7.jpg';
import Product8 from '../../assets/images/website/product8.jpg';
import Product9 from '../../assets/images/website/product9.jpg';
import Product10 from '../../assets/images/website/product10.jpg';
import smbanner1 from '../../assets/images/website/smbanner1.jpg';
import smbanner2 from '../../assets/images/website/smbanner2.jpg';
import smbanner3 from '../../assets/images/website/smbanner3.jpg';
import dis1 from '../../assets/images/website/dis1.jpg';
import dis2 from '../../assets/images/website/dis2.jpg';
import dis3 from '../../assets/images/website/dis3.jpg';
import dis4 from '../../assets/images/website/dis4.jpg';
import dis5 from '../../assets/images/website/dis5.jpg';
import dis6 from '../../assets/images/website/dis6.jpg';
import location from '../../assets/images/website/location.svg';
import map from '../../assets/images/website/map.jpg';

const banners = [
  {
    id: 1,
    mobileUrl: deskbanner,
    url: deskbanner,
  },
  {
    id: 2,
    mobileUrl: deskbanner,
    url: deskbanner,
  },
];

const categories = [
  {
    name: 'Vegetables',
    url: Vegetables,
  },
  {
    name: 'Fresh Fruit',
    url: Fruit,
  },
  {
    name: 'Meat',
    url: Meat,
  },
  {
    name: 'Seafood',
    url: Seafood,
  },
  {
    name: 'Eggs',
    url: Eggs,
  },
  {
    name: 'Baking',
    url: Baking,
  },
  {
    name: 'Drinks',
    url: Drinks,
  },
  {
    name: 'Cheese',
    url: Cheese,
  },
  {
    name: 'Milk',
    url: Milk,
  },
];
const products = {
  popular: [
    {
      name: 'Avocados 2 Units',
      description: 'Avocados are a rich source of vitamins C, E, K, and B-6.',
      rating: '5.00',
      tagName: 'Tropical & Exotic',
      rate: '$60.00',

      stock: 'out of stock',
      url: Product1,
    },
    {
      name: 'Spring Onions 1 bunch',
      description:
        'Go for spring onions with firm, unblemished bulbs and bright green, perky leaves.',
      rating: '5.00',
      tagName: 'Leafy Green',
      rate: '$10.00',
      url: Product2,
    },
    {
      name: 'Red Radish 1 pack',
      description:
        'The color of a radish is a strong indicator of its taste. Pick the ones that are a rich, full red..',
      rating: '5.00',
      tagName: 'Root',
      rate: '$20.00',
      off: '-25%',

      url: Product3,
    },
    {
      name: 'Oyster Mushroom 500 gr',
      description:
        'The color of a radish is a strong indicator of its taste. Pick the ones that are a rich, full red..',
      rating: '5.00',
      tagName: 'Tropical & Exotic',
      rate: '$60.00',
      off: '-25%',
      stock: 'out of stock',
      url: Product4,
    },
    {
      name: 'Oyster Mushroom 500 gr',
      description:
        'The color of a radish is a strong indicator of its taste. Pick the ones that are a rich, full red..',
      rating: '5.00',
      tagName: 'Tropical & Exotic',
      rate: '$60.00',
      url: Product5,
    },
    {
      name: 'Avocados 2 Units',
      description: 'Avocados are a rich source of vitamins C, E, K, and B-6.',
      rating: '5.00',
      tagName: 'Tropical & Exotic',
      rate: '$60.00',
      url: Product1,
    },
  ],
  topRated: [
    {
      name: 'Avocados 2 Units',
      description: 'Avocados are a rich source of vitamins C, E, K, and B-6.',
      rating: '5.00',
      tagName: 'Tropical & Exotic',
      rate: '$60.00',

      stock: 'out of stock',
      url: Product1,
    },
    {
      name: 'Spring Onions 1 bunch',
      description:
        'Go for spring onions with firm, unblemished bulbs and bright green, perky leaves.',
      rating: '5.00',
      tagName: 'Leafy Green',
      rate: '$10.00',
      url: Product2,
    },
    {
      name: 'Red Radish 1 pack',
      description:
        'The color of a radish is a strong indicator of its taste. Pick the ones that are a rich, full red..',
      rating: '5.00',
      tagName: 'Root',
      rate: '$20.00',
      off: '-25%',

      url: Product3,
    },
    {
      name: 'Oyster Mushroom 500 gr',
      description:
        'The color of a radish is a strong indicator of its taste. Pick the ones that are a rich, full red..',
      rating: '5.00',
      tagName: 'Tropical & Exotic',
      rate: '$60.00',
      off: '-25%',
      stock: 'out of stock',
      url: Product4,
    },
    {
      name: 'Oyster Mushroom 500 gr',
      description:
        'The color of a radish is a strong indicator of its taste. Pick the ones that are a rich, full red..',
      rating: '5.00',
      tagName: 'Tropical & Exotic',
      rate: '$60.00',
      url: Product5,
    },
    {
      name: 'Avocados 2 Units',
      description: 'Avocados are a rich source of vitamins C, E, K, and B-6.',
      rating: '5.00',
      tagName: 'Tropical & Exotic',
      rate: '$60.00',
      url: Product1,
    },
  ],
};
const arrproducts = [
  {
    name: 'Avocados 2 Units',
    description: 'Avocados are a rich source of vitamins C, E, K, and B-6.',
    rating: '5.00',
    tagName: 'Tropical & Exotic',
    rate: '$60.00',
    off: '-25%',
    stock: 'out of stock',
    url: Product6,
  },
  {
    name: 'Spring Onions 1 bunch',
    description:
      'Go for spring onions with firm, unblemished bulbs and bright green, perky leaves.',
    rating: '5.00',
    tagName: 'Leafy Green',
    rate: '$10.00',
    url: Product7,
  },
  {
    name: 'Red Radish 1 pack',
    description:
      'The color of a radish is a strong indicator of its taste. Pick the ones that are a rich, full red..',
    rating: '5.00',
    tagName: 'Root',
    rate: '$20.00',
    url: Product8,
  },
  {
    name: 'Oyster Mushroom 500 gr',
    description:
      'The color of a radish is a strong indicator of its taste. Pick the ones that are a rich, full red..',
    rating: '5.00',
    tagName: 'Tropical & Exotic',
    rate: '$60.00',
    url: Product9,
  },
  {
    name: 'Oyster Mushroom 500 gr',
    description:
      'The color of a radish is a strong indicator of its taste. Pick the ones that are a rich, full red..',
    rating: '5.00',
    tagName: 'Tropical & Exotic',
    rate: '$60.00',
    off: '-25%',
    stock: 'out of stock',
    url: Product5,
  },
  {
    name: 'Avocados 2 Units',
    description: 'Avocados are a rich source of vitamins C, E, K, and B-6.',
    rating: '5.00',
    tagName: 'Tropical & Exotic',
    rate: '$60.00',
    url: Product6,
  },
  {
    name: 'Avocados 2 Units',
    description: 'Avocados are a rich source of vitamins C, E, K, and B-6.',
    rating: '5.00',
    tagName: 'Tropical & Exotic',
    rate: '$60.00',
    url: Product10,
  },
  {
    name: 'Spring Onions 1 bunch',
    description:
      'Go for spring onions with firm, unblemished bulbs and bright green, perky leaves.',
    rating: '5.00',
    tagName: 'Leafy Green',
    rate: '$10.00',
    stock: 'out of stock',
    url: Product2,
  },
  {
    name: 'Red Radish 1 pack',
    description:
      'The color of a radish is a strong indicator of its taste. Pick the ones that are a rich, full red..',
    rating: '5.00',
    tagName: 'Root',
    rate: '$20.00',
    off: '-25%',
    url: Product3,
  },
  {
    name: 'Oyster Mushroom 500 gr',
    description:
      'The color of a radish is a strong indicator of its taste. Pick the ones that are a rich, full red..',
    rating: '5.00',
    tagName: 'Tropical & Exotic',
    rate: '$60.00',
    url: Product4,
  },
  {
    name: 'Oyster Mushroom 500 gr',
    description:
      'The color of a radish is a strong indicator of its taste. Pick the ones that are a rich, full red..',
    rating: '5.00',
    tagName: 'Tropical & Exotic',
    rate: '$60.00',
    url: Product5,
  },
  {
    name: 'Avocados 2 Units',
    description: 'Avocados are a rich source of vitamins C, E, K, and B-6.',
    rating: '5.00',
    tagName: 'Tropical & Exotic',
    rate: '$60.00',
    url: Product6,
  },
];

const smabanner = [
  {
    url: smbanner1,
    offrate: '-33%',
    description: 'Delicious Cheese from Selected Farms',
  },
  {
    url: smbanner2,
    offrate: '-25%',
    description: 'Everyday Fresh Fruits from South Africa',
  },
  {
    url: smbanner3,
    offrate: 'free',
    description: 'Tasty Steaks from Our Best Chief',
  },
];
const discount = [
  {
    name: 'Avocados 2 Units',
    description: 'Avocados are a rich source of vitamins C, E, K, and B-6.',
    rating: '5.00',
    url: dis1,
  },
  {
    name: 'Avocados 2 Units',
    description: 'Avocados are a rich source of vitamins C, E, K, and B-6.',
    rating: '5.00',
    url: dis2,
  },
  {
    name: 'Avocados 2 Units',
    description: 'Avocados are a rich source of vitamins C, E, K, and B-6.',
    rating: '5.00',
    url: dis3,
  },
  {
    name: 'Avocados 2 Units',
    description: 'Avocados are a rich source of vitamins C, E, K, and B-6.',
    rating: '5.00',
    url: dis4,
  },
  {
    name: 'Avocados 2 Units',
    description: 'Avocados are a rich source of vitamins C, E, K, and B-6.',
    rating: '5.00',
    url: dis5,
  },
  {
    name: 'Avocados 2 Units',
    description: 'Avocados are a rich source of vitamins C, E, K, and B-6.',
    rating: '5.00',
    url: dis6,
  },
];
const Storelocation = [
  {
    url: location,
    address: '28C Khayaban-e-Bahria, D.H.A. Phase 4 Housing Authority, Karachi',
    mapImg: map,
  },
  {
    url: location,
    address: '28C Khayaban-e-Bahria, D.H.A. Phase 4 Housing Authority, Karachi',
    mapImg: map,
  },
];

const coupon = [
  {
    name: 'Big Sale',
    off: '10% off',
  },
  {
    name: 'Big Sale',
    off: '20% off',
  },
  {
    name: 'Big Sale',
    off: '50% off',
  },
  {
    name: 'Big Sale',
    off: '30% off',
  },
];

const dateTime = [
  {
    DayName: 'Today',
    date: '22 April',
  },
  {
    DayName: 'Tomorrow',
    date: '23 April',
  },
  {
    DayName: 'Wednesday',
    date: '24 April',
  },
  {
    DayName: 'Thursday',
    date: '25 April',
  },
  {
    DayName: 'Friday',
    date: '26 April',
  },
  {
    DayName: 'Saturday',
    date: '27 April',
  },
  {
    DayName: 'Sunday',
    date: '28 April',
  },
];
export {
  banners,
  categories,
  products,
  smabanner,
  arrproducts,
  discount,
  Storelocation,
  coupon,
  dateTime,
};
