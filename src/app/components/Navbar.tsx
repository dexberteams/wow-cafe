import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-300">
      <ul className="flex justify-around items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
