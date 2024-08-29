import { send } from 'emailjs-com';
import { useState } from 'react';
import swal from 'sweetalert';
import emoji from '../../assets/icons/call-me-icon.png';

import { hiThereStyle } from '../../utils/Style';

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!toSend.reply_to || !toSend.message || !toSend.from_name) {
      swal('Check your inputs', 'Complete all your input fields', 'error');
      return;
    } else {
      send('service_tfmuyp8', 'template_npqqikg', toSend, '9zlDeEXVKu6TiMTca')
        .then((response) => {
          setToSend({
            from_name: '',
            message: '',
            reply_to: '',
          });
          swal(
            'Message sent successfully',
            'I will reply as soon as possible',
            'success'
          );
        })
        .catch((err) => {
          swal('Oh no!', 'There was an error, try again later', 'error');
        });
    }
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
              <h1
                className={`${hiThereStyle}` + ' z-2 flex justify-center mb-20'}
              >
                CONTAC ME
              </h1>
              <div className="hidden mt-20 md:flex md:justify-center">
                <img className=" h-60 animate-fadeInR" src={emoji} alt="img" />
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
                        border border-gray-400
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
                        border border-gray-400
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
                        border border-gray-400
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
