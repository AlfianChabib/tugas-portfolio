export default function Navbar() {
  return (
    <nav className="container lg:block px-8 py-2" id="home">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-900">Alfian Chabib</h1>
        <ul className="flex md:relative fixed bottom-0 left-0 right-0 gap-6 md:text-gray-700 text-gray-900 m-4 md:m-0 p-2 md:p-0 md:bg-transparent bg-backdrop md:rounded-none rounded-md backdrop-blur-sm justify-between border md:border-none border-gray-200 z-10">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
