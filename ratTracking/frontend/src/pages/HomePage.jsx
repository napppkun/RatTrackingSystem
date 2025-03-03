import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Search } from "lucide-react";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-6">
          <h2 className="text-xl font-bold">การทดลองของฉัน</h2>
          <div className="relative my-4">
            <input type="text" placeholder="ค้นหาการทดลอง..." className="w-full px-4 py-2 border rounded-lg"/>
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 text-left">ชื่อการทดลอง</th>
                <th className="py-2 px-4 text-left">สภาพแวดล้อม</th>
                <th className="py-2 px-4 text-left">ยา</th>
                <th className="py-2 px-4 text-left">วันที่ทดลอง</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-4">ทดลอง A</td>
                <td className="py-2 px-4">ห้อง A</td>
                <td className="py-2 px-4">ยา X</td>
                <td className="py-2 px-4">2023-03-15</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">ทดลอง B</td>
                <td className="py-2 px-4">ห้อง B</td>
                <td className="py-2 px-4">ยา Y</td>
                <td className="py-2 px-4">2023-03-10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
