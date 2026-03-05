import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black mt-20 w-full">
      <div className="max-w-7xl mx-auto p-10 border-b-2 border-gray-700 text-gray-300 flex flex-wrap justify-between gap-10">
        <div className="flex-1 min-w-[250px] text-start md:flex-[2]">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            CS-Ticket System
          </h1>
          <p>
            CS-Ticket System is a simple, efficient platform designed to help
            manage customer support tickets. Track issues, assign priorities,
            and resolve problems quickly to ensure smooth workflow and excellent
            service.
          </p>
        </div>

        <div className="flex-1 min-w-[150px] text-start">
          <h2 className="text-xl font-semibold mb-4 text-white">Company</h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Our Mission
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[150px] text-start">
          <h2 className="text-xl font-semibold mb-4 text-white">Services</h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition">
              Products & Services
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Customer Stories
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Download Apps
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[150px] text-start">
          <h2 className="text-xl font-semibold mb-4 text-white">Information</h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Join Us
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[150px] text-start">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Social Links
          </h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition">
              @CS-TicketSystem
            </li>
            <li className="hover:text-white cursor-pointer transition">
              @CS-TicketSystem 
            </li>
            <li className="hover:text-white cursor-pointer transition">
              @CS-TicketSystem 
            </li>
            <li className="hover:text-white cursor-pointer transition">
              support@cst.com
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 py-6 text-sm">
        © {new Date().getFullYear()} CS-Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
