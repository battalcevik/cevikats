import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Hammer } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/about" },
    { name: "Hizmetler", href: "/services" },
    { name: "İletişim", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 text-white rounded-full bg-secondary">
              <Hammer size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">CEVIK ATS</span>
              <span className="text-sm text-text-light">Dekorasyon</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive(item.href)
                      ? "text-secondary font-semibold"
                      : "text-text hover:text-secondary"
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:text-secondary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive(item.href)
                      ? "text-secondary font-semibold"
                      : "text-text hover:text-secondary"
                  } block px-3 py-2 transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;