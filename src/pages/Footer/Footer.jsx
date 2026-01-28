import React from "react";
import logo from "../../assets/images/footer logo.png";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // বর্তমান বছর অটোমেটিক পাওয়ার জন্য
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100">
      {/* মেইন ফুটার কন্টেন্ট */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* লোগো এবং নাম */}
        <aside className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="w-20 h-20 mb-2 object-contain" />
          <p className="text-2xl font-black bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
            নূরের আলো
          </p>
          <p className="text-sm text-gray-500 italic mt-1 text-center md:text-left">আলোকিত হোক আপনার জীবন</p>
        </aside>

        {/* সোশ্যাল মিডিয়া */}
        <nav className="flex flex-col items-center md:items-end">
          <h6 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4">Social Connect</h6>
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-3xl text-red-600 hover:scale-125 transition-transform duration-300"
              target="_blank"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/share/1EeMB6F4Qn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-600 hover:scale-125 transition-transform duration-300"
            >
              <FaFacebook />
            </a>
          </div>
        </nav>
      </div>

      {/* নিচের কপিরাইট ও ডেভেলপার সেকশন */}
      <div className="border-t border-gray-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
          
          {/* কপিরাইট বছর অটোমেটিক হবে */}
          <p>
            Copyright © {currentYear} - All right reserved by: 
            <span className="font-bold text-green-700 ml-1">নূরের আলো</span>
          </p>

          {/* ডেভেলপার পার্ট (Zoom In/Out Effect) */}
          <a 
            className="group flex items-center gap-1 transition-all duration-300" 
            href="https://www.facebook.com/js.jakaria42/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Developer by:</span>
            <strong className="text-lg bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent italic transition-transform duration-300 group-hover:scale-110 inline-block ps-2">
             Md Jakaria Hossain
            </strong>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;