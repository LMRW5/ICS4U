import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-gray-900 text-gray-500">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-l">
          <p>TMDB explorer Assignment 4 ICS4U</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/LMRW5"
              target="_blank"
              className="flex items-center gap-2 hover:text-white transition cursor-pointer"
            >
              <FaGithub />
              Github
            </a>
            <a
              href="https://linkedin.com/in/ryan-wu88"
              target="_blank"
              className="flex items-center gap-2 hover:text-white transition cursor-pointer"
            >
              <FaLinkedin />
              LinkedIn
            </a>
        </div>
      </div>
    </footer>
  );
}
