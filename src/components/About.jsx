import Alfian from "../assets/alfian.png";
import { FiDownload } from "react-icons/fi";

export default function About() {
  return (
    <section className="container px-8 mt-12" id="about">
      <div className="flex flex-col items-center justify-between mb-8">
        <h2 className="font-semibold md:text-3xl text-2xl">About Me</h2>
        <p className="font-medium text-gray-700 text-sm">My Introduction</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="md:flex hidden  w-full px-20">
          <img
            className="aspect-video object-cover rounded-xl"
            src={Alfian}
            alt="alfian"
          />
        </div>
        <div className="flex flex-col w-full">
          <p className="font-medium text-gray-800 mb-8 pl-3 border-l-2 border-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            beatae inventore vitae consequuntur ut vero alias est nam. Nesciunt
            voluptatibus vel libero distinctio accusamus eligendi ullam porro
            nisi sed quisquam!
          </p>
          <div className="flex w-full gap-4">
            <div className="text-center py-1 px-2 leading-5">
              <h3 className="text-3xl font-semibold text-gray-800">03+</h3>
              <p className="font-medium text-sm text-gray-600">
                Years Of Experience
              </p>
            </div>
            <div className="text-center py-1 px-2 leading-5">
              <h3 className="text-3xl font-semibold text-gray-800">22+</h3>
              <p className="font-medium text-sm text-gray-600">
                Completed Project
              </p>
            </div>
            <div className="text-center py-1 px-2 leading-5">
              <h3 className="text-3xl font-semibold text-gray-800">07+</h3>
              <p className="font-medium text-sm text-gray-600">
                Companies Worked
              </p>
            </div>
          </div>
          <button className="flex py-2 px-3 rounded-md text-white mt-8 gap-2 items-center bg-alt w-max">
            Download CV <FiDownload />
          </button>
        </div>
      </div>
    </section>
  );
}
