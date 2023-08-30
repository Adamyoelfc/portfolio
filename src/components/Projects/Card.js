// import image from "../../assets/ScreenShot.png";

const Card = (props) => {
  return (
    <div className="snap-center">
      <div className="m-3 overflow-hidden rounded snap-center w-80 sm:w-96 ">
        <img className="h-28" src={props.image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-gray-300">
            {props.title}
          </div>
          <p className="text-base text-gray-300">{props.description}</p>
          {props.link ? (
              <button class="rounded bg-blue-800 p-2 text-white text-xs">
                <a target="_blank" href={props.link}>Check it out...</a>
              </button>
          ) : (
            ""
          )}
        </div>
        <div className="px-6 pt-4 pb-2">
          {props.skills.map((skill) => (
            <span
              key={skill}
              className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
            >
              #{skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
