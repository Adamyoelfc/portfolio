import cv from "../../assets/Adam_en_CV.pdf";
export default function Footer(props) {
  const scrollToProj = () => {
    props.projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    props.aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="grid">
      <div className="p-10 m-10 my-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        <div className="mt-20 text-xl">
          <ul>
            <li className="mb-4 text-gray-400">SAY HELLO</li>
            <li>
              <a
                className="text-blue-300 hover:text-green-300"
                href="mailto: adamyoelfc@gmail.com"
              >
                adamyoelfc@gmail.com
              </a>
            </li>
            <li>
              {" "}
              <a
                className="text-blue-300 hover:text-green-300"
                href="https://t.me/adamyoelfc"
                target="_blank"
                rel="noreferrer"
              >
                t.me/adamyoelfc
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-20">
          <ul>
            <li>
              <p
                className="text-xl text-gray-500 hover:text-cyan-500"
                onClick={scrollToProj}
              >
                PROJECTS
              </p>
            </li>
            <li></li>
            <li>
              <p
                className="text-xl text-gray-500 hover:text-cyan-500"
                onClick={scrollToAbout}
              >
                ABOUT ME
              </p>
            </li>
            <li>
              <a
                className="text-xl text-gray-500 hover:text-cyan-500"
                target="_blank"
                href={cv}
                rel="noreferrer"
              >
                MY CV
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="inline-block my-auto align-bottom">
        <div className=" h-0 m-10 border border-b-0 border-green-300 border-t-[0.1px]"></div>
        <div className="flex justify-between p-10 m-10">
          <p
            className="text-xl text-green-300"
            href="mailto: adamyoelfc@gmail.com"
          >
            © Adam Fernandez 2022
          </p>
          <div className="hidden mr-20 sm:flex">
            <a
              className="m-2 hover:text-yellow-200"
              href="https://github.com/Adamyoelfc"
              target="_blank"
              rel="noreferrer"
            >
              GHITHUB
            </a>
            <a
              className="m-2 hover:text-yellow-200"
              href="https://www.linkedin.com/in/adam-fernandez-330a011a8"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
