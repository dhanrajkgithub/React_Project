import React, { useState } from 'react';

const CityCard = ({ city, onExplore }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between">
      
      {/* City Image */}
      <div className="relative h-56">
        <img 
          src={city.image} 
          alt={city.name} 
          className="w-full h-full object-cover" 
        />
        
        {/* Like Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`absolute top-4 right-4 p-2 rounded-full shadow transition-all ${
            isLiked ? 'bg-rose-500 text-white' : 'bg-white/90 text-rose-500 hover:scale-105'
          }`}
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        {/* Rating Badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 px-2.5 py-1 rounded-lg text-xs font-bold text-slate-800 shadow flex items-center gap-1">
          <span>★</span> {city.rating}
        </div>
      </div>

      {/* Card Details */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{city.country}</span>
          <h3 className="text-xl font-bold text-slate-900 mt-1">{city.name}</h3>
          <p className="text-sm text-slate-650 mt-2 line-clamp-3 leading-relaxed">{city.description}</p>
        </div>

        {/* Places & Food Badges */}
        <div className="space-y-3 pt-3 border-t border-slate-100">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Attractions</span>
            <div className="flex flex-wrap gap-1">
              {city.places.map((place, i) => (
                <span key={i} className="text-xs px-2.5 py-0.5 bg-indigo-50 text-indigo-600 rounded-md font-medium">{place}</span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Famous Food</span>
            <div className="flex flex-wrap gap-1">
              {city.food.map((food, i) => (
                <span key={i} className="text-xs px-2.5 py-0.5 bg-amber-50 text-amber-700 rounded-md font-medium">🍽️ {food}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <button 
          onClick={() => onExplore(city)}
          className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Explore Details</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

    </div>
  );
};

export default CityCard;
