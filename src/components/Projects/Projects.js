import Card from "./Card";
import awareimage from "../../assets/aware.png";
import foodorder from "../../assets/foodOrder.png";
import xelvatic from "../../assets/xelvatic.webp";
import arrow from '../../assets/icons/right-arrow.png'

// projects:
// xelvatic
// food-order
// aware

const projects = [
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
      "App for managing the patient’s records, two roles (doctor and patient), where the doctor can manage the patient record, schedule appointments, get notification of cancelation from the patients, and more. The patient can fill out his record and upload it. This app makes the process between patient-doctor too easy and practical.",
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
    <div id="projects" className="h-screen mt-40 snap-start">
      <div className="flex justify-center pt-10 mt-10">
        <p className="text-4xl font-extrabold text-center text-transparent monospace bg-clip-text bg-gradient-to-br from-green-400 to-yellow-800">
          Projects
        </p>
        <p className="ml-3 text-4xl">💻</p>
      </div>

      <div className="flex w-screen pt-10 mx-auto overflow-scroll snap-x snap-mandatory">
        {projects.map((project) => (
          <Card
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            skills={project.skills}
          />
        ))}
      </div>
      <div>
            <img className="w-20 pr-5 ml-auto animate-bounceRight" src={arrow} alt="arrow"/>
      </div>
    </div>
  );
};

export default Projects;
