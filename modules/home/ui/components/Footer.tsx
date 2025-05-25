import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-6">Re-Nyl</h3>
          <p className="text-gray-400 mb-6">
            Your premier destination for vinyl records, connecting collectors
            and music lovers with rare finds and new releases.
          </p>
          <div className="flex space-x-4">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full h-10 w-10"
            >
              <Instagram className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full h-10 w-10"
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full h-10 w-10"
            >
              <Facebook className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full h-10 w-10"
            >
              <Youtube className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                New Arrivals
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Best Sellers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Pre-Orders
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Rare Finds
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sell Your Vinyl
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Help & Info</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Shipping & Returns
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Subscribe to get special offers, free giveaways, and new release
            notifications.
          </p>
          <div className="flex gap-2 mb-4">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-gray-300 border-gray-300 focus:border-gray-500 text-black"
            />
            <Button>Subscribe</Button>
          </div>
          <div className="text-gray-400">
            <div className="flex items-center mb-2">
              <Mail className="h-4 w-4 mr-2" />
              <span>support@renyl.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Re-Nyl. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
