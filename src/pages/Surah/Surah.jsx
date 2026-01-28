import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// দীর্ঘ টেক্সট ম্যানেজ করার জন্য একটি ছোট সাব-কম্পোনেন্ট
const ExpandableText = ({ title, text, colorClass, borderColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 80; // কতটুকু অক্ষর পর টেক্সট কাটবে

  const shouldSlice = text.length > maxLength;
  const displayText = isExpanded ? text : text.slice(0, maxLength);

  return (
    <div className={`p-3 rounded-xl border-l-4 ${borderColor} ${colorClass}`}>
      <p className="text-[10px] uppercase text-gray-400 font-bold tracking-tighter mb-1">
        {title}
      </p>
      <p className={`text-sm md:text-base ${title === 'অনুবাদ' ? 'italic text-gray-600' : 'text-green-800 font-medium'}`}>
        {displayText}
        {shouldSlice && !isExpanded && "..."}
      </p>
      {shouldSlice && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-1 text-xs font-bold text-green-600 hover:text-green-800 transition-colors flex items-center gap-1"
        >
          {isExpanded ? "সংক্ষিপ্ত করুন ▴" : "বিস্তারিত পড়ুন ▾"}
        </button>
      )}
    </div>
  );
};

const Surah = () => {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/surahs.json")
      .then((res) => res.json())
      .then((data) => {
        setSurahs(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading Surahs:", err));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-600"></div>
        <span className="ml-3 font-bold text-green-700">লোড হচ্ছে...</span>
      </div>
    );
  }

  return (
    <div className="bg-[#F3F4F0] min-h-screen py-10 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-2">
          প্রয়োজনীয় সূরাসমূহ
        </h1>
        <div className="w-20 h-1.5 bg-green-200 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 max-w-lg mx-auto italic">
          নামাজে ব্যবহৃত ছোট সূরাগুলোর আরবি, উচ্চারণ ও অর্থ এখানে পাবেন।
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {surahs.map((surah, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-6 relative overflow-hidden group border border-gray-100  hover:shadow-2xl transition-all duration-300  shadow-xl/10"
          >
            {/* Decorative Number Icon */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-200 text-4xl font-black">
              {index + 1}
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-green-800 mb-5">
                {surah.name}
              </h3>

              <div className="space-y-4">
                {/* Arabic Section */}
                <div className="bg-green-50/50 p-5 rounded-2xl border border-green-100/50">
                  <p className="text-right leading-[2.2] text-green-700 font-serif text-2xl font-bold">
                    {surah.arabic}
                  </p>
                </div>

                {/* Pronunciation & Meaning with Expandable Logic */}
                <div className="space-y-3">
                  <ExpandableText 
                    title="উচ্চারণ" 
                    text={surah.pronunciation} 
                    colorClass="bg-gray-50/80" 
                    borderColor="border-green-500"
                  />
                  
                  <ExpandableText 
                    title="অনুবাদ" 
                    text={surah.meaning} 
                    colorClass="bg-blue-50/50" 
                    borderColor="border-blue-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Surah;