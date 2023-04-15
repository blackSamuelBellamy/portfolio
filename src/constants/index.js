import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  sass,
  git,
  figma,
  bootstrap,
  pizza,
  dalle,
  tripguide,
  three,
  postgresql,
  pokemon,
  express
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Presentación",
  },
  {
    id: "work",
    title: "Estudios",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React js Frontend",
    icon: mobile,
  },
  {
    title: "Node js Backend",
    icon: backend,
  },
  {
    title: "Postgresql DataBase",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: three,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
];

const experienceHead = [
  {
  header: 'Desafio-Latam',
  title:  "Estudios"
}]

const experiences = [
  {
    title: "Introducción al desarrollo Web",
    content: "Contenidos:",
    icon: html,
    iconBg: "#383E56",
    date: "Marzo 2022 - April 2022",
    points: [
      "Etiquetas de lenguaje HTML 5 y buenas prácticas.",
      "Introducción a CSS 3 y animaciónes",
      "Sass, Bootstrap.",
      "Introduccion a GIT",
      "HTML y CSS avanzado"
    ],
    certificate:'https://desafiosdev.s3.amazonaws.com/uploads/certification/image/16753/aprobacion-modulos-cursos-b-learning-introduccion-al-desarrollo-web-g12-11417.png'
  },
  {
    title: "JavaScript para la Web",
    content: "Contenidos:",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Abril 2022 - Mayo 2022",
    points: [
      "Sintaxis Básica de JavaScript.",
      "Métodos de strings, Arrays y Objects.",
      "Manipulación del DOM.",
      "Consumo de API, Programación Asíncrona.",
    ],
    certificate: 'https://desafiosdev.s3.amazonaws.com/uploads/certification/image/18021/aprobacion-modulos-cursos-b-learning-javascript-para-la-web-g12-11417.png'
  },
  {
    title: "React Js.",
    company_name: "Contenidos:",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Junio 2022 - Agosto 2023",
    points: [
      "Introducción a React.",
      "Hooks principales, separación en componentes.",
      "Props, usecontext, redux.",
      "Consumo de REST API.",
      "Organizar componentes en carpetas",
    ],
    certificate: 'https://desafiosdev.s3.amazonaws.com/uploads/certification/image/19474/aprobacion-modulos-cursos-b-learning-react-ii-g12-11417.png'
  },
  {
    title: "Postgresql",
    content: "Contenidos:",
    icon: postgresql,
    iconBg: "#E6DEDD",
    date: "Septiembre 2022 - Octubre 2022",
    points: [
      "Fundamentos de SQL",
      "Uso de PgAdmin",
      "Agrupación de datos.",
      "Base de datos y Tablas.",
      "Funciones Avanzadas."
    ],
    certificate: 'https://desafiosdev.s3.amazonaws.com/uploads/certification/image/20378/aprobacion-modulos-cursos-b-learning-sql-g12-11417.png'
  },

  {
    title: "Node js",
    content: "Contenidos:",
    icon: nodejs,
    iconBg: "#383E56",
    date: "Enero 2022 - Marzo 2023",
    points: [
      "Modules en Node js",
      "Uso de Node Package Manager",
      "Introduccion Express js ",
      "Creación de API.",
      "JWT.",
      "CRUD de una base de datos",
      "testeo con JEST"
    ],
    certificate: 'https://desafiosdev.s3.amazonaws.com/uploads/certification/image/21438/aprobacion-modulos-cursos-b-learning-backend-con-node-y-express-g12-11417.png'
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisl tortor, auctor sit amet neque sit amet, efficitur euismod nisi..",
    name: "Sara Connor",
    designation: "CEO",
    company: "Acme",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisl tortor, auctor sit amet neque sit amet, efficitur euismod nisi.",
    name: "John Doe",
    designation: "Srum Master",
    company: "Winterfell",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisl tortor, auctor sit amet neque sit amet, efficitur euismod nisi.",
    name: "Jon Snow",
    designation: "Lord Command",
    company: "Black castle",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projectoDescripcion = [{
  text: 'Actualmente estoy Desarrollando proyectos en el área de Front sin embargo preparando trabajos más complejos para gestionarlos en el área de Back.'
}]

const projects = [
  {
    name: "Pokemon API",
    description:
      "Aplicación que permite a los usuarios buscar información detallada sobre los diferentes pokemones que existen. La aplicación se basa en una API de pokemones que se conecta a una base de datos.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "restAPI",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon,
    source_code_link: "https://react-pokemon-api-project.netlify.app",
  },
  {
    name: "Pizzería Mamma mía",
    description:
      "Emulación de un e-commerce de pizzería, cuenta con todas las funcionalidades para escoger tu pizza favorita, puedes sumar al carrito de compras y quitar a tu gusto, buen apetito!",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "https://react-pizzeria-mamma-mia.netlify.app",
  },
  {
    name: "Dall-E",
    description:
      "A través de la API de OpenAI podemos crear imágenes con simples promps a nuestro gusto y en segundos! Actualmente este sitio está en desarrollo aunque al 90% de todas las funcionalidades, la captura es real.",
    tags: [
      {
        name: "Node js",
        color: "blue-text-gradient",
      },
      {
        name: "Postgresql",
        color: "green-text-gradient",
      },
      {
        name: "React js",
        color: "pink-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/blackSamuelBellamy/DALL-E-backend",
  },
];

const about = [
  {
    encabezado: 'Introducción',
    titulo: 'Resumen',
    introduction: 'Soy un Desarrollador Full-stack Javascript, Me gusta estar constantemente aprendiendo, actualmente estoy aprendiendo React native, tengo conocimientos en React three Fiber y me apasiona el diseño 3D, mi nivel de inglés es B2, Vengo del mundo de las ventas, pero decanté por este maravilloso mundo de la promgramación'
  }
]

export { services, technologies,experienceHead, experiences, testimonials, projects, about, projectoDescripcion };