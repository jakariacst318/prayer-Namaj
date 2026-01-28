import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="min-h-screen bg-[#F3F4F0] text-gray-800">
      <div className="max-w-7xl mx-auto min-h-screen">
        <Navbar />
        <main className="p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
