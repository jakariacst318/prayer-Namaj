import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DuaKalimaWudu = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("namaz_inside");

  useEffect(() => {
    fetch("/duas.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  if (data.length === 0) return <div className="text-center py-20">লোড হচ্ছে...</div>;

  const currentSection = data.find((s) => s.category === activeTab);

  return (
    <div className="bg-[#F8F9F5] min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 ">
          {data.map((s) => (
            <button
              key={s.category}
              onClick={() => setActiveTab(s.category)}
              className={`px-6 py-2 rounded-full font-bold cursor-pointer transition-all ${
                activeTab === s.category ? "bg-green-600 text-white" : "bg-white text-gray-500"
              }`}
            >
              {s.sectionTitle}
            </button>
          ))}
        </div>

        {/* Content Rendering */}
        {activeTab === "wudu_ghusl" ? (
          <WuduGhuslView data={currentSection} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentSection?.items.map((item, i) => (
              <ContentCard key={i} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// অজু ও গোসলের জন্য আলাদা ভিউ
const WuduGhuslView = ({ data }) => (
  <div className="bg-white p-8 rounded-[2.5rem] shadow-sm space-y-10 ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-green-50 p-6 rounded-3xl border border-gray-200 shadow-xl/20 ">
        <h3 className="text-2xl font-bold text-green-800 mb-4">অজুর ফরজ ও সুন্নত</h3>
        <p className="font-bold text-red-600 mb-2">ফরজ {data.wudu.farz.length} টি:</p>
        <ul className="list-decimal ml-5 mb-4">{data.wudu.farz.map((f, i) => <li key={i}>{f}</li>)}</ul>
        <p className="font-bold text-blue-600 mb-2">সুন্নত সমূহ:</p>
        <ul className="list-disc ml-5">{data.wudu.sunnat.map((s, i) => <li key={i}>{s}</li>)}</ul>
      </div>
      <div className="bg-blue-50 p-6 rounded-3xl  border border-gray-200 shadow-xl/20">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">গোসলের নিয়ম</h3>
        <p className="font-bold text-red-600 mb-2">ফরজ {data.ghusl.farz.length} টি:</p>
        <ul className="list-decimal ml-5 mb-4">{data.ghusl.farz.map((f, i) => <li key={i}>{f}</li>)}</ul>
        <p className="text-gray-700"><strong>পদ্ধতি:</strong> {data.ghusl.method}</p>
      </div>
    </div>
  </div>
);

const ContentCard = ({ item }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-6 rounded-3xl  border border-gray-200 shadow-xl/20">
    <h4 className="text-xl font-bold text-green-700 mb-3">{item.name}</h4>
    <p className="text-right text-green-900 font-serif text-2xl bg-green-50 p-4 rounded-xl mb-4 leading-loose">{item.arabic}</p>
    <p className="text-gray-800 mb-2"><strong>উচ্চারণ:</strong > <span className="text-green-800"> {item.pronunciation} </span></p>
    <p className="text-gray-600 italic"><strong>অর্থ:</strong> {item.meaning}</p>
  </motion.div>
);

export default DuaKalimaWudu;