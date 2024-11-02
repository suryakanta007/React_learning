import React from 'react';

function Header() {
  return (
    <div className="w-full bg-[#2ED06E] py-10  text-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-3 ">
        <div>Logo</div>
        <ul className="flex space-x-4 ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
