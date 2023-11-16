import Alfian from "../assets/alfian.png";
import { GoCommentDiscussion } from "react-icons/go";

export default function Hero() {
  return (
    <section className="container">
      <main className="flex md:flex-row flex-col-reverse items-center justify-between w-full min-h-[500px] px-8 gap-4 md:gap-2 mt-4 md:mt-0">
        <div className="md:w-1/2 w-full">
          <h2 className="md:text-5xl text-3xl font-semibold">
            Hi, I&apos;am Alfian
          </h2>
          <p className="font-medium text-gray-800 text-sm mb-4">
            Fullstack Web Developer
          </p>
          <p className="md:w-2/3 text-gray-600 border-l-2 border-gray-500 pl-2 mb-8">
            High level experience in web design and development knowledge,
            producing quality work.
          </p>
          <a
            className="flex w-max items-center gap-2 py-3 px-6 bg-alt rounded-full text-white"
            href="#contact"
          >
            Contact Me <GoCommentDiscussion />
          </a>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            className="m-auto md:rounded-full rounded-xl md:w-[300px] w-[250px]"
            src={Alfian}
            alt="alfian"
          />
        </div>
      </main>
    </section>
  );
}
