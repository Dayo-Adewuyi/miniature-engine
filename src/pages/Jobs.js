import React, { useState } from 'react';
import Header from '../components/Header'; // Correct path to Header component
import Footer from '../components/Footer';
import GigsList from '../components/GigsList';
import gigsData from '../components/Gigs';

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="relative">
            <img
              src="/assets/bitmapGrey 2.png"
              alt="Background Hexagon"
              width={280}
              height={280}
              className="absolute top-0 right-[-30px] -z-10"
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 ml-[60px] border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img
                src="/assets/search.svg"
                alt="Search"
                width={20}
                height={20}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
            <div className="relative">
              <select
                className="appearance-none border mr-[70px] rounded-md px-4 py-2 pr-8"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>All</option>
                <option>Full Time</option>
                <option>Part Time</option>
              </select>
              <img
                src="/assets/arrow-down.svg"
                alt="Down Arrow"
                width={12}
                height={12}
                className="absolute right-3 top-1/2 mr-[70px] transform -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
          <GigsList gigs={gigsData} />
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button className="flex items-center px-3 py-1 border rounded">
              <img src="/assets/back-arrow.svg" alt="Previous" width={16} height={16} />
              <span className="ml-1">Previous</span>
            </button>
            <button className="px-3 py-1 border rounded bg-red-500 text-white">1</button>
            <button className="px-3 py-1 border rounded">2</button>
            <button className="flex items-center px-3 py-1 border rounded">
              <span className="mr-1">Next</span>
              <img src="/assets/forward-arrow.svg" alt="Next" width={16} height={16} />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobsPage;
