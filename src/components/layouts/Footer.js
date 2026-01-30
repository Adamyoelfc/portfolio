import cv from "../../assets/Adam_en_CV.pdf";

export default function Footer(props) {
  const scrollToProj = () => {
    props.projectRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="grid">
      <div className="p-10 m-10 my-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        <div className="mt-20 text-xl md:mx-auto lg:mx-auto">
          <ul>
            <li className="mb-4 text-crt-text-muted font-mono text-sm tracking-wider">
              SAY HELLO
            </li>
            <li>
              <a
                className="link-crt font-body text-lg"
                href="mailto: adamyoelfc@gmail.com"
              >
                adamyoelfc@gmail.com
              </a>
            </li>
            <li>
              <a
                className="link-crt font-body text-lg"
                href="https://t.me/adamyoelfc"
                target="_blank"
                rel="noreferrer"
              >
                t.me/adamyoelfc
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-20 md:mx-auto lg:mx-auto">
          <ul>
            <li>
              <p
                className="text-xl text-crt-text-secondary cursor-pointer font-body transition-all duration-300 hover:text-crt-accent hover:glow-phosphor"
                onClick={scrollToProj}
              >
                PROJECTS
              </p>
            </li>
            <li>
              <a
                className="text-xl text-crt-text-secondary cursor-pointer font-body transition-all duration-300 hover:text-crt-accent hover:glow-phosphor"
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
        {/* Top border - green subtle */}
        <div className="h-px m-10 bg-gradient-to-r from-transparent via-crt-accent/30 to-transparent"></div>

        <div className="flex justify-between p-10 m-10">
          <p className="text-xl text-crt-text-muted font-mono text-sm">
            &copy; Adam Fernandez 2024
          </p>
          <div className="hidden mr-20 sm:flex gap-6">
            <a
              className="link-crt font-mono text-sm uppercase tracking-wider"
              href="https://github.com/Adamyoelfc"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="link-crt font-mono text-sm uppercase tracking-wider"
              href="https://www.linkedin.com/in/adam-fernandez-330a011a8"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
