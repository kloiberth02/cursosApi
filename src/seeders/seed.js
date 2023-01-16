const Courses = require("../models/courses.model");
const Users = require("../models/users.model");
const db = require("../utils/database");
const UsersCourses = require("../models/usersCousers.model");
const Categories = require("../models/categories.model");
const Videos = require("../models/videos.model");

const users = [
  {
    firstName: "kloiberth",
    lastName: "garcia",
    email: "kloiber@gmail.com",
    password: "1234",
  },
  {
    firstName: "jose",
    lastName: "garcia",
    email: "jose@gmail.com",
    password: "1234",
  },
  {
    firstName: "yai",
    lastName: "nuñez",
    email: "yaisneth@gmail.com",
    password: "1234",
  },
  {
    firstName: "daniel",
    lastName: "nuñez",
    email: "danieldaniel@gmail.com",
    password: "1234",
  },
];

const courses = [
  {
    title: "aprendiendo python", // 1
    description: "de 0 a experto",
    instructor: "mayelis torres"
  },
  {
    title: "aprendiendo JAVA", // 2
    description: "de 0 a experto",
    instructor: "ruben nuñez"
  },
  {
    title: "como dibujar", // 3
    description: "",
    instructor: "juan romero"
  },
  {
    title: "javascript avanzado", // 4
    description: "",
    instructor: "mayelis torres"
  },
  {
    title: "introduccion a la matematica", //  5
    description: "suma, resta, multiplicacion y division",
    instructor: "angel sosa"
  },
  {
    title: "diseñando una pagina", // 6
    description: "html, css, javascript",
    instructor: "mayelis torres"
  }
]

const usersCoursers = [
  {userId: 1, courseId: 2},
  {userId: 1, courseId: 6},
  {userId: 2, courseId: 3},
  {userId: 2, courseId: 4},
  {userId: 3, courseId: 1},
  {userId: 3, courseId: 5},
  {userId: 4, courseId: 2},
  {userId: 4, courseId: 6},
]

const categories = [
  {name: "teconologia", courseId: 1},
  {name: "teconologia", courseId: 2},
  {name: "teconologia", courseId: 3},
  {name: "teconologia", courseId: 4},
  {name: "teconologia", courseId: 6},
  {name: "matematicas", courseId: 5},
  {name: "teconologia", courseId: 6}
]

const videos =  [
  {title: "clase 1", url: "https://www.youtube.com/@midulive", courseId: 1},
  {title: "clase 1", url: "https://www.youtube.com/@midulive", courseId: 2},
  {title: "clase 1", url: "https://www.youtube.com/@midulive", courseId: 3},
  {title: "clase 1", url: "https://www.youtube.com/@midulive", courseId: 4},
  {title: "clase 1", url: "https://www.youtube.com/@MatematicasprofeAlex/videos", courseId: 5},
  {title: "clase 1", url: "https://www.youtube.com/@midulive", courseId: 6},

]

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando");

    users.forEach((user) => Users.create(user));

    setTimeout(() => {

      courses.forEach((course) => Courses.create(course));
    }, 150);

    setTimeout(() => {
      
      usersCoursers.forEach((uc) => UsersCourses.create(uc));
    }, 250);

    setTimeout(() => {

      categories.forEach((categorie) => Categories.create(categorie)); 
    }, 300);

    setTimeout(() => {

      videos.forEach((video) => Videos.create(video));
    }, 350)
  })
  .catch((error) => console.log(error));
