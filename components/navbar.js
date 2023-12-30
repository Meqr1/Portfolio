import ThemeToggle from '../components/ThemeToggle'

const Navbar = () => {
  return (
    <nav className={`navbar fixed top-0 w-full z-10 p-4 bg-opacity-50`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
              <p className={`text`}>MQuery</p>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


