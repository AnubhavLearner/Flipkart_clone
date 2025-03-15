
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-flipkart-blue text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <div className="mr-1 md:mr-4">
              <a href="/" className="flex flex-col items-center">
                <span className="font-bold text-xl">Flipkart</span>
                <span className="text-[10px] italic text-flipkart-yellow flex items-center">
                  Explore <span className="text-white mx-0.5">Plus</span> ✨
                </span>
              </a>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 mx-4 max-w-3xl relative">
            <Input
              type="search"
              placeholder="Search for products, brands and more"
              className="bg-white text-black rounded-sm py-2 pl-4 pr-12 text-sm w-full"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-flipkart-blue" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-white font-medium hover:bg-blue-600">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <a href="#" className="font-medium hover:underline">Become a Seller</a>
            <div className="relative">
              <Button variant="ghost" className="text-white font-medium hover:bg-blue-600">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
              </Button>
              <span className="absolute -top-1 -right-1 bg-flipkart-yellow text-flipkart-blue text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
          </nav>
        </div>

        {/* Mobile search - shown only on mobile */}
        <div className="mt-2 md:hidden relative">
          <Input
            type="search"
            placeholder="Search for products, brands and more"
            className="bg-white text-black rounded-sm py-2 pl-4 pr-12 text-sm w-full"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-flipkart-blue" />
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white text-flipkart-text-primary rounded shadow-md p-4 absolute left-0 right-0 z-50">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded">
                <User className="h-4 w-4 mr-2 text-flipkart-blue" />
                <span>Login</span>
              </a>
              <a href="#" className="py-2 px-4 hover:bg-gray-100 rounded">Become a Seller</a>
              <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded">
                <ShoppingCart className="h-4 w-4 mr-2 text-flipkart-blue" />
                <span>Cart</span>
                <span className="ml-2 bg-flipkart-blue text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
