import { Search, Heart, ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        {/* Logo */}
        <div>
          <h1 className="text-4xl font-black tracking-[0.35em] text-white cursor-pointer">
            ZURO
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-white">
          <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            Acid Wash
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            Everyday Essential
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            Hindu Divine
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            Oversized
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            Anime
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5 text-white">
          <Search className="cursor-pointer hover:text-orange-500 transition-colors duration-300" />
          <Heart className="cursor-pointer hover:text-orange-500 transition-colors duration-300" />
          <ShoppingBag className="cursor-pointer hover:text-orange-500 transition-colors duration-300" />
          <User className="cursor-pointer hover:text-orange-500 transition-colors duration-300" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
