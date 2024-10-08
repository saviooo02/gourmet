
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 text-slate-600 font-inter px-6 py-4 flex justify-end items-center">
      <div className="flex space-x-11">
        <a
          href="https://github.com/saviooo02/gourmet"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-400"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/saviooo02/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-400"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;


