import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className={`navbar fixed top-0 w-full z-10 p-4 border-b bg-black bg-opacity-90 text-white`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Image src={"/profile.png"} width={50} height={50}/>
          </div>
          <div>
          <a className="" href='/Works'>Works</a>
          <a className="ml-4" href="/About">About me</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


