import React from 'react';

const CityDetailModal = ({ city, onClose }) => {
  if (!city) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      
      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row border border-slate-100 max-h-[85vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-slate-900/50 hover:bg-slate-900/70 text-white cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* City Image */}
        <div className="w-full md:w-1/2 h-48 md:h-auto min-h-[220px]">
          <img 
            src={city.image} 
            alt={city.name} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Details Content */}
        <div className="w-full md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between max-h-[calc(85vh-220px)] md:max-h-[85vh] gap-4">
          <div>
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{city.country}</span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">{city.name}</h2>
            <div className="text-xs font-semibold text-amber-500 mt-1 flex items-center gap-1">
              <span>★ Rating: {city.rating} / 5.0</span>
            </div>
            
            <p className="text-sm text-slate-605 mt-3 leading-relaxed">
              {city.description}
            </p>
          </div>

          <div className="space-y-3 pt-3 border-t border-slate-150">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Places to Visit</span>
              <ul className="list-disc pl-4 text-xs text-slate-705 space-y-1">
                {city.places.map((place, index) => (
                  <li key={index}>{place}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-405 uppercase tracking-wider block mb-1">Popular Foods</span>
              <div className="flex flex-wrap gap-1">
                {city.food.map((food, index) => (
                  <span key={index} className="text-xs px-2 py-0.5 bg-amber-50 text-amber-800 rounded font-medium">🍲 {food}</span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CityDetailModal;
