import React, { useState } from 'react';
import { citiesData } from './data/citiesData';
import CityCard from './components/CityCard';
import CityDetailModal from './components/CityDetailModal';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4">
      
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-950">Top 10 Global Cities</h1>
        <p className="text-slate-500 text-sm mt-1">Explore iconic landmarks and cuisines</p>
      </div>

      {/* Cards Grid */}
      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {citiesData.map(city => (
            <CityCard 
              key={city.id} 
              city={city} 
              onExplore={setSelectedCity} 
            />
          ))}
        </div>
      </main>

      {/* Detail Modal */}
      {selectedCity && (
        <CityDetailModal 
          city={selectedCity} 
          onClose={() => setSelectedCity(null)} 
        />
      )}

    </div>
  );
};

export default App;
