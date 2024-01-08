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
          <button className="border text-white border-black bg-blue aspect-square rounded-full p-4 h-[100px] hover:bg-beige transition-colors duration-500 hover:text-black" onClick={handleContactClick}>
            Contact Me
          </button>
          <button className="border border-green text-white bg-green aspect-square rounded-full p-4 translate-y-[00px] sm:translate-y-[100px] h-[300px] hover:bg-beige transition-colors duration-500 hover:text-black hover:border-beige" onClick={handleContactClick}>ayanmahajan41@gmail.com</button>
        </div>
        <div className="hidden sm:flex flex-col p-4 border-l border-white">
          <a href="https://www.youtube.com/channel/UC8-ns1F3px56_LVj44athGw" className="flex items-center"><FaYoutube /> <p className="ml-2">Youtube</p></a>
          <a href="https://www.instagram.com/ayan_johxn/" className="flex items-center"><FaInstagramSquare /> <p className="ml-2">Instagram</p></a>
          <a href="https://github.com/Meqr1" className="flex items-center"><FaGithubSquare /> <p className="ml-2">Github</p></a>
        </div>
      </div>
      <footer className="flex justify-between bg-black text-white sm:hidden pt-2 p-4 border-t">
        <a href="https://www.youtube.com/channel/UC8-ns1F3px56_LVj44athGw" className="flex items-center"><FaYoutube /><p className="ml-2">Youtube</p></a>
        <a href="https://www.instagram.com/ayan_johxn/" className="flex items-center"><FaInstagramSquare /><p className="ml-2">Instagram</p></a>
        <a href="https://github.com/Meqr1" className="flex items-center"><FaGithubSquare /><p className="ml-2">Github</p></a>
      </footer>
    </div>
  );
}

export default contact;

