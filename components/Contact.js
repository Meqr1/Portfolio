import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const contact = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:ayanmahajan41@gmail.com';
  };

  return (
    <div>
      <div className="bg-black flex text-white h-[45vh] p-3 justify-between">
        <div>
          <button className="border border-beige text-black bg-beige aspect-square rounded-full p-4 h-[100px]" onClick={handleContactClick}>
            Contact Me
          </button>
          <button className="border border-beige text-black bg-beige aspect-square rounded-full p-4 translate-y-[100px] h-[300px]" onClick={handleContactClick}>ayanmahajan41@gmail.com</button>
        </div>
        <div className="hidden sm:block">
          <a href="https://www.youtube.com/channel/UC8-ns1F3px56_LVj44athGw" className="flex items-center"><FaYoutube /> Youtube</a>
          <a href="https://www.instagram.com/ayan_johxn/" className="flex items-center"><FaInstagramSquare /> Instagram</a>
          <a href="https://github.com/Meqr1" className="flex items-center"><FaGithubSquare /> Github</a>
        </div>
      </div>
      <footer className="flex justify-between bg-black text-white block sm:hidden">
        <a href="https://www.youtube.com/channel/UC8-ns1F3px56_LVj44athGw" className="flex items-center"><FaYoutube /> Youtube</a>
        <a href="https://www.instagram.com/ayan_johxn/" className="flex items-center"><FaInstagramSquare /> Instagram</a>
        <a href="https://github.com/Meqr1" className="flex items-center"><FaGithubSquare /> Github</a>
      </footer>
    </div>
  );
}

export default contact;

