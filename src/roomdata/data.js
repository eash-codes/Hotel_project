//Data Modded and Generated using chat gpt 

// rooms images
import Room1Img from '../assets/1.png';
import Room1ImgLg from '../assets/1-lg.png';
import Room2Img from '../assets/2.png';
import Room2ImgLg from '../assets/2-lg.png';
import Room3Img from '../assets/3.png';
import Room3ImgLg from '../assets/3-lg.png';
// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from 'react-icons/fa';

export const roomData = [
  {
    id: 1,
    name: 'Standard Room',
    description:
      'A cozy room perfect for solo travelers or couples. Enjoy essential amenities for a comfortable stay.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
    ],
    size: 20,
    maxPerson: 2,
    price: 75,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: 'Deluxe Room',
    description:
      'Spacious and elegantly designed room with additional features for a more luxurious experience.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
    ],
    size: 40,
    maxPerson: 3,
    price: 150,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: 'Luxury Suite',
    description:
      'An opulent suite offering top-notch amenities, spacious living, and exclusive services for an indulgent stay.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 60,
    maxPerson: 4,
    price: 250,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
];
