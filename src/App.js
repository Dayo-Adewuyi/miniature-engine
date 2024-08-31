import React from 'react';
import './App.css';
import { WalletProvider } from './context/Context';
import Header from './components/Header';
import Footer from './components/Footer';
import GigsList from './components/GigsList';
import gigsData from './components/Gigs';

function App() {
  return (
    <WalletProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative flex items-center justify-between px-[50px] bg-white py-16">
            <div className="absolute left-0 top-10 z-0">
              <img src="assets/bitmapGrey 1.png" alt="Background Hexagon" width={280} height={280} />
            </div>

            <div className="max-w-[50%] z-10 mb-[300px] ml-[30px] relative">
              <h2 className="text-[#263238] text-[20px] mb-[25px]">Are You Looking For A Quick Gig?!</h2>
              <h3 className="text-500 text-[#ff0909] font-bold text-[40px] mb-[10px]">EquiBloc Got You!</h3>
              <p className="text-[#7d7d7d] text-[18px] mb-[5px]">Connect your wallet to get started</p>
              <button className="bg-[#ff0909] text-white px-8 py-2 rounded-md font-bold">Get Started</button>
            </div>

            <div className="relative z-10">
              <div className="absolute right-[-50px] bottom-[-90px] z-0">
                <img src="assets/bitmapGrey 2.png" alt="Background Hexagon" width={280} height={280} />
              </div>
              <div className="relative z-10 mr-[90px]">
                <img src="assets/bro.png" alt="Girl Coding Illustration" width={500} height={500} />
              </div>
            </div>
          </section>

          {/* Partners */}
          <section className="text-center py-[50px] px-5">
            <h3 className="text-red-500 text-[24px] mb-5">Our Partners</h3>
            <div className="flex justify-center flex-wrap items-center gap-8">
              <div className="w-[120px] h-[60px] relative">
                <img src="assets/optimism.png" alt="OPTIMISM" style={{ objectFit: "contain", width: '100%', height: '100%' }} />
              </div>
              <div className="w-[120px] h-[60px] relative">
                <img src="assets/the-graph.png" alt="The Graph" style={{ objectFit: "contain", width: '100%', height: '100%' }} />
              </div>
              <div className="w-[120px] h-[60px] relative">
                <img src="assets/web3ladies-logo.png" alt="Web3 Ladies" style={{ objectFit: "contain", width: '100%', height: '100%' }} />
              </div>
              <div className="w-[120px] h-[60px] relative">
                <img src="assets/circles-logo.png" alt="Circles" style={{ objectFit: "contain", width: '100%', height: '100%' }} />
              </div>
              <div className="w-[120px] h-[60px] relative">
                <img src="assets/buidl.png" alt="BuildGuidl" style={{ objectFit: "contain", width: '100%', height: '100%' }} />
              </div>
              <div className="w-[120px] h-[60px] relative">
                <img src="assets/esp-logo.png" alt="Ethereum support program" style={{ objectFit: "contain", width: '100%', height: '100%' }} />
              </div>
              <div className="w-[120px] h-[60px] relative">
                <img src="assets/meta-logo.png" alt="Meta Pool" style={{ objectFit: "contain", width: '100%', height: '100%' }} />
              </div>
              <div className="w-[120px] h-[60px] relative">
                <img src="assets/web3.png" alt="Web3 Bridge" style={{ objectFit: "contain", width: '100%', height: '100%' }} />
              </div>
            </div>
          </section>

          {/* Trending Jobs Section */}
          <section className="relative text-center py-[50px] px-5 bg-white">
            <div className="absolute left-[0px] top-0">
              <img src="assets/bitmapGrey 1.png" alt="Hexagon" width={250} height={250} />
            </div>
            <div className="absolute right-0 top-[580px]">
              <img src="assets/bitmapGrey 2.png" alt="Hexagon" width={250} height={250} />
            </div>

            <h2 className="text-red-500 text-[24px] mb-5">Trending Jobs</h2>
            <GigsList gigs={gigsData} /> {/* Pass gigsData as a prop */}
            <button className="mt-[60px] bg-[#ff0909] text-white px-8 py-2 rounded-md font-bold">View all</button>
          </section>

          {/* About Us Section */}
          <section className="flex justify-between items-center px-[50px] py-16">
            <div className="max-w-[50%] ml-8">
              <h2 className="text-[#263238] text-[24px] mb-[25px]">About Us</h2>
              <p className="text-[#7d7d7d] text-[18px] mb-[15px]">
                We are a team dedicated to connecting freelancers with quick gigs.
              </p>
              <div className="flex gap-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="assets/TwitterX.svg" alt="Twitter" width={40} height={40} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="assets/Instagram.svg" alt="Instagram" width={40} height={40} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src="assets/LinkedIn.svg" alt="LinkedIn" width={40} height={40} />
                </a>
              </div>
              <button className="mt-5 bg-[#ff0909] text-white px-8 py-2 rounded-md font-bold">
                Learn More
              </button>
            </div>
            <div className="relative right-20">
              <img src="assets/bro1.png" alt="Bro Illustration" width={350} height={350} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </WalletProvider>
  );
}

export default App;
