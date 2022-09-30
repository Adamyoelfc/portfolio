import { send } from "emailjs-com";
import { useState } from "react";
import swal from "sweetalert";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const submitFormHandler = (e) => {
    e.preventDefault();
    send("service_tfmuyp8", "template_npqqikg", toSend, "9zlDeEXVKu6TiMTca")
      .then((response) => {
        swal(
          "Message sent successfully",
          "I will reply as soon as possible",
          "success"
        );
        setToSend({
          from_name: "",
          message: "",
          reply_to: "",
        });
      })
      .catch((err) => {
        swal("Oh no!", "There was an error, try again later", "error");
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="justify-center h-screen mt-40 grid snap-start">
      <div className="my-auto ">
        <section className="py-20 lg:py-[120px] overflow-hidden relative z-10">
          <div className="container">
            <div className="flex flex-wrap -mx-4 lg:justify-between">
              <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                <div className="max-w-[570px] mb-12 lg:mb-0">
                  <h2
                    className="
                  mb-6
                  text-transparent
                  uppercase
                  bg-clip-text
                  bg-gradient-to-br
                  from-gray-200
                  to-blue-700
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                  >
                    Contact Me
                  </h2>
                </div>
              </div>
              <div className="w-full px-4">
                <div className="relative p-8 rounded-lg sm:p-12">
                  <form onSubmit={submitFormHandler}>
                    <div className="mb-6">
                      <input
                        name="from_name"
                        value={toSend.from_name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Your Name"
                        className="
                        w-full
                      bg-transparent
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        name="reply_to"
                        value={toSend.reply_to}
                        onChange={handleChange}
                        type="email"
                        placeholder="Your Email"
                        className="
                        w-full
                        rounded
                        py-3
                      bg-transparent
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                      />
                    </div>
                    <div className="mb-6">
                      <textarea
                        rows="6"
                        name="message"
                        value={toSend.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="
                        w-full
                        rounded
                      bg-transparent
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full p-3 text-white border rounded bg-primary border-primary transition hover:bg-opacity-90"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
