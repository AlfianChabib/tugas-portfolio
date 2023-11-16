import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`md:flex w-12 h-12 fixed hidden bottom-4 right-4 bg-alt text-white rounded-full justify-center items-center`}
    >
      <MdKeyboardDoubleArrowUp size={30} />
    </button>
  );
}
