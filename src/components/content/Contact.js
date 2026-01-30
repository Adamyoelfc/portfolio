import { send } from 'emailjs-com';
import { useState } from 'react';
import swal from 'sweetalert';
import emoji from '../../assets/icons/call-me-icon.png';

import { sectionHeaderStyle } from '../../utils/Style';

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
                className={`${sectionHeaderStyle} z-2 flex justify-center mb-20`}
              >
                CONTACT ME
              </h1>
              <div className="hidden mt-20 md:flex md:justify-center">
                <img
                  className="h-60 animate-fadeInR filter-crt"
                  src={emoji}
                  alt="Contact"
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-lg px-4 mx-auto">
            <div className="relative p-8 rounded-lg bg-crt-bg-secondary/50 border border-crt-border sm:p-12">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-crt-border">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-crt-accent/70"></div>
                <span className="ml-4 font-mono text-crt-text-muted text-xs">contact.sh</span>
              </div>

              <form onSubmit={submitFormHandler}>
                <div className="mb-6">
                  <label className="block font-mono text-crt-text-muted text-xs mb-2">
                    <span className="text-crt-accent">&gt;</span> your_name
                  </label>
                  <input
                    name="from_name"
                    value={toSend.from_name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                    className="input-crt w-full rounded py-3 px-4 font-ui"
                  />
                </div>
                <div className="mb-6">
                  <label className="block font-mono text-crt-text-muted text-xs mb-2">
                    <span className="text-crt-accent">&gt;</span> your_email
                  </label>
                  <input
                    name="reply_to"
                    value={toSend.reply_to}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email"
                    className="input-crt w-full rounded py-3 px-4 font-ui"
                  />
                </div>
                <div className="mb-6">
                  <label className="block font-mono text-crt-text-muted text-xs mb-2">
                    <span className="text-crt-accent">&gt;</span> message
                  </label>
                  <textarea
                    rows="6"
                    name="message"
                    value={toSend.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="input-crt w-full rounded py-3 px-4 resize-none font-ui"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn-terminal w-full p-3 rounded flex items-center justify-center"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">$ </span>
                    send_message
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
