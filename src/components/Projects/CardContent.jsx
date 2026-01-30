function CardContent(props) {
  return (
    <div className="w-[388px] h-[500px] pt-5 bg-crt-bg-secondary border border-crt-border rounded-[18px] shadow-vintage card-scanlines transition-all duration-300 hover:shadow-glow-phosphor-sm hover:border-crt-accent/50">
      {/* Image container with CRT filter */}
      <div
        data-atropos-offset="5"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: 'cover',
        }}
        className="w-[350px] h-[200px] mx-auto mb-5 rounded-[19px] shadow-xl filter-crt scanlines"
      />

      {/* Skills tags */}
      <div
        data-atropos-offset="-2"
        className="flex justify-center p-1 flex-wrap gap-2"
      >
        {props.skills.map((skill, index) => (
          <div
            key={index}
            className="border border-crt-accent/50 text-sm px-2 py-1 text-crt-accent-soft rounded-md bg-transparent font-mono transition-all duration-300 hover:bg-crt-accent hover:text-crt-bg-primary hover:shadow-glow-phosphor-sm"
          >
            {skill}
          </div>
        ))}
      </div>

      {/* Description */}
      <div
        data-atropos-offset="5"
        className="w-[340px] p-5 text-crt-text-secondary font-body text-sm"
      >
        {props.description}

        {/* View Project Button */}
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center ml-5 px-4 py-1 border border-crt-accent text-crt-accent font-mono text-sm rounded-md transition-all duration-300 hover:bg-crt-accent hover:text-crt-bg-primary hover:shadow-glow-phosphor group"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-1">&gt;</span>
            View Project
          </a>
        )}
      </div>
    </div>
  );
}

export default CardContent;
