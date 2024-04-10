import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 w-full fixed text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Logo</div>
      <div className="flex justify-center items-center space-x-4">
        <a href="#info" className="hover:text-blue-500">View Records</a>
      </div>
    </nav>
  );
}

export default Navbar;
