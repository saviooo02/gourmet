
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 text-slate-800 font-inter px-6 py-4 flex justify-end items-center">
      <div className="flex space-x-11">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-600"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-600"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;


