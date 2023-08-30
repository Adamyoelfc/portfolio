import Card from "./Card";
import awareimage from "../../assets/aware.png";
import foodorder from "../../assets/foodOrder.png";
import xelvatic from "../../assets/xelvatic.webp";
import arrow from "../../assets/icons/right-arrow.png";
import memorygame from "../../assets/MemoryGame.png";
import shirtCustomizer from "../../assets/shirtCustomizer.png";
import { Fragment } from "react";

// projects:
// xelvatic
// food-order
// aware

const projects = [
  {
    image: shirtCustomizer,
    title: "Shirt Customizer",
    description:
      "A customizable 3D t-shirt model where users can change the color in real time, upload images to place on the t-shirt, such as logos or fully filled designs, and generate logos and images for the t-shirt using AI.",
    skills: ["React", "Tailwind", "Node/Express", "API", "FullStack"],
    link: 'https://shirtcustomizer.adamdev.me/'
  },
  {
    image: memorygame,
    title: "Memory Game",
    description:
      "A simple Memory Game, build with React.js, using features like useState, useContext and more...",
    skills: ["React", "Tailwind"],
    link: 'https://memorygame.adamdev.me/'
  },
  {
    image: xelvatic,
    title: "Xelvatic",
    description:
      "A magazine and images market app, there are different roles like the seller, user, admin, etc… each seller can create an account (which needs to be approved by the admin) and make public his art (images and videos). Then the user role can search, share, collect for later and buy that art… ",
    skills: [
      "Vuejs",
      "DjangoRestFramework",
      "PostgreSQL",
      "BootstrapVue",
      "Vuetify",
    ],
  },
  {
    image: awareimage,
    title: "Aware Medical",
    description:
      "App for managing the patient’s records, two roles (doctor and patient), where the doctor can manage the patient record, schedule appointments, get notification of cancelation from the patients, and more. The patient can fill out his record and upload it. This app makes the process between patient-doctor too easier and practical.",
    skills: [
      "Vuejs",
      "DjangoRestFramework",
      "PostgreSQL",
      "jQuery",
      "Vuetify",
      "BootstrapVue",
    ],
  },
  {
    image: foodorder,
    title: "Food Order",
    description:
      " A simple dummy app where the user can see the meals, add, delete, and increment the quantity from the cart and finally complete the order by filling out a form… ",
    skills: ["React", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <Fragment>
      <div className="sm:mx-5">
        <div className="flex justify-center">
          <p className="mb-5 text-4xl uppercase text-center text-white">
            Projects
          </p>
          <p className="ml-3 text-4xl">💻</p>
        </div>

        <div className="flex justify-end mt-5 sm:flex md:flex lg:hidden">
          <p className="mr-4 text-sm text-gray-400">swipe right</p>
          <img
            className="w-10 pr-5 ml-2 animate-bounceRight"
            src={arrow}
            alt="arrow"
          />
        </div>
        <div className="flex overflow-scroll snap-x snap-mandatory">
          {projects.map((project) => (
            <Card
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              skills={project.skills}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
