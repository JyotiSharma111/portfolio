import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const HoroscopeDashboard = () => {
  const [dob, setDob] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [horoscope, setHoroscope] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
  // Calculate zodiac sign based on date of birth
  const calculateZodiac = (dob) => {
    if (!dob) return "";
    const date = new Date(dob);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
  };

  // Fetch today's horoscope
  const fetchHoroscope = async () => {
    const sign = calculateZodiac(dob);
    if (!sign) {
      alert("Please select a date");
      return;
    }

    setZodiac(sign);
    setLoading(true);

    try {
      const response = await fetch(
        `https://corsproxy.io/?https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=today`
      );
      const data = await response.json();
      setHoroscope(data.data.horoscope);
    } catch (error) {
      console.log("API error:", error);
      alert("Failed to fetch horoscope. Try again later.");
    }

    setLoading(false);
  };

  const zodiacIcons = {
    Aries: "♈",
    Taurus: "♉",
    Gemini: "♊",
    Cancer: "♋",
    Leo: "♌",
    Virgo: "♍",
    Libra: "♎",
    Scorpio: "♏",
    Sagittarius: "♐",
    Capricorn: "♑",
    Aquarius: "♒",
    Pisces: "♓",
  };

  const handleLogOut=()=>{
    localStorage.removeItem("loggInUser")
    navigate("/projects/auth/login")
  }
  return (
  
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-100 via-white to-purple-100 px-4">
      
      <div className="flex justify-end w-full max-w-md mb-4">
  <button
    onClick={handleLogOut}
    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
  >
    Logout
  </button>
</div>
   
      <h1 className="font-bold text-3xl mb-6">Horoscope Dashboard</h1>

      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        onKeyDown={(e)=>{
            if (e.key==="Enter"){
                fetchHoroscope()
            }
        }}
        className="p-2 rounded border border-gray-300 mb-4"
      />

      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 mb-4"
        onClick={fetchHoroscope}
      >
        Show Today's Horoscope
      </button>

      {loading && <p>Loading...</p>}

      {horoscope && (
        <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-md">
          <h2 className="font-bold text-xl mb-2">
            Your zodiac sign: {zodiacIcons[zodiac]} {zodiac}
          </h2>
          <p>{horoscope}</p>
        </div>
      )}
    </div>
  );
};

export default HoroscopeDashboard;