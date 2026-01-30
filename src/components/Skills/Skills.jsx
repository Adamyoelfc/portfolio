const Skills = (props) => {
  return (
    <div className="h-full w-full group cursor-pointer">
      <div className="relative transition-all duration-300 group-hover:animate-power-on">
        <img
          className="w-20 mx-auto my-auto transition-all duration-300 filter sepia-[20%] hue-rotate-[50deg] saturate-[0.8] group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 group-hover:drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]"
          src={props.image}
          alt={props.textAlt}
        />
      </div>
      <p className="text-center text-xs md:text-base lg:text-xl text-crt-text-muted font-mono transition-all duration-300 group-hover:text-crt-accent group-hover:glow-phosphor">
        {props.text}
      </p>
    </div>
  );
};

export default Skills;
