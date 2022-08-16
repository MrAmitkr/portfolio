import { v4 as uuidv4 } from 'uuid';
import Face from '../images/Face.png';
import Uthaan from '../images/Uthaan.jpg';
import AASF from '../images/AASF.jpg';
import Aurora from '../images/Aurora.jpg';
import Algo from '../images/Algo.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Uthaan',
    desc:
      'I developed the website with few senior member and mentors and also help other in team',
    img: Uthaan,
    link: 'https://www.uthaan.org/',
  },
  {
    id: uuidv4(),
    name: 'AASF',
    desc:
      'AASF( Abhigyan Abhikaushalam Students Forum)I worked with few mentors on this website for a small span of time .',
    img: AASF,
    link: 'https://www.aasf.in/',
  },
  {
    id: uuidv4(),
    name: 'Aurora',
    desc:
      'Aurora was an cultural fest organizes by my university in 2020 and I participated in Web designing',
    img: Aurora,
    link: 'https://aurorafest.org/',
  },
  {
    id: uuidv4(),
    name: 'Algo',
    desc:
      'Algo trading was my BTECH project and I used Python to develop an trading signal generator programm which gives signal when to buy/sell.',
    img: Algo,
  },
  {
    id: uuidv4(),
    name: 'Face',
    desc:
      'A face recogization software which helps us to recognize face of the peoples and their name, age too.',
    img: Face,
  },
];

export default projects;
