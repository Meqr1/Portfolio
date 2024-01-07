import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className={`navbar fixed top-0 w-full z-10 p-4 bg-opacity-50`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Image src={"/profile.png"} width={50} height={50}/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


