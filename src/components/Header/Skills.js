const Skills = (props) => {
  return (
    <div>
      <img
        className="w-20 p-3 pb-0 mx-auto my-auto"
        src={props.image}
        alt={props.textAlt}
      />
      <p className="text-center text-xs md:text-base lg:text-xl text-transparent monospace bg-clip-text bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800">
        {props.text}
      </p>
    </div>
  );
};

export default Skills;
