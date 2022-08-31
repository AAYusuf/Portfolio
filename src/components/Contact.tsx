import { FC } from "react";
import { socialLinks } from "../shared/constants";

const Contact: FC = () => {
  return (
    <div className=" pb-20">
      <h1 className="text-left text-4xl mt-14 md:mt-28 mb-10 ml-20">
        Get in touch
      </h1>
      <hr  className=" mt-5 md:mt-8 mb-10 ml-20 w-2/4" />
      <div
        data-scroll
        data-scroll-speed="1"
        className="flex justify-center mx-[5vw] mt-8"
      >
        <div className="w-full max-w-[1100px] flex gap-10 flex-col md:flex-row">
          <div className="flex-1">
            <h3> Get in touch</h3>
            <p className="mt-4 mb-10 text-gray-400 text-lg text-left">
              I'm currently looking for full-time Software Engineering or Machine Learning opportunities!
              If you know of any positions available, if you have any questions, or if you just want to 
              say hi, please feel free to email me at.
            </p>
          </div>
          <div className="flex-1">
            <form
              action={process.env.NEXT_PUBLIC_FORM_URL}
              method="POST"
              className="flex flex-col gap-2"
            >
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
                minLength={3}
              />
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@gmail.com"
                required
              />
              <label htmlFor="subject">Subject</label>
              <textarea
                rows={4}
                id="subject"
                name="subject"
                placeholder="I want to talk to you"
                required
               />
              <button className="mt-2 py-2 text-white rounded transition duration-300 flex  justify-center items-center gap-[10px] bg-[red] hover:bg-[#2884e0] w-2/4">
                Send
              </button>
            </form>
          </div>
          
        </div>
       
      </div>
      <div className=" pt-20 ">
        <div className="">
            <div className="flex ml-20 justify-center">
            {socialLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300"
              >
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={item.icon}
                  alt=""
                />
                <h1>{item.title}</h1>
              </a>
            ))}
            </div>

          </div>
        </div>
    </div>
  );
};

export default Contact;
