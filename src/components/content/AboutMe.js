const AboutMe = () => {
  return (
      <div className="grid justify-items-center">
        <p
          className="text-4xl font-extrabold text-center text-transparent monospace bg-clip-text bg-gradient-to-br from-yellow-400 to-gray-800"
        >
          About Me
        </p>
        <div className="p-3 sm:p-10 md:p-10 lg:p-10">
          <h4 className="text-2xl text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-500 sm:text-4xl md:text-4xl lg:text-5xl monospace">
            About 3 years working with technologies like Python - Django,
            JavaScript, git-GitHub... and other javascript framework like
            Vue.js, React.js etc...
          </h4>
          <ul className="pt-10 mt-10 text-xl monospace">
            <li className="flex">
              👨‍💻{" "}
              <p className="ml-2 text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-gray-500">
                Love for tech and innovation.
              </p>
            </li>

            <li className="flex">
              💓{" "}
              <p className="ml-2 text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-gray-500">
                Passionate with problem solving and automation.
              </p>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default AboutMe;
