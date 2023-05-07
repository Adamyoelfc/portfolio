import { send } from "emailjs-com";
import { useState } from "react";
import swal from "sweetalert";
import emoji from "../../assets/icons/call-me-icon.png";

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
    <section className="overflow-hidden relative z-10">
      <div className="container">
        <div className="flex flex-wrap -mx-4 lg:justify-between">
          <div className="px-4 mx-auto w-30">
            <div className="max-w-[570px] mb-12 lg:mb-0">
              <p className="mb-5 text-4xl uppercase text-center text-gray-600">
                Contact me
              </p>
              <div className="hidden mx-auto mt-20 md:block">
                <img
                  className="w-60 h-60 animate-fadeInR"
                  src={emoji}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-lg px-4 mx-auto">
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
                        border border-black
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
                        border border-black
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
                        border border-black
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
                    className="w-full p-3 text-white border rounded bg-black border-primary transition hover:bg-opacity-50"
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
  );
};

export default Contact;
