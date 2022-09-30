import image from "../../assets/ScreenShot.png";

const Card = (props) => {
  console.log(props.image)
  return (
    <div className="snap-center">
      <div className="m-3 overflow-hidden rounded snap-center w-96 ">
        <img className="w-48" src={props.image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{props.title}</div>
          <p className="text-base text-gray-500">{props.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {props.skills.map((skill) => (
            <span key={skill} className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #{skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
