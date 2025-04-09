
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, BellRing } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-bank-dark shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-bank-primary to-bank-secondary flex items-center justify-center mr-2">
              <span className="text-white font-bold text-lg">VB</span>
            </div>
            <span className="text-bank-primary dark:text-white font-bold text-xl">VibrantBank</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex space-x-8">
            <Link to="/dashboard" className="text-bank-gray-dark dark:text-bank-light hover:text-bank-primary dark:hover:text-bank-accent transition-colors">
              Dashboard
            </Link>
            <Link to="/accounts" className="text-bank-gray-dark dark:text-bank-light hover:text-bank-primary dark:hover:text-bank-accent transition-colors">
              Accounts
            </Link>
            <Link to="/transactions" className="text-bank-gray-dark dark:text-bank-light hover:text-bank-primary dark:hover:text-bank-accent transition-colors">
              Transactions
            </Link>
            <Link to="/transfers" className="text-bank-gray-dark dark:text-bank-light hover:text-bank-primary dark:hover:text-bank-accent transition-colors">
              Transfers
            </Link>
            <Link to="/services" className="text-bank-gray-dark dark:text-bank-light hover:text-bank-primary dark:hover:text-bank-accent transition-colors">
              Services
            </Link>
          </nav>
        )}

        <div className="flex items-center space-x-4">
          <div className="relative">
            <BellRing className="text-bank-gray-dark dark:text-bank-light cursor-pointer" size={20} />
            <span className="absolute -top-1 -right-1 bg-bank-error text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="text-bank-gray-dark dark:text-bank-light" size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/profile" className="w-full">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/settings" className="w-full">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/support" className="w-full">Support</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/logout" className="w-full text-bank-error">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="text-bank-gray-dark dark:text-bank-light" size={24} />
              ) : (
                <Menu className="text-bank-gray-dark dark:text-bank-light" size={24} />
              )}
            </Button>
          )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-bank-dark py-4 px-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/dashboard" 
              className="text-bank-gray-dark dark:text-bank-light hover:text-bank-primary dark:hover:text-bank-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/accounts" 
              className="text-bank-gray-dark dark:text-bank-light hover:text-bank-primary dark:hover:text-bank-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accounts
            </Link>
            <Link 
              to="/transactions" 
              className="text-bank-gray-dark dark:text-bank-light hover:text-bank-primary dark:hover:text-bank-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Transactions
            </Link>
            <Link 
              to="/transfers" 
              className="text-bank-gray-dark dark:text-bank-light hover:text-bank-primary dark:hover:text-bank-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Transfers
            </Link>
            <Link 
              to="/services" 
              className="text-bank-gray-dark dark:text-bank-light hover:text-bank-primary dark:hover:text-bank-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
