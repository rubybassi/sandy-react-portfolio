import sandyPic from "./images/me.png";
import sanayaPic from "./images/sunaya.png";
import notePic from "./images/note-taker.png";
import teamGenPic from "./images/team-generator.png";
import readmePc from "./images/readme.png";
import spaceDashPic from "./images/space-dash-small.png";
import weatherPic from "./images/weather-small.png";
import passwordPic from "./images/password-small.png";
import pixel from "./images/pixel-me.jpg";
import books from "./images/google-books.png";
import glowgo from "./images/glowgo.png";

const user = {
  name: "Sandeep Ruby Bassi",
  profilePic: sandyPic,
  avatar: pixel,
  jobTitle: "Fullstack Developer",
  altTag: "woman taking selfy in Jeruselam",
  email: "thecodingfiles@gmail.com",
  mobile: "07939 508281",
  github: "rubybassi",
  linkedin: "https://www.linkedin.com/in/sandeep-bassi-84148142/",
  p1: "Hi, I'm Sandy – a junior fullstack web developer.",
  p2:
    "I'm currently on an exciting journey with the University of Birmingham Bootcamp and i'm loving every minute of it!",
  p3:
    "My passion for coding has comes from my love of problem solving and design - the joy in that moment when i find a solution to something that's been bugging me, whether it's working on spreadsheets in my day job as a Marketing Manager or creating something from scratch such as arts and craft.",
  p4:
    "I look forward to building websites and applications that can address real-world problems. If you're looking for professional, junior fullstack developer, let's connect.",
};

const portfolios = [
  {
    id: 9,
    image: glowgo,
    altTag: "preview of glowgo app",
    language: "JavaScript",
    name: "Glowgo",
    description:
      "A clean, stylish, responsive MERN eCommerce web store.",
    link1: "https://glowgo.herokuapp.com/",
    link1BtnName: "Heroku page",
    link2: "https://github.com/rubybassi/glowgo-store",
    link2BtnName: "Github repo",
  },
  {
    id: 8,
    image: books,
    altTag: "preview of google books app",
    language: "HTML",
    name: "Show Me the Books",
    description:
      "A simple book search UI MERN application using Google Books API.",
    link1: "https://showmethebooksapp.herokuapp.com/",
    link1BtnName: "Heroku page",
    link2: "https://github.com/rubybassi/show-me-the-books",
    link2BtnName: "Github repo",
  },
  {
    id: 1,
    image: sanayaPic,
    altTag: "preview of sanaya app",
    language: "HTML",
    name: "Sanaya",
    description:
      "Group project: a fullstack CRUD application designed to bring more mindfulness into your daily life.",
    link1: "https://mysanaya.herokuapp.com/",
    link1BtnName: "Heroku page",
    link2: "https://github.com/rubybassi/sanaya",
    link2BtnName: "Github repo",
  },
  {
    id: 2,
    image: notePic,
    altTag: "preview of Handy Note Take app",
    language: "HTML",
    name: "Handy Note Taker",
    description:
      "Note taking app that can be used to write, save, and delete notes built using node express.",
    link1: "https://handy-note-taker-express.herokuapp.com/",
    link1BtnName: "Heroku page",
    link2: "https://github.com/rubybassi/handy-note-taker",
    link2BtnName: "Github repo",
  },
  {
    id: 3,
    image: teamGenPic,
    altTag: "preview of My Team Generator app",
    language: "HTML",
    name: "My Team Generator",
    description:
      "A Node CLI that takes in information about employees and generates a dynamic HTML webpage.",
    link1: "https://www.youtube.com/watch?v=nbFUqCOI3fQ&feature=youtu.be",
    link1BtnName: "YouTube demo",
    link2: "https://github.com/rubybassi/my-team-generato",
    link2BtnName: "Github repo",
  },
  {
    id: 4,
    image: readmePc,
    altTag: "preview of Handy README Generator app",
    language: "HTML",
    name: "Handy README Generator",
    description:
      "A Node CLI that dynamically generates a professional README.md file from a user's input using the Inquirer package.",
    link1: "https://www.youtube.com/watch?v=M6oav3l6Iko&feature=youtu.be",
    link1BtnName: "YouTube demo",
    link2: "https://github.com/rubybassi/handy-README-generator",
    link2BtnName: "Github repo",
  },
  {
    id: 5,
    image: spaceDashPic,
    altTag: "preview of SPACE-DASH app",
    language: "HTML",
    name: "SPACE-DASH",
    description:
      "Project one (group): a fun and interactive space app for young learners built using five APIs including NASA and Mapbox.",
    link1: "https://rubybassi.github.io/SPACE-DASH/",
    link1BtnName: "Github pages",
    link2: "https://github.com/rubybassi/SPACE-DASH",
    link2BtnName: "Github repo",
  },
  {
    id: 6,
    image: weatherPic,
    altTag: "preview of Weather Dashboard app",
    language: "HTML",
    name: "Weather Dashboard",
    description:
      "A must-have dynamic weather dashboard utilising OpenWeatherMap API and built with jQuery, HTML and Bootstrap.",
    link1: "https://rubybassi.github.io/show-me-the-weather-app/",
    link1BtnName: "Github pages",
    link2: "https://github.com/rubybassi/show-me-the-weather-app",
    link2BtnName: "Github repo",
  },
  {
    id: 7,
    image: passwordPic,
    altTag: "preview of Password Generator app",
    language: "HTML",
    name: "Password Generator",
    description:
      "A handy random password generator built using JavaScript, CSS and HTML to create a random password generator.",
    link1: "https://rubybassi.github.io/cool-password-generator/",
    link1BtnName: "Github pages",
    link2: "https://github.com/rubybassi/cool-password-generator",
    link2BtnName: "Github repo",
  },
];

export { user, portfolios };
