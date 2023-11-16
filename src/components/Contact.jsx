import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <section className="container px-8 mt-20" id="contact">
      <div className="flex flex-col items-center justify-between mb-8">
        <h2 className="font-semibold text-3xl">Contact</h2>
        <p className="font-medium text-gray-700 text-sm">Get In Touch</p>
      </div>
      <div className="flex md:flex-nowrap flex-wrap gap-8 justify-between">
        <div className="flex flex-col gap-4 w-full text-gray-800">
          <a
            href="https://www.instagram.com/yannnisnobody/"
            rel="noreferrer"
            target="_blank"
            className="flex gap-4 items-center w-max"
          >
            <FaInstagram size={34} />
            @yannnisnobody
          </a>
          <a
            href="https://github.com/AlfianChabib"
            rel="noreferrer"
            target="_blank"
            className="flex gap-4 items-center w-max"
          >
            <FaGithub size={34} />
            AlfianChabib
          </a>

          <a
            href="https://www.linkedin.com/in/alfian-chabib-2a042117b/"
            rel="noreferrer"
            target="_blank"
            className="flex gap-4 items-center w-max"
          >
            <FaLinkedin size={34} />
            Alfian Chabib
          </a>

          <a
            href=""
            rel="noreferrer"
            target="_blank"
            className="flex gap-4 items-center w-max"
          >
            <IoMailOutline size={34} />
            alfianchabib109@gmail.com
          </a>
        </div>
        <div className="w-full">
          <form action="">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
