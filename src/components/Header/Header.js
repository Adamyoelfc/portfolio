import classes from "./Header.module.css";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import js from "../../assets/icons/icons8-javascript.svg";
import postgres from "../../assets/icons/icons8-postgresql.svg";
import django from "../../assets/icons/icons8-django.svg";
import python from "../../assets/icons/icons8-python.svg";
import bootstrap from "../../assets/icons/icons8-bootstrap.svg";
import react from "../../assets/icons/icons8-react-80.png";
import vue from "../../assets/icons/icons8-vue.js-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-96.png";
import github from "../../assets/icons/github.png";
import emoji from "../../assets/icons/8029063bfe493d253f8f098d38d458b0-sticker.png";
import Skills from "./Skills";

export const Header = () => {
  const skills = [
    { image: js, text: "JavaScript", textAlt: "javascript" },
    { image: postgres, text: "PonstgreSQL", textAlt: "postgres" },
    { image: django, text: "Django", textAlt: "django" },
    { image: python, text: "Python", textAlt: "python" },
    { image: bootstrap, text: "Bootstrap", textAlt: "bootstrap" },
    { image: react, text: "React", textAlt: "react" },
    { image: vue, text: "Vue", textAlt: "vue" },
    { image: github, text: "GitHub", textAlt: "github" },
  ];

  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      <div className="justify-center p-10 h-60">
        <p
          className={`${
            classes.hi1
          } + text-gray-400 + mx-auto + text-2xl +  md:text-5xl +  lg:text-7xl + ${
            animation ? classes.animh1 : ""
          } `}
        >
          Hi my name is Adam
        </p>
        {!animation && (
          <p
            className={`${classes.hi2} + text-gray-400 + mx-auto + text-2xl + 
      md:text-5xl +  lg:text-7xl + ${classes.animh2}`}
          >
            and I'm a web developer!
          </p>
        )}
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="mx-auto my-auto animate-fadeInL">
          <p
            className="m-10 text-4xl font-extrabold text-center text-transparent monospace bg-clip-text bg-gradient-to-br from-gray-400 to-gray-800"
          >
            Skills 💪🏻
          </p>
          <div className="justify-center grid grid-cols-4">
            {skills.map((skill) => (
              <Skills
                key={skill.text}
                image={skill.image}
                text={skill.text}
                textAlt={skill.textAlt}
              />
            ))}
          </div>
        </div>
        <div className="hidden mx-auto my-auto md:block ">
          <img className="w-80 h-80 animate-fadeInR" src={emoji} alt="img" />
        </div>
      </div>
    </Fragment>
  );
};
