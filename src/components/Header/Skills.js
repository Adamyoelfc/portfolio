const Skills = (props) => {
  return (
    <div>
      <img className="w-20 p-3 pb-0 mx-auto my-auto" src={props.image} alt={props.textAlt} />
      <p className="text-center text-transparent monospace bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-800">
        {props.text}
      </p>
    </div>
  );
};

export default Skills;
