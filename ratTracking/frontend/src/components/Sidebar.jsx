import React from "react";
import { Home, Rat, FlaskConical, Bookmark, History, User, LogOut } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* ✅ Overlay สีเทาอ่อน ปิด Sidebar เมื่อคลิก */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* ✅ Sidebar พร้อมมุมโค้งมากขึ้นและระยะห่างจากขอบบน */}
      <aside className={`fixed left-0 top-0 h-[100%] w-64 bg-blue-500 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50 mt-10 rounded-tr-[100px]`}>
      <ul className="space-y-6 p-6 pt-20">
          <li className="flex items-center space-x-2"><User size={20} /> <span>ข้อมูลส่วนตัว</span></li>
          <li className="flex items-center space-x-2"><Home size={20} /> <span>หน้าแรก</span></li>
          <li className="flex items-center space-x-2"><Rat size={20} /> <span>หนูทดลอง</span></li>
          <li className="flex items-center space-x-2"><FlaskConical size={20} /> <span>การทดลอง</span></li>
          <li className="flex items-center space-x-2"><History size={20} /> <span>ประวัติการทดลอง</span></li>
          <li className="flex items-center space-x-2"><Bookmark size={20} /> <span>บันทึก</span></li>
          <li className="flex items-center space-x-2 text-red-300"><LogOut size={20} /> <span>ออกจากระบบ</span></li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
