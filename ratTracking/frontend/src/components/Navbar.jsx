import React from "react";
import { Menu } from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <button onClick={toggleSidebar} className="text-gray-600">
        <Menu size={24} />
      </button>
      <h1 className="text-xl font-bold text-blue-600">LRD <span className="text-black">- system</span></h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">ข้อมูลส่วนตัว</span>
        <button className="text-red-500 font-bold">ออกจากระบบ</button>
      </div>
    </nav>
  );
};

export default Navbar;
