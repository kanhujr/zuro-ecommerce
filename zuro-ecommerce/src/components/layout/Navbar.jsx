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
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          <li>Men</li>
          <li>Women</li>
          <li>Oversized</li>
          <li>Hoodies</li>
          <li>Cargo</li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Search className="cursor-pointer" />
          <Heart className="cursor-pointer" />
          <ShoppingBag className="cursor-pointer" />
          <User className="cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
