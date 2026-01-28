import React from "react";
// ইমেজ ইম্পোর্ট (পাথ আপনার ফোল্ডার অনুযায়ী ঠিক আছে কিনা দেখে নিন)
import Standing from "../../assets/images/Standing-position-in-prayer.jpg";
import allahuAkbar from "../../assets/images/allahu-akbar-to-start-prayer.jpg";
import sura from "../../assets/images/sura.jfif";
import ruku from "../../assets/images/ruku.jfif";
import sijdha from "../../assets/images/sijdha.jpg";
import tashahhud from "../../assets/images/tashahhud.jpg";
import salam from "../../assets/images/salam.jfif";
import monajaat from "../../assets/images/monajaat.jpg";

const PrayerDetails = ({ name, subtitle, rakats, time, niyat }) => {
  return (
    <div className="bg-[#F3F4F0] min-h-screen py-6 px-2 md:px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
        {/* --- Header Section --- */}
        <div className="bg-green-700 p-8 text-white text-center">
          <motion-div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{name}</h1>
            <p className="text-lg  opacity-90 font-medium">{subtitle}</p>
          </motion-div>
        </div>

        <div className="p-4 md:p-10">
          {/* --- রাকাত ও সময় কার্ড --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-green-50 rounded-3xl border border-green-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">
                <span className="text-2xl">📍</span> রাকাতের বিবরণ
              </h3>
              <ul className="space-y-3 font-medium text-gray-700">
                {rakats.map((rakat, index) => (
                  <li
                    key={index}
                    className="flex justify-between border-b border-green-200 pb-2"
                  >
                    <span>{rakat.type}</span>
                    <span className="text-green-700 font-bold">
                      {rakat.count} রাকাত
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm flex flex-col justify-center">
              <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">
                <span className="text-2xl">⏰</span> নামাজের সময়
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">{time}</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-12 relative inline-block w-full">
            নামাজ পড়ার পূর্ণাঙ্গ নিয়ম
            <div className="w-24 h-1.5 bg-green-600 mx-auto mt-3 rounded-full"></div>
          </h2>

          {/* --- নামাজের ধাপসমূহ (১১টি প্রধান ধাপ) --- */}
          <div className="space-y-10">
            {/* ১. নিয়ত (JSON থেকে ডাইনামিক) */}
            <Step number="১" title="নিয়ত" desc={niyat} image={Standing} />

            {/* ২. তাকবীরে তাহরিমা */}
            <Step
              number="২"
              title="তাকবীরে তাহরিমা"
              desc="দুই হাত কান পর্যন্ত উঠিয়ে 'আল্লাহু আকবার' বলে নাভির উপরে  হাত বাঁধা।"
              arabic="اللهُ أَكْبَرُ"
              pronunciation="আল্লাহু আকবার"
              meaning="আল্লাহ সবচাইতে বড়।"
              image={allahuAkbar}
            />

            {/* ৩. সানা */}
            <Step
              number="৩"
              title="সানা পড়া"
              desc="হাত বাঁধার পর সানা পাঠ করা।"
              arabic="سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلاَ إِلَهَ غَيْرُكَ"
              pronunciation="সুবহানাকা আল্লাহুম্মা ওয়া বিহামদিকা, ওয়া তাবারাকাসমুকা ওয়া তায়ালা জাদ্দুকা ওয়া লা ইলাহা গাইরুকা।"
              meaning="হে আল্লাহ! আমরা তোমারই পবিত্রতা বর্ণনা করছি, তোমারই প্রশংসা করছি। তোমার নাম বরকতময়, তোমার মর্যাদা অতি উচ্চ এবং তুমি ছাড়া আর কোনো ইলাহ নেই।"
              image={sura}
            />

            {/* ৪. সূরা ফাতিহা */}
            <Step
              number="৪"
              title="সূরা ফাতিহা"
              desc="আউযুবিল্লাহ ও বিসমিল্লাহ পড়ার পর সূরা ফাতিহা তেলাওয়াত করা।"
              arabic="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ..."
              pronunciation="আলহামদুলিল্লাহি রাব্বিল আলামীন..."
              meaning="যাবতীয় প্রশংসা আল্লাহর জন্য, যিনি বিশ্বজগতের পালনকর্তা।"
              image={sura}
            />

            {/* ৫. অন্য সূরা */}
            <Step
              number="৫"
              title="অন্য সূরা মিলানো"
              desc="সূরা ফাতিহার পর অন্য একটি সূরা বা অন্তত কোরআনের তিন আয়াত পড়া।"
              image={sura}
            />

            {/* ৬. রুকু */}
            <Step
              number="৬"
              title="রুকু"
              desc="আল্লাহু আকবার বলে রুকুতে গিয়ে তাসবীহ পাঠ করা।"
              arabic="سُبْحَانَ رَبِّيَ الْعَظِيم"
              pronunciation="সুবহানা রাব্বিয়াল আজীম"
              meaning="আমার মহান প্রতিপালকের পবিত্রতা বর্ণনা করছি।"
              image={ruku}
            />

            {/* ৭. সিজদা */}
            <Step
              number="৭"
              title="সিজদা"
              desc="রুকু থেকে দাঁড়িয়ে 'সামিআল্লাহু লিমান হামিদাহ' বলে 'আল্লাহু আকবার' বলে সিজদায় যাওয়া।"
              arabic="سُبْحَانَ رَبِّيَ الْأَعْلَى"
              pronunciation="সুবহানা রাব্বিয়াল আ'লা"
              meaning="আমার সর্বোচ্চ প্রতিপালকের পবিত্রতা বর্ণনা করছি।"
              image={sijdha}
            />

            {/* ৮. তাশাহহুদ */}
            <Step
              number="৮"
              title="তাশাহহুদ (আত্তাহিয়াতু)"
              desc="দ্বিতীয় বা শেষ রাকাতে বসে তাশাহহুদ পাঠ করা।"
              arabic="التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ..."
              pronunciation="আত্তাহিয়াতু লিল্লাহি ওয়াস সালাওয়াতু ওয়াত তায়্যিবাতু..."
              meaning="সমস্ত মৌখিক, শারীরিক ও আর্থিক ইবাদত আল্লাহর জন্য..."
              image={tashahhud}
            />

            {/* ৯. দরূদ শরীফ */}
            <Step
              number="৯"
              title="দরূদ শরীফ"
              desc="তাশাহহুদ পড়ার পর দরূদ ইব্রাহীম পাঠ করা।"
              arabic="اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ..."
              pronunciation="আল্লাহুম্মা সাল্লি আলা মুহাম্মাদিন..."
              meaning="হে আল্লাহ! আপনি মুহাম্মদ (সা.)-এর ওপর রহমত বর্ষণ করুন..."
              image={tashahhud}
            />

            {/* ১০. দোয়া মাসুরা */}
            <Step
              number="১০"
              title="দোয়া মাসুরা"
              desc="সালাম ফেরানোর পূর্বে নিজের জন্য ক্ষমা চেয়ে এই দোয়াটি পাঠ করা।"
              arabic="اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا..."
              pronunciation="আল্লাহুম্মা ইন্নী জালামতু নাফসী..."
              meaning="হে আল্লাহ! আমি নিজের ওপর অনেক জুলুম করেছি..."
              image={tashahhud}
            />

            {/* ১১. সালাম */}
            <Step
              number="১১"
              title="সালাম"
              desc="প্রথমে ডানে এবং পরে বামে মুখ ফিরিয়ে সালাম দিয়ে নামাজ শেষ করা।"
              arabic="السَّلامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ"
              pronunciation="আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ"
              meaning="আপনাদের ওপর আল্লাহর শান্তি ও রহমত বর্ষিত হোক।"
              image={salam}
            />

            {/* ১২. মোনাজাত (ঐচ্ছিক) */}
            <Step
              number="১২"
              title="মোনাজাত"
              desc="নামাজ শেষে আল্লাহর কাছে বিনয়ের সাথে হাত তুলে দোয়া করা।"
              image={monajaat}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Step Component ---
const Step = ({
  number,
  title,
  desc,
  arabic,
  pronunciation,
  meaning,
  image,
}) => (
  <div className="group flex flex-col md:flex-row gap-6 p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border-l-8 border-l-green-600 relative overflow-hidden">
    {/* Background Decorative Element */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

    {/* Number Badge */}
    <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-green-50">
      {number}
    </div>

    <div className="relative z-10 flex-grow flex flex-col md:flex-row justify-between gap-8">
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-extrabold text-green-900 group-hover:text-green-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed font-medium">
          {desc}
        </p>

        {arabic && (
          <div className="mt-4 p-5 bg-[#F9FAF7] rounded-2xl space-y-4 border border-green-100 shadow-inner">
            <p className="text-right text-green-800 font-serif text-2xl md:text-3xl leading-loose font-bold">
              {arabic}
            </p>
            <div className="space-y-2 pt-2 border-t border-green-100">
              <p className="text-sm text-gray-700">
                <strong>উচ্চারণ:</strong>{" "}
                <span className="text-green-700">{pronunciation}</span>
              </p>
              <p className="text-sm text-gray-600 italic">
                <strong>অর্থ:</strong> {meaning}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Image Section */}
      {image && (
        <div className="flex-shrink-0 self-center md:self-start">
          <div className="w-32 h-44 md:w-40 md:h-56 overflow-hidden rounded-2xl border-4 border-white shadow-2xl ring-1 ring-gray-100 group-hover:rotate-2 transition-transform duration-500">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110  duration-1000"
            />
          </div>
        </div>
      )}
    </div>
  </div>
);

export default PrayerDetails;
