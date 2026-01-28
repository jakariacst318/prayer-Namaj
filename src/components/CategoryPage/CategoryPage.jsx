import React from 'react';
import { useParams } from 'react-router';
import prayerData from '../../../public/prayerData.json'; // আপনার JSON পাথ
import PrayerDetails from '../../pages/PrayerDetails/PrayerDetails';

const CategoryPage = () => {
    // URL থেকে নামটা ধরবে (যেমন: ফজর বা যোহর)
    const { prayerName } = useParams();

    // JSON থেকে ওই নামের ডাটা খুঁজে বের করা
    const data = prayerData.find(item => item.path === prayerName);

    // যদি ডাটা না পাওয়া যায়
    if (!data) {
        return (
            <div className="text-center py-20 text-2xl font-bold text-red-500">
                দুঃখিত! এই তথ্যটি পাওয়া যায়নি।
            </div>
        );
    }

    // ডাটা পাওয়া গেলে PrayerDetails-এ পাঠিয়ে দেওয়া
    return (
        <PrayerDetails 
            name={data.name} 
            subtitle={data.subtitle}
            rakats={data.rakats}
            time={data.time}
            niyat={data.niyat}
        />
    );
};

export default CategoryPage;