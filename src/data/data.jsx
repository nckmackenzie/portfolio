import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineApi,
  AiOutlineMail,
  AiOutlineFileProtect,
} from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { SiFrontendmentor } from 'react-icons/si';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { FcSupport } from 'react-icons/fc';
import { CiDesktop } from 'react-icons/ci';
import { TiSpannerOutline } from 'react-icons/ti';
import {
  BsCodeSlash,
  BsMap,
  BsPhone,
  BsChatRightQuote,
  BsTelephoneInbound,
} from 'react-icons/bs';
import html5 from '../assets/html5_icon.svg';
import css3 from '../assets/css3_icon.svg';
import js from '../assets/js_icon.svg';
import react from '../assets/react.svg';
import tailwindcss from '../assets/tailwind_icon.svg';
import bootstrap4 from '../assets/bootstrap_4_icon.svg';
import git from '../assets/git_icon.svg';
import php from '../assets/php_icon.svg';
import nodejs from '../assets/nodejs_icon.svg';
import csharp from '../assets/csharp_icon.svg';

export const links = [
  {
    name: 'Tech Stack',
    to: '#techstack',
    icon: <BiCodeAlt size={24} />,
  },
  {
    name: 'Services',
    to: '#services',
    icon: <TiSpannerOutline size={24} />,
  },
  {
    name: 'Projects',
    to: '#projects',
    icon: <AiOutlineFileProtect size={24} />,
  },
  {
    name: 'Testimonials',
    to: '#testimonials',
    icon: <BsChatRightQuote size={24} />,
  },
  {
    name: 'Contact',
    to: '#contact',
    icon: <BsTelephoneInbound size={24} />,
  },
];

export const projects = [
  {
    project: 'Sacco Management',
    to: 'sacco-management',
    description:
      'A computerized system that is used to manage the operations of a Savings and Credit Cooperative Organization (SACCO). These operations includes,Member information management,Loan management,savings management, ensure sensitive information is protected and provide with all relevant management and financial reports.',
    clients: ['Niinue Nikuinue Sacco'],
    type: 'Desktop App',
    link: null,
    languages: ['VB.NET', 'SQL Server'],
    imageUrl: {
      small: 'https://i.postimg.cc/Y2Gjcm3h/Sacco-Management.jpg',
      medium: 'https://i.postimg.cc/B6mWC87F/sacco-management.jpg',
      large: 'https://i.postimg.cc/BZD2GyZW/Sacco-Management.jpg',
    },
    features: [
      'Members deposit management.',
      'Ability to create different loan products.',
      'Loan applications.',
      'Loan approval/rejection',
      'Capture guarantors.',
      'Accounting.',
      'Financial and management reporting.',
      'Bulk SMS.',
      'Data security through secured login and data encryption.',
      'Export report to various formats.',
      'Database backup and restore.',
    ],
    yearDeveloped: 2019,
    clientReviews: [
      {
        review:
          'The project was completed on the specified timeline and there was a good communication with the developer as he interacted with us to get to know more on how our sacco works so at to give us the best solution. He delivered what we were looking for and his support has been great even after development.',
        name: 'Peter Kuria',
        position: 'Vice Chairman',
        contact: '0723668167',
        rating: 4,
        avatar: 'https://i.postimg.cc/hjnP97Pz/peter.jpg',
      },
    ],
  },
  {
    project: 'School Management',
    to: 'school-management',
    description:
      'An application to help with school running operations including student management,fees management,send fee balances reminders to parents/guardians and provide all relevant reports on fee payments and collections and other financial reports.',
    clients: ['PCEA ST Paul Education Center', 'Tilta Golden Heart'],
    type: 'Desktop App',
    link: null,
    languages: ['VB.NET', 'SQL Server'],
    imageUrl: {
      small: 'https://i.postimg.cc/SNjTw1RH/school-management.jpg',
      medium: 'https://i.postimg.cc/YSct4mTq/school-management.jpg',
      large: 'https://i.postimg.cc/BQWpVZWP/school-management.jpg',
    },
    features: [
      'Student information management.',
      'Tuition payments and fee collections.',
      'Financial management.',
      'Data security through secured login and data encryption.',
      'Financial and management reporting.',
      'Bulk SMS.',
      'Export report to various formats',
      'Database backup and restore.',
    ],
    yearDeveloped: 2019,
    clientReviews: [
      {
        review:
          'The system really helped our school in accurately manage school fees for all students and other financial aspects of our school. Its simple to use and a very good product.',
        name: 'Michael Gitau',
        position: 'Bursar - St Paul Education center',
        contact: '0729037944',
        rating: 5,
        avatar: 'https://i.postimg.cc/FHhMggjQ/gitau.jpg',
      },
      {
        review:
          'We had a good experience working with the developer. His pricing was fair and customized the application to suite the needs of our institution. Very user friendly application.',
        name: 'Isaac Waweru',
        position: 'Co-founder - Tilta Golden Heart',
        contact: '0722659833',
        rating: 4,
        avatar: 'https://i.postimg.cc/WzDKz5LM/isaac.png',
      },
    ],
  },
  {
    project: 'Property Management',
    to: 'property-management',
    description:
      'A system that helps in property management operations including member management,project and unit management,selling of units,collection of shares,deposits and unit payments, member statement generation,bank reconcilliation and provide all relevant financial and management reports.',
    clients: ['PCEA Housing Cooperative Housing Ltd'],
    type: 'Desktop App',
    link: null,
    languages: ['VB.NET', 'SQL Server'],
    imageUrl: {
      small: 'https://i.postimg.cc/tg2xPxVP/property-management.jpg',
      medium: 'https://i.postimg.cc/PxSQt7Mg/property-management.jpg',
      large: 'https://i.postimg.cc/hG5V6mPn/property-management.jpg',
    },
    features: [
      'Member information management.',
      'Ability to create different projects and their respective units.',
      'Ability to reserve units for specific members.',
      'Deposit,shares,unit payments and registration fees collections.',
      'Ability to send member receipts and statements through email.',
      'Vendor bill creation,payments and tracking.',
      'Income,expenses and petty cash handling.',
      'Data security through secured login and data encryption and user rights.',
      'Financial and management reporting.',
      'Export report to various formats',
      'Communication tools through email and SMS.',
      'Database backup and restore.',
    ],
    yearDeveloped: 2018,
    clientReviews: [
      {
        review:
          'Nick delivered a great product that met all our requirements for a very fair price. His support is excellent and any more features we require are always added in the shortest time possible. Very professional work and developer.',
        name: 'Benjamin Harun',
        position: 'Secretary - PCEA Housing Cooperative Housing Ltd',
        contact: '0724449179',
        rating: 4,
        avatar: 'https://i.postimg.cc/DZ5J0cdy/benjamin.jpg',
      },
    ],
  },
  {
    project: 'Church Management',
    to: 'church-management',
    description:
      'A desktop application that provides a complete church management solution. It includes membership tracking, envelope collection processing, expenditure and helps to address every aspect of church finances and church membership activities.',
    clients: ['PCEA Macedonia Church'],
    type: 'Desktop App',
    link: null,
    languages: ['C#', 'MS-Access'],
    imageUrl: {
      small: 'https://i.postimg.cc/hjfyJxtZ/church-management-desktop.jpg',
      medium: 'https://i.postimg.cc/BbPT3Bns/church-management-desktop.jpg',
      large: 'https://i.postimg.cc/j2BhnkFL/church-management-desktop.jpg',
    },
    features: [
      'Member information management.',
      'Church school members management.',
      'Easy management of groups and ministry teams.',
      'Attendance tracking of services and events.',
      'Financial management.',
      'Role based access.',
      'Member and financial reports.',
      'Export report to various formats',
      'Database backup and restore.',
    ],
    yearDeveloped: 2016,
    clientReviews: [
      {
        review:
          'This project was efficiently done with excellent reporting that made the work of our Registrar and Treasurer way easier that was. He went an extra mile and added features we had not thought of that came to be very useful for us. I highly recommend him and would definetly recommend and work with him in future.',
        name: 'Isaac Waweru',
        position: 'Chairman - PCEA ',
        contact: '0722659833',
        rating: 4,
        avatar: 'https://i.postimg.cc/WzDKz5LM/isaac.png',
      },
    ],
  },
  {
    project: 'Church Management - Web',
    to: 'church-management-web',
    description:
      'A web based application that provides a complete church management solution. It includes membership tracking, envelope collection processing, expenditure and helps to address every aspect of church finances and church membership activities and offers ability to communicate with church members through SMSs',
    clients: [
      'PCEA Kenyatta Rd Parish - 3 Congregations',
      'PCEA Juja Farm Parish - 7 Congregations',
    ],
    type: 'Web App',
    link: null,
    languages: ['HTML', 'CSS', 'Bootstrap 4', 'JQuery', 'MySql', 'PHP'],
    imageUrl: {
      small: 'https://i.postimg.cc/d0sk9Ppg/church-management-web.jpg',
      medium: 'https://i.postimg.cc/wvcqv06H/church-management-web.jpg',
      large: 'https://i.postimg.cc/tCFKHY4Q/church-management-web.jpg',
    },
    features: [
      'Member information management.',
      'Church school members management.',
      'Easy management of groups and ministry teams.',
      'Attendance tracking of services and events.',
      'Congregation and Parish based views and functionalities.',
      'Responsive design.',
      'Communication tools - Bulk SMS.',
      'Allows for tracking of donations, expenses, and other financial transactions.',
      'Role based and user right access.',
      'Member and financial reports.',
      'Export report to various formats',
      'Data security through secured congregation-based login and data encryption.',
      'Database backup and restore.',
    ],
    yearDeveloped: 2021,
    clientReviews: [
      {
        review:
          'Great job and timely delivery of the application. Training was well done and all customizations we requested for implemented.',
        name: 'Charles Anthony Mwangi',
        position: 'Session Clerk - PCEA Juja Farm Parish',
        contact: '0721973368',
        rating: 4,
        avatar: 'https://i.postimg.cc/pTPC3qL2/anthony.jpg',
      },
      {
        review:
          'We worked hand in hand with the developer before the application was deployed for use and he did his best to ensure a seemless transition to the new application. All changes or bugs we reported were taken care of instantly. His communication was excellent through out the development phase and even after.',
        name: 'Elder Duncan',
        position: 'Session Clerk - PCEA Kenyatta Rd Parish',
        contact: '0722674213',
        rating: 5,
        avatar: 'https://i.postimg.cc/8kjnRksw/dancun.jpg',
      },
    ],
  },
  {
    project: 'Web Based POS',
    to: 'web-based-pos',
    description:
      'An application for retail that allows business to process payments,track inventory levels,manage customers,track sales and generate various reports on stock movement,supplier payments and their respective balances,sales reports and many more.',
    clients: ['Simtech Office Solutions', 'Hastings Tyres'],
    type: 'Web App',
    link: null,
    languages: ['HTML', 'CSS', 'Bootstrap 4', 'PHP', 'Mysql', 'Jquery'],
    imageUrl: {
      small: 'https://i.postimg.cc/nzPksbnf/pos.jpg',
      medium: 'https://i.postimg.cc/Xvg1YzZn/pos.jpg',
      large: 'https://i.postimg.cc/fLBPBrZ8/pos.jpg',
    },
    features: [
      'Responsive design.',
      'Easy tracking of product inventory levels, reordering of stock, and management of product pricing.',
      'Ability to login to different companies/stores and access only data for specific store.',
      'Data security through secured login and data encryption.',
      'Allows for tracking of customer information, including purchase history and contact details.',
      'Allows for tracking of sales by item,and by time period.',
      'Expenses capturing.',
      'Dashboard data analytics.',
      'Allows for generating of various reports, such as sales reports, inventory reports, and customer payment reports.',
      'Export report to various formats',
      'Database backup and restore.',
    ],
    yearDeveloped: 2021,
    clientReviews: [
      {
        review:
          'What was impressive about the developer was how quickly he was able to develop this application for us. We had a timeline and he was able to deliver before the date we had set and the quality of the application was as we expected. Worth every penny we paid for.',
        name: 'Shabaan Kinyua ',
        position: 'Owner - Hastings Tyres',
        contact: '0725447116',
        rating: 5,
        avatar: 'https://i.postimg.cc/13Pkrxkt/shabz.jpg',
      },
    ],
  },
  {
    project: 'Customized Web App',
    to: 'customized-web-app',
    description:
      'A customized web app that will help the institution manage its operations such as Exam creation,marking and assigning of exam points in different categories and studies,track inventory movement,handle sales,fee structure creation by class and semister,fee collections,banking transactions and reconcilliation and generate all respective reports on all transactions.',
    clients: ['PCEA Theology By Extension'],
    type: 'Web App',
    link: null,
    languages: ['HTML', 'CSS', 'Bootstrap 5', 'Javascript', 'PHP', 'MySql'],
    imageUrl: {
      small: 'https://i.postimg.cc/nh8bgNbz/tee.jpg',
      medium: 'https://i.postimg.cc/y6PywZMS/tee.jpg',
      large: 'https://i.postimg.cc/Twkhcfsh/tee.jpg',
    },
    features: [
      'Student information management.',
      'Ability to login to different centers and access only data for logged in center.',
      'Track user activity through user logs.',
      'Easy tracking of product inventory levels, reordering of stock, and management of product pricing.',
      'Sales.',
      'Fees payments and collections.',
      'Exam managament and marks capture.',
      'Allows for tracking of supplier information, including purchase history and contact details.',
      'Allows for tracking of sales by item,and by time period.',
      'Allows for generating of various reports, such as sales reports, inventory reports, and supplier payment reports.',
      'Role based and user right access.',
      'Export report to various formats',
      'Database backup and restore.',
    ],
    yearDeveloped: 2022,
    clientReviews: [
      {
        review:
          'Job well done and at an affordable rate. The developer was patient with the team during the training sessions and made follow ups to ensure all users were comfortable and happy with the application.',
        name: 'Rev John Gatu',
        position: 'Director - PCEA Theology By Extension',
        contact: '0720247656  ',
        rating: 3,
        avatar: 'https://i.postimg.cc/BbBddMDs/gatu.jpg',
      },
    ],
  },
  {
    project: 'Water Billing',
    to: 'water-billing',
    description:
      'An application that is used to handle all water billing operations like capturing of meter readings per customers,collection of bill payments,sending of bill breakdown to each customer at the end of every month,generate customer statements,handle water sales,expense capturing and generation of all their respective reports.',
    clients: ['PCEA ST Paul Water Project'],
    type: 'Desktop App',
    link: null,
    languages: ['C#', 'MySql'],
    imageUrl: {
      small: 'https://i.postimg.cc/Qd7PwKP5/borehole.jpg',
      medium: 'https://i.postimg.cc/52ZJFVc5/borehole.jpg',
      large: 'https://i.postimg.cc/nc3crgcT/borehole.jpg',
    },
    features: [
      'Customer information management.',
      'User friendsly interface.',
      'Water Billing and payment collections.',
      'Send customer bill breakdown through SMS.',
      'Management of unit pricing.',
      'Income and expense tracking.',
      'Generation of various reports.',
      'Data security through secured login and data encryption.',
      'Export report to various formats',
      'Database backup and restore.',
    ],
    yearDeveloped: 2021,
    clientReviews: [
      {
        review:
          'A very user friendly application. Everything we asked for was completed went above and beyond as if the project was their own personal project. ',
        name: 'Kamau Karigo',
        position: 'Treasurer - PCEA ST Paul Water Project',
        contact: '0722 832621',
        rating: 4,
        avatar: 'https://i.postimg.cc/KYYBLzQ5/kamau.jpg',
      },
    ],
  },
  {
    project: 'PKL Website',
    to: 'pkl-website',
    description:
      'The official website for Panesars Kenya Ltd that showcases its bespoke furniture and joinery,the various services offered by the company,image gallery of various bespoke furnitures in their respective rooms, information on the company history and its values,company contact information and its location on the map and many more.',
    clients: ['Panesars Kenya Ltd'],
    type: 'Web App',
    link: 'https://panesar.co.ke/',
    languages: ['HTML', 'CSS', 'Javascript'],
    imageUrl: {
      small: 'https://i.postimg.cc/fyvQZx3J/pkl-web.jpg',
      medium: 'https://i.postimg.cc/7hPw5srg/pkl-web.jpg',
      large: 'https://i.postimg.cc/wMYF2Zjm/pkl-web.jpg',
    },
    features: [
      'User friendly navigation.',
      'Show cases the various products and services offered by the company.',
      'Gallery of different rooms with bespoke items offered by PKL.',
      'Filter products based on their categories.',
      'Responsive and elegant design.',
      'Portal to manage products.',
      'Google analtytics embedded.',
      'Optimized SEO.',
      'Contact and social media integration.',
    ],
    yearDeveloped: 2021,
    clientReviews: [
      {
        review:
          'Hired to create a website with mostly stock images and information. Delivered before due date. Product met expectorations and he guaranteed an additional 60 days of editing, which is nice. I would recommend hiring and would consider hiring again for a future project.',
        name: 'Vir Panesar',
        position: 'COO - Panesars Kenya Ltd',
        contact: '0725 447895',
        rating: 4,
        avatar: 'https://i.postimg.cc/CKtBq4RF/vir.jpg',
      },
    ],
  },
  {
    project: 'PHCSL Website',
    to: 'phcsl-website',
    description:
      'The official website for PCEA Housing Co-operative Society Ltd that showcases its active projects,number of unsold units remaining for each active projects, information on the company history and its values,membership information, company contact information and its location on the map and many more.',
    clients: ['PCEA Housing Cooperative Housing Ltd'],
    type: 'Web App',
    link: 'https://pceahousingltd.co.ke/',
    languages: ['HTML', 'CSS', 'Javascript', 'PHP'],
    imageUrl: {
      small: 'https://i.postimg.cc/Hs5bYDyy/phcsl.jpg',
      medium: 'https://i.postimg.cc/tgd6hh5C/phcsl.jpg',
      large: 'https://i.postimg.cc/Qt4rPyb4/phcsl.jpg',
    },
    features: [
      'User friendly navigation.',
      'Show cases the various projects offered by the company.',
      'Responsive and elegant design.',
      'Fast loading time.',
      'Portal to manage projects.',
      'Google analtytics embedded.',
      'Optimized SEO.',
      'Contact and social media integration.',
    ],
    yearDeveloped: 2020,
    clientReviews: [
      {
        review:
          'Their service is wonderful, created a beautiful website for me, and was able to answer all of my questions. 5 stars for his services, will be using them again in the future',
        name: 'Benjamin Harun',
        position: 'Secretary - PCEA Housing Cooperative Housing Ltd',
        contact: '0724449179',
        rating: 4,
        avatar: 'https://i.postimg.cc/DZ5J0cdy/benjamin.jpg',
      },
    ],
  },
  {
    project: 'Panesar Center Landing Page',
    to: 'panesar-center-landing-page',
    description:
      'The official landing for Panesar Centre that seeks to give potential tenants a brief overview of the building and give them the ability to reach out for enquires on leasing. It includes an image gallery of various office spaces, contact information and its location on the map.',
    clients: ['Panesar Limited'],
    type: 'Web App',
    link: 'https://panesar-limited.netlify.app/',
    languages: ['HTML', 'CSS', 'Tailwindcss', 'Javascript'],
    imageUrl: {
      small: 'https://i.postimg.cc/CMb1Pjnj/pl-landing-page.jpg',
      medium: 'https://i.postimg.cc/yYVZ0fpJ/pl-landing-page.jpg',
      large: 'https://i.postimg.cc/2SdvWsrB/pl-landing-page.jpg',
    },
    features: [
      'User friendly navigation.',
      'Responsive and elegant design.',
      'Fast loading time.',
      'Image gallery.',
      'Portal to manage projects.',
      'Google analtytics embedded.',
      'Optimized SEO.',
      'Contact and social media integration.',
    ],
    yearDeveloped: 2023,
    clientReviews: [
      {
        review:
          'Really nice guy with great skills that gave me a good outcome. Communication went really well, and what i liked the most was the their ability to generate great ideas. Thumbs up many times! ',
        name: 'Lilian Ndirangu',
        position: 'Property Manager - Panesar Ltd',
        contact: '0110927139 ',
        rating: 5,
        avatar: 'https://i.postimg.cc/7PX4tZNz/lilian.jpg',
      },
    ],
  },
  {
    project: 'Shelves & Lockers',
    to: 'shelves-lockers',
    description:
      'An appliction that simplies the complex shelf renting and management of products by its particular customer and shelf,sale of these products,inventory tracking by product and by customer, collection of rent paid for the shelves,tracking of balances for shelves by period, expense capturing and generation of all respective reports.',
    clients: ['Style Africana'],
    type: 'Desktop App',
    link: null,
    languages: ['VB.Net', 'MS Access'],
    imageUrl: {
      small: 'https://i.postimg.cc/FRm74Zq5/shelves-lockers.jpg',
      medium: 'https://i.postimg.cc/BvFKstnD/shelves-lockers.jpg',
      large: 'https://i.postimg.cc/T1fmtGGb/shelves-lockers.jpg',
    },
    features: [
      'Customer information management.',
      'Ability to create and manage stalls and shelves.',
      'User friendly interface.',
      'Renting of shelves to customers.',
      'Easy tracking of product inventory levels, reordering of stock, and management of product pricing.',
      'Stock reconcilliation by client.',
      'Revenue and expense tracking.',
      'Allow partial payments for shelves.',
      'List all shelves with balances.',
      'Allows for generating of various reports, such as sales reports, inventory reports, and customer payment reports.',
      'Export report to various formats',
      'Data security through secured login and data encryption.',
      'Database backup and restore.',
    ],
    yearDeveloped: 2019,
    clientReviews: [
      {
        review:
          'This project turned out to be more complex in certain ways then first anticipated but we still pushed through, and through strong communication we got a great positive result. I like how they are always willing to jump on the phone if we need to figure something out, which I find can be often needed in creative projects like this.',
        name: 'Rahab Mbuthia.',
        position: 'Founder - Style Africana',
        contact: '0725224278',
        rating: 4,
        avatar: 'https://i.postimg.cc/Gpn6hWQr/rahab.jpg',
      },
    ],
  },
];

export const skills = [
  { skill: 'HTML', level: 90 },
  { skill: 'CSS', level: 70 },
  { skill: 'Js', level: 80 },
  { skill: 'React', level: 85 },
  { skill: 'NextJs', level: 75 },
  { skill: 'PHP', level: 85 },
  { skill: 'SQL', level: 80 },
];

export const extraSkills = [
  'Bootstrap',
  'Tailwindcss',
  'Webpack/Parcel',
  'Git',
  'Material UI',
];

export const services = [
  {
    name: 'Web Development',
    icon: <BsCodeSlash size={48} />,
    description: 'Web Apps,Websites,Blogs',
  },
  {
    name: 'Desktop Application',
    icon: <CiDesktop size={48} />,
    description: 'Customized Apps,POS',
  },
  {
    name: 'API Programming',
    icon: <AiOutlineApi size={48} />,
    description: 'Secure Restful API',
  },
  {
    name: 'Digital Marketing',
    icon: <HiOutlineSpeakerphone size={48} />,
    description: 'SEO,Social Media Marketing',
  },
];

export const followMe = [
  {
    name: 'github',
    link: 'https://github.com/nckmackenzie',
    icon: <AiOutlineGithub size={24} />,
  },
  {
    name: 'twitter',
    link: 'https://twitter/nicmackenzie',
    icon: <AiOutlineTwitter size={24} />,
  },
  {
    name: 'linkedin',
    link: 'https://github.com/nckmackenzie',
    icon: <AiOutlineLinkedin size={24} />,
  },
  {
    name: 'frontend mentor',
    link: 'https://www.frontendmentor.io/profile/nckmackenzie',
    icon: <SiFrontendmentor size={24} />,
  },
];

export const myTechStacks = [
  { stack: 'html5', icon: html5 },
  { stack: 'css3', icon: css3 },
  { stack: 'js', icon: js },
  { stack: 'react', icon: react },
  { stack: 'tailwindcss', icon: tailwindcss },
  { stack: 'bootstrap', icon: bootstrap4 },
  { stack: 'git', icon: git },
  { stack: 'php', icon: php },
  { stack: 'nodejs', icon: nodejs },
  { stack: 'csharp', icon: csharp },
];

export const contactInfo = [
  {
    id: 1,
    icon: <BsMap size={16} />,
    details: [
      { name: 'Country', value: 'Kenya' },
      { name: 'City', value: 'Nairobi' },
    ],
  },
  {
    id: 2,
    icon: <AiOutlineMail size={16} />,
    details: [
      { name: 'Email', value: 'nicmackenzie@live.com' },
      { name: 'Twitter', value: '@nckmackenzie' },
    ],
  },
  {
    id: 3,
    icon: <BsPhone size={16} />,
    details: [
      { name: 'Phone', value: '+254724466628' },
      { name: 'WhatsApp', value: '+254724466628' },
    ],
  },
];
