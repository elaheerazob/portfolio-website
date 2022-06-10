//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiFacebook
} from 'react-icons/fi';



// projects images
import Project1 from './assets/img/projects/p1.png';
import Project2 from './assets/img/projects/p2.png';
import Project3 from './assets/img/projects/p3.png';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  /* {
    name: 'testimonials',
    href: 'testimonials',
  }, */
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/elaheerazob/',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/elaheerazob',
  },
  {
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/elaheerazob',
  },
  
];


// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Car-manufacturer',
    category: 'This is a full-stack manufacturing website. This app users can create account,edit profile, give order with manage orders and review',
    live : 'https://car-manufacturer-b6451.web.app/',
    code : 'https://github.com/elaheerazob/car-manufacturer',
    details : 
    'This is a full-stack manufacturing website. This app users can create account,edit profile, give order with manage orders and review.  This app admin add new products, remove existing products,update Shipping Status, and make new admin to any user.  This project we used React JS, React Router, React Firebase Hook, Tailwind, Firebase, Node Js, MongoDB, Heroku.'
  },
  {
    id: '2',
    image: Project2,
    name: 'Car-Bazar',
    category: 'Warehouse management website. Users need to log in via Email and Password or Google',
    live: 'https://car-bazar-20610.web.app/',
    code: 'https://github.com/elaheerazob/car-bazar-',
    details : 
      ''
  },
  {
    id: '3',
    image: Project3,
    name: 'Wedding Photography',
    category: 'This is an Weeding Photographer Service Provider website. Users need to log in via Email and Password or Google',
    live: 'https://photographer-d0421.web.app/',
    code: 'https://github.com/elaheerazob/Wedding-Photography',
    details : ''
  }
  /* {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'branding',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  }, */
];

// projects
/* export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
]; */

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Web development is the work involved in developing a website for the Internet or an intranet.Web development can range from developing a simple single static page of plain text to complex web applications.',
  },
  /* {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  }, */
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at ridwanelahee282@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: '68/5 Panthapath, Dhaka',
    description: 'Serving clients worldwide',
  },
];
