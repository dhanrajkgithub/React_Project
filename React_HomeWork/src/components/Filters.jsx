import React from 'react';

const Filters = ({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, totalCount }) => {
  const categories = ["All", "Historical", "Metropolitan", "Heritage", "Coastal", "Scenic"];

  return (
    <div className="w-full max-w-4xl mx-auto mb-10 space-y-6">
      
      {/* Search & Statistics Box */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative w-full md:max-w-md group">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg 
              className="w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by city, country, food, or attractions..."
            className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Counter Badge */}
        <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 px-4 py-2 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200/50 dark:border-slate-750">
          Showing <span className="text-indigo-600 dark:text-indigo-400 font-bold">{totalCount}</span> {totalCount === 1 ? 'City' : 'Cities'}
        </div>

      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2.5 items-center justify-start overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-750 border border-slate-100 dark:border-slate-700/60 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

    </div>
  );
};

export default Filters;
