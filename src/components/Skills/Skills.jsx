const Skills = (props) => {
  return (
    <div className="h-full w-full">
      <img
        className="w-20 mx-auto my-auto grayscale"
        src={props.image}
        alt={props.textAlt}
      />
      <p className="text-center text-xs md:text-base lg:text-xl text-gray-400 monospace">
        {props.text}
      </p>
    </div>
  );
};

export default Skills;
