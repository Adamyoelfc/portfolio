function CardContent(props) {
  return (
    <div className=" w-[388px] h-[500px] pt-5 bg-purple-300 bg-opacity-10 rounded-[18px] shadow-xl">
      <div
        data-atropos-offset="5"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: 'cover',
        }}
        className={`w-[350px] h-[200px] mx-auto mb-5 rounded-[19px] shadow-xl`}
      />
      <div
        data-atropos-offset="-2"
        className="flex justify-center p-1 flex-wrap gap-1"
      >
        {props.skills.map((skill) => (
          <div className="bg-purple-400 text-sm mx-auto w-fit p-1 text-white rounded-md bg-opacity-[.50]">
            {skill}
          </div>
        ))}
      </div>
      <div
        data-atropos-offset="5"
        className="w-[340px] p-5 text-gray-200 font-normal text-sm"
      >
        {props.description}
        {props.link && (
          <button className=" bg-purple-500 opacity-[.68] shadow-xl hover:opacity-[100] px-2 ml-5 text-white rounded-md">
            <a href={props.link} target="_blank">
              Link
            </a>
          </button>
        )}
      </div>
    </div>
  );
}

export default CardContent;
