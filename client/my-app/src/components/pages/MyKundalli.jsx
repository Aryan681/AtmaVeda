// TraditionalKundali.jsx

import React from 'react';
import './MyKundalli.css'

// Sample data structure for a birth chart
const sampleData = {
  name: "Aarya Sharma",
  gender: "Female",
  dob: "1995-03-15",
  timeOfBirth: "10:45",
  location: {
    city: "Pune",
    state: "Maharashtra",
    latitude: 18.5204,
    longitude: 73.8567,
    timezone: 5.5
  },
  houses: [
    { number: 1, zodiacSign: "Leo" },
    { number: 2, zodiacSign: "Virgo" },
    { number: 3, zodiacSign: "Libra" },
    { number: 4, zodiacSign: "Scorpio" },
    { number: 5, zodiacSign: "Sagittarius" },
    { number: 6, zodiacSign: "Capricorn" },
    { number: 7, zodiacSign: "Aquarius" },
    { number: 8, zodiacSign: "Pisces" },
    { number: 9, zodiacSign: "Aries" },
    { number: 10, zodiacSign: "Taurus" },
    { number: 11, zodiacSign: "Gemini" },
    { number: 12, zodiacSign: "Cancer" }
  ],
  planetaryDetails: {
    Sun: { house: 9, zodiacSign: "Aries", degreeInSign: "15.90" },
    Moon: { house: 11, zodiacSign: "Cancer", degreeInSign: "5.90" },
    Mars: { house: 2, zodiacSign: "Virgo", degreeInSign: "25.90" },
    Mercury: { house: 10, zodiacSign: "Taurus", degreeInSign: "20.90" },
    Jupiter: { house: 12, zodiacSign: "Leo", degreeInSign: "5.90" },
    Venus: { house: 11, zodiacSign: "Gemini", degreeInSign: "10.90" },
    Saturn: { house: 2, zodiacSign: "Libra", degreeInSign: "5.90" }
  }
};

const TraditionalKundali = ({ data = sampleData }) => {
  // Planet symbols mapping
  const planetSymbols = {
    Sun: '☉',
    Moon: '☽',
    Mars: '♂',
    Mercury: '☿',
    Jupiter: '♃',
    Venus: '♀',
    Saturn: '♄'
  };

  // Zodiac symbols mapping
  const zodiacSymbols = {
    Aries: '♈',
    Taurus: '♉',
    Gemini: '♊',
    Cancer: '♋',
    Leo: '♌',
    Virgo: '♍',
    Libra: '♎',
    Scorpio: '♏',
    Sagittarius: '♐',
    Capricorn: '♑',
    Aquarius: '♒',
    Pisces: '♓'
  };

  // Helper function to get planets in a specific house
  const getPlanetsInHouse = (houseNumber) => {
    return Object.entries(data.planetaryDetails)
      .filter(([_, details]) => details.house === houseNumber)
      .map(([planet, details]) => ({
        name: planet,
        symbol: planetSymbols[planet],
        degree: parseFloat(details.degreeInSign).toFixed(0)
      }));
  };

  // Helper function to get zodiac sign for a house
  const getHouseZodiac = (houseNumber) => {
    const house = data.houses.find(h => h.number === houseNumber);
    return house ? zodiacSymbols[house.zodiacSign] : '';
  };

  // House component
  const House = ({ number, className = '' }) => {
    const planets = getPlanetsInHouse(number);
    const zodiacSign = getHouseZodiac(number);

    return (
      <div className={`border-gray-800 p-2 relative ${className}`}>
        <div className="absolute top-2 left-2 text-sm font-bold">{number}</div>
        <div className="absolute top-2 right-2 text-sm">{zodiacSign}</div>
        <div className="flex flex-col items-center justify-center h-full">
          {planets.map((planet, index) => (
            <div key={index} className="text-xs">
              {planet.symbol} {planet.degree}°
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Decorative corner component
  const DecorativeCorner = ({ className = '' }) => (
    <div className={`absolute w-16 h-16 ${className}`}>
      <div className="relative w-full h-full">
        <div className="absolute w-8 h-2 bg-red-600" 
             style={{ transform: 'rotate(45deg) translate(50%, 0)' }}></div>
        <div className="absolute w-4 h-2 bg-blue-400"
             style={{ transform: 'rotate(-45deg) translate(100%, 50%)' }}></div>
        <div className="absolute w-4 h-2 bg-green-400"
             style={{ transform: 'rotate(90deg) translate(-50%, 100%)' }}></div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="relative bg-[#fff9e6] p-8 rounded-lg">
        {/* Decorative corners */}
        <DecorativeCorner className="top-0 left-0" />
        <DecorativeCorner className="top-0 right-0 rotate-90" />
        <DecorativeCorner className="bottom-0 left-0 -rotate-90" />
        <DecorativeCorner className="bottom-0 right-0 rotate-180" />
        
        {/* Decorative borders */}
        <div className="absolute top-4 left-16 right-16 h-1 bg-red-600"></div>
        <div className="absolute bottom-4 left-16 right-16 h-1 bg-red-600"></div>
        <div className="absolute left-4 top-16 bottom-16 w-1 bg-red-600"></div>
        <div className="absolute right-4 top-16 bottom-16 w-1 bg-red-600"></div>

        {/* Chart title */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">Traditional Kundali Chart</h2>
          <p className="text-sm text-gray-600">{data.name} - {data.location.city}</p>
        </div>

        {/* Main chart */}
        <div className="relative border-2 border-gray-800 mx-12 my-8 aspect-[4/3]">
          {/* Grid layout */}
          <div className="grid grid-cols-3 grid-rows-4 h-full">
            <House number={12} />
            <House number={1} />
            <House number={2} />
            <House number={11} />
            <div className="border-gray-800 p-2 flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm">{data.name}</div>
                <div className="text-xs text-gray-600">
                  {new Date(data.dob).toLocaleDateString()}
                </div>
              </div>
            </div>
            <House number={3} />
            <House number={10} />
            <House number={9} />
            <House number={4} />
            <House number={8} />
            <House number={7} />
            <House number={6} />
          </div>

          {/* Diagonal lines */}
          <div className="absolute inset-0">
            <svg className="w-full h-full">
              <line x1="0" y1="0" x2="100%" y2="100%" 
                    stroke="black" strokeWidth="1" />
              <line x1="100%" y1="0" x2="0" y2="100%" 
                    stroke="black" strokeWidth="1" />
            </svg>
          </div>

          {/* Curved borders */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d="M 0,33% Q 50%,33% 100%,33% M 0,66% Q 50%,66% 100%,66%"
              stroke="black"
              fill="none"
              strokeWidth="1"
            />
            <path
              d="M 33%,0 Q 33%,50% 33%,100% M 66%,0 Q 66%,50% 66%,100%"
              stroke="black"
              fill="none"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TraditionalKundali;