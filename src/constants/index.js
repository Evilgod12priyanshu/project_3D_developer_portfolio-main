import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";
import python from '../assets/tech/python.png';
import aws from '../assets/tech/aws.png'; // Adjust the filename and extension as needed
import cpp from '../assets/tech/cpp.png';
import linux from '../assets/tech/linux.png';
import mathematica from '../assets/tech/mathematica.png';
import matlab from '../assets/tech/matlab.png';
import panda from '../assets/tech/panda.png';
import pytorch from '../assets/tech/pytorch.png';
import tensorflow from '../assets/tech/tensorflow.png';
import usa from '../assets/company/usa.png';
 // Adjust the path as needed


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "AI/ML Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Entrepreneur",
    icon: creator,
  },
];

const technologies = [
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "pytorch",
    icon: pytorch,
  },
  {
    name: "panda",
    icon: panda,
  },
  {
    name: "matlab",
    icon: matlab,
  },
  {
    name: "mathematica",
    icon: mathematica,
  },
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Software Eng. Intern - AI |LLM",
    company_name: "Catalyst Management Services",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "Developed a LangChain-aided semantic search engine, enhancing data retrieval by 15% in climate and healthcare sectors",
      "Designed a precise chat system using React.js and an automated document classifier with Vector and LangChain for analyst queries",
      "• Deployed the Dockerized Flask app on AWS, integrated MongoDB with VectorDB, and ensured continuous monitoring with no data duplicates.",
    ],
  },
  {
    title: "Research Assistant- Data Scienc",
    company_name: "University of Wisconsin Madison",
    icon: usa,
    iconBg: "#E6DEDD",
    date: "May 2023 - August 2023",
    points: [
      "Under Prof. John Shutske’s mentorship, engineered predictive models utilizing LiDAR AND machine learning algorithms on AWS, improving the accuracy of safety risk assessments and leading to a 15% reduction in workplace incidents.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed chatbot, integrated Large Language Models for real-time, context-aware safety updates, improving response.",
    ],
  },
  {
    title: "Co-founder",
    company_name: "Epiassist",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2022 - Mar 2023",
    points: [
      "Lead a team to develop anomaly detection deep learning algorithm for detecting epileptic seizures from physiological data via our smart band.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implemented ETL pipeline, Agile methodologies, and CI/CD for product development and deployment on AWS",
    ],
  },
  {
    title: "Research Intern",
    company_name: "Indian Institute of Information Technology",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - June 2021",
    points: [
      "DCreated an ML-driven collar for dairy cattle health monitoring, focusing on activity analysis and reproductive healthpredictive modeling. Implemented an end-to-end ML pipeline and managed data and model drift.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      "Deployed the model on GCP and integrated it with a Python and Flask-based REST API for real-time health analysis.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Machine Learning for Genre Classification in Music Streaming",
    description:
      "Spearheaded data optimization using PCA after meticulous preprocessing, elevating Decision Trees and Logistic Regressionmodels to advanced accuracy levels for genre classification",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AnMol12499/Musicdata-Streaming-Pipeline",
  },
  {
    name: "Food to Recipes Retrieval System",
    description:
      "Employed Hierarchical LSTM with self-supervised loss, enhancing text-image mapping accuracy by 25%in a dataset of over 1M recipes",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AnMol12499/FoodImage-to-Recipe-Retrievel/tree/main",
  },
  {
    name: "CropAI - Precision Agriculture Enhancement",
    description:
      "Developed a 99% accurate RandomForest model for real-time crop and fertilizer recommendations, validated against SVM,XGBoost, and Naive Bayes, utilizing complex soil and weather data",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AnMol12499/CropcareAI/tree/main",
  },
];

export { services, technologies, experiences, testimonials, projects };
