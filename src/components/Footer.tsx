
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bank-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mr-2">
                <span className="text-bank-primary font-bold text-lg">VB</span>
              </div>
              <span className="text-white font-bold text-xl">VibrantBank</span>
            </Link>
            <p className="text-bank-light text-sm mb-4">
              Secure, innovative banking solutions for all your financial needs. We're committed to 
              providing excellent service and helping you achieve your financial goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-bank-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-bank-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-bank-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-bank-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-bank-light hover:text-bank-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/accounts" className="text-bank-light hover:text-bank-accent transition-colors">Accounts</Link>
              </li>
              <li>
                <Link to="/services" className="text-bank-light hover:text-bank-accent transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/loans" className="text-bank-light hover:text-bank-accent transition-colors">Loans</Link>
              </li>
              <li>
                <Link to="/investments" className="text-bank-light hover:text-bank-accent transition-colors">Investments</Link>
              </li>
              <li>
                <Link to="/careers" className="text-bank-light hover:text-bank-accent transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-bank-light hover:text-bank-accent transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/support" className="text-bank-light hover:text-bank-accent transition-colors">Support Center</Link>
              </li>
              <li>
                <Link to="/contact" className="text-bank-light hover:text-bank-accent transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/security" className="text-bank-light hover:text-bank-accent transition-colors">Security</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-bank-light hover:text-bank-accent transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-bank-light hover:text-bank-accent transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="mr-2 mt-1 flex-shrink-0" size={18} />
                <p className="text-bank-light">support@vibrantbank.com</p>
              </div>
              <div className="flex items-start">
                <Phone className="mr-2 mt-1 flex-shrink-0" size={18} />
                <p className="text-bank-light">1-800-VIBRANT (1-800-842-7268)</p>
              </div>
              <div>
                <p className="text-bank-light">123 Financial Street</p>
                <p className="text-bank-light">Banking District</p>
                <p className="text-bank-light">New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-bank-secondary my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-bank-light text-sm">
            &copy; {currentYear} VibrantBank. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-bank-light text-sm hover:text-bank-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-bank-light text-sm hover:text-bank-accent transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-bank-light text-sm hover:text-bank-accent transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
