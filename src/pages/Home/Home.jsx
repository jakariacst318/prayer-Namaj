import React from "react";
import { Link } from "react-router";
import prayerData from "../../../public/prayerData.json";
import Surah from "../Surah/Surah";
import DuaKalimaWudu from "../DuaKalimaWudu/DuaKalimaWudu";

const Home = () => {
  return (
    <div className="py-10 px-5">
      <div className="text-center mb-12">
        <h1 className="text-3xl  md:text-4xl font-extrabold text-green-800  mb-2">
          সহজ নামাজ শিক্ষা
        </h1>
        <div class="w-20 h-1.5 bg-green-200 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4">
          পাঁচ ওয়াক্ত নামাজের সময় ও পড়ার সঠিক নিয়ম শিখুন
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {prayerData.map((prayer) => (
          <Link
            key={prayer.id}
            to={`/category/${prayer.path}`}
            className="group relative bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border-b-4 border-green-600 text-center overflow-hidden"
          >
            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-green-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10 "></div>

            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform ">
              {prayer.path === "ফজর" && "🌅"}
              {prayer.path === "যোহর" && "☀️"}
              {prayer.path === "আসর" && "⛅"}
              {prayer.path === "মাগরিব" && "🌇"}
              {prayer.path === "ইশা" && "🌙"}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {prayer.name}
            </h3>
            <p className="text-sm text-gray-500 hover:text-green-600">
              বিস্তারিত দেখুন →
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-14">
        <Surah></Surah>
        <DuaKalimaWudu></DuaKalimaWudu>
      </div>
    </div>
  );
};

export default Home;
