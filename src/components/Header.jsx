import { Link } from "react-router";

const Header = () => {
  return (
    <header className="absolute font-logo font-semibold text-5xl text-center md:text-left text-white top-0 left-0 right-0 bg px-5 md:px-10 py-4">
      <Link to="/" className="outline-none">
        ValentineVerses
      </Link>
    </header>
  );
};

export default Header;
