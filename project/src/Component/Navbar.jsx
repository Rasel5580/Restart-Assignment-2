import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-2xl pt-2">
      <div className="flex justify-between max-w-290 mx-auto items-center pb-2">
        <h1 className="md:text-2xl pl-3 font-bold">CS-Ticket System</h1>
        <div className="flex gap-5 items-center">
          <ul className="hidden md:flex gap-5 text-sm font-semibold items-center">
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>FAQ</li>
            </a>
            <a href="">
              <li>Changelog</li>
            </a>
            <a href="">
              <li>Blog</li>
            </a>
            <a href="">
              <li>Download</li>
            </a>
            <a href="">
              <li>Contact</li>
            </a>
          </ul>
          <button className="bg-linear-to-br from bg-purple-600 to-purple-300 btn font-semibold items-center">
            <span>+</span> <span className="hidden lg:inline ">New Ticket</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
