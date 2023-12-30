import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle'

const Navbar = () => {
  return (
    <nav className={`navbar fixed top-0 w-full z-10 p-4 bg-opacity-50`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" passHref>
              <p className={`text`}>MQuery</p>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/about" passHref>
              <p className={`text`}>About me</p>
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


