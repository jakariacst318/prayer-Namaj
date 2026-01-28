import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ইমেজ ইম্পোর্ট
import Standing from "../../assets/images/Standing-position-in-prayer.jpg";
import allahuAkbar from "../../assets/images/allahu-akbar-to-start-prayer.jpg";
import sura from "../../assets/images/sura.jfif";
import ruku from "../../assets/images/ruku.jfif";
import sijdha from "../../assets/images/sijdha.jpg";
import tashahhud from "../../assets/images/tashahhud.jpg";
import salam from "../../assets/images/salam.jfif";
import monajaat from "../../assets/images/monajaat.jpg";

const PrayerDetails = ({ name, subtitle, rakats, time, niyat }) => {
  const [steps, setSteps] = useState([]);
  const [modal, setModal] = useState({ isOpen: false, title: "", content: null });

  const imageMap = { Standing, allahuAkbar, sura, ruku, sijdha, tashahhud, salam, monajaat };

  const surahs = {
    fateha: {
      arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      pronunciation: "বিসমিল্লাহির রাহমানির রাহীম। আলহামদুলিল্লাহি রাব্বিল আলামীন। আর রাহমানির রাহীম। মালিকি ইয়াওমিদ্দীন। ইয়্যাকা না'বুদু ওয়া ইয়্যাকা নাসতায়ীন। ইহদিনাস সিরাত্বাল মুস্তাকীম। সিরাত্বাল্লাযীনা আনআমতা আলাইহিম, গাইরিল মাগদুবী আলাইহিম ওয়ালাদ্দল্লীন। আমীন।",
      meaning: "শুরু করছি আল্লাহর নামে যিনি পরম করুণাময় ও অতি দয়ালু। যাবতীয় প্রশংসা আল্লাহর জন্য, যিনি বিশ্বজগতের পালনকর্তা। যিনি পরম করুণাময় ও অতি দয়ালু। বিচার দিবসের মালিক। আমরা কেবল আপনারই ইবাদত করি এবং কেবল আপনারই সাহায্য চাই। আমাদের সরল পথ প্রদর্শন করুন। তাদের পথ, যাদের আপনি নেয়ামত দান করেছেন; তাদের পথ নয় যারা অভিশপ্ত ও পথভ্রষ্ট।",
    },
    ikhlas: {
      arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ۝ قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّমَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
      pronunciation: "বিসমিল্লাহির রাহমানির রাহীম। কুল হুওয়াল্লাহু আহাদ। আল্লাহু সামাদ। লাম ইয়ালিদ ওয়া লাম ইউলাদ। ওয়া লাম ইয়াকুল্লাহু কুফুওয়ান আহাদ।",
      meaning: "শুরু করছি আল্লাহর নামে যিনি পরম করুণাময় ও অতি দয়ালু। বলুন, তিনি আল্লাহ, এক। আল্লাহ কারো মুখাপেক্ষী নন। তিনি কাউকে জন্ম দেননি এবং কেউ তাকে জন্ম দেয়নি। এবং তার সমতুল্য কেউ নেই।",
    }
  };

  useEffect(() => {
    fetch("/prayerSteps.json")
      .then((res) => res.json())
      .then((data) => setSteps(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className="bg-[#F3F4F0] min-h-screen py-6 px-2 md:px-4 relative font-sans">
      <AnimatePresence>
        {modal.isOpen && (
          <ModalContent modal={modal} onClose={() => setModal({ ...modal, isOpen: false })} />
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
        <div className="bg-green-700 p-8 text-white text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{name}</h1>
          <p className="text-lg opacity-90 font-medium">{subtitle}</p>
        </div>

        <div className="p-4 md:p-10">
          <InfoGrid rakats={rakats} time={time} />

          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 my-12">
            নামাজ পড়ার পূর্ণাঙ্গ নিয়ম
          </h2>

          <div className="space-y-10">
            {steps.map((step) => (
              <Step
                key={step._id}
                number={step._id}
                title={step.title}
                desc={step._id === "1" ? niyat : step.desc}
                arabic={step.arabic}
                pronunciation={step.pronunciation}
                meaning={step.meaning}
                image={imageMap[step.images]}
                action={step.isModal && (
                  <button
                    onClick={() => setModal({
                      isOpen: true,
                      title: step.modalType === "fateha" ? "সূরা আল-ফাতিহা" : "সূরা আল-ইখলাস",
                      content: surahs[step.modalType]
                    })}
                    className={`mt-4 ${step.modalType === 'fateha' ? 'bg-green-600' : 'bg-blue-600'} text-white px-6 py-2 rounded-full font-bold shadow-md hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer`}
                  >
                    📖 পূর্ণাঙ্গ সূরা দেখুন
                  </button>
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- সাব-কম্পোনেন্টসমূহ ---
const InfoGrid = ({ rakats, time }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
    <div className="p-6 bg-green-50 rounded-3xl border border-green-100 shadow-sm">
      <h3 className="mb-4 flex items-center gap-2 text-2xl font-extrabold text-green-800">📍 রাকাতের বিবরণ</h3>
      <ul className="space-y-3 font-medium text-gray-700">
        {rakats?.map((r, i) => (
          <li key={i} className="flex justify-between border-b border-green-200 pb-2">
            <span>{r.type}</span> <span className="text-green-700 font-bold">{r.count} রাকাত</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
      <h3 className="mb-4 text-2xl font-extrabold text-green-800">⏰ নামাজের সময়</h3>
      <p className="text-gray-700 text-lg">{time}</p>
    </div>
  </div>
);

const Step = ({ number, title, desc, arabic, pronunciation, meaning, image, action }) => (
  <div className="group flex flex-col md:flex-row gap-6 p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border-l-8 border-l-green-600">
    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">{number}</div>
    <div className="flex-grow flex flex-col md:flex-row justify-between gap-8">
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-extrabold text-green-800">{title}</h3>
        <p className="text-gray-600 text-lg font-medium whitespace-pre-line">{desc}</p>
        {action}
        {arabic && (
          <div className="mt-4 p-5 bg-[#F9FAF7] rounded-2xl border border-green-100">
            <p className="text-right text-green-700 font-serif text-2xl leading-loose font-bold whitespace-pre-line">{arabic}</p>
            <div className="mt-3 space-y-2 border-t pt-3 border-green-100">
              <p className="whitespace-pre-line text-gray-400"><strong>উচ্চারণ:</strong> <span className="text-green-800">{pronunciation}</span> </p>
              <p className="whitespace-pre-line text-gray-400 italic"><strong>অর্থ:</strong> <span className="text-gray-600 italic"> {meaning}</span></p>
            </div>
          </div>
        )}
      </div>
      {image && (
        <div className="flex-shrink-0 w-32 h-44 md:w-40 md:h-56 overflow-hidden rounded-2xl border-4 border-white shadow-xl">
          <img src={image} className="w-full h-full object-cover group-hover:scale-110 duration-700" alt={title} />
        </div>
      )}
    </div>
  </div>
);

const ModalContent = ({ modal, onClose }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-[2.5rem] max-w-2xl w-full p-6 md:p-10 shadow-2xl relative z-10 overflow-y-auto max-h-[90vh] border-t-8 border-green-600">
      <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 text-2xl hover:text-red-500">✕</button>
      <h3 className="text-3xl font-bold text-green-800 mb-6">{modal.title}</h3>
      <div className="space-y-6">
        <p className="text-right text-green-900 font-serif text-2xl md:text-3xl leading-loose font-bold bg-green-50 p-6 rounded-3xl whitespace-pre-line">{modal.content?.arabic}</p>
        <div className="space-y-4">
          <p className="text-gray-800 leading-relaxed text-lg border-l-4 rounded-2xl border-green-400 p-4 whitespace-pre-line"><strong>উচ্চারণ:</strong> {modal.content?.pronunciation}</p>
          <p className="text-gray-600 italic leading-relaxed text-lg bg-blue-50 p-4 rounded-2xl border-l-4 border-blue-400 whitespace-pre-line"><strong>অর্থ:</strong> {modal.content?.meaning}</p>
        </div>
      </div>
    </motion.div>
  </div>
);

export default PrayerDetails;