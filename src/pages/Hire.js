"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useWallet } from '../context/WalletContext';

const CreateGigPage = () => {
  const [companyLogo, setCompanyLogo] = useState(null);
  const [jobTitle, setJobTitle] = useState("");
  const [prompt, setPrompt] = useState("")
  const [companyName, setCompanyName] = useState("");
  const [rate, setRate] = useState("");
  const [duration, setDuration] = useState("");
  const [type, setType] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [kpis, setKpis] = useState([]);
  const { createGig, generateText } = useWallet();

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setCompanyLogo(event.target.files[0]);
    }
  };

  const handleKpiChange = (event) => {
    const value = event.target.value;
    // Split the input by commas and remove extra whitespace
    const kpiArray = value.split(",").map(kpi => kpi.trim());
    setKpis(kpiArray);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    // Log the form submission for debugging
    console.log({
      companyLogo,
      jobTitle,
      companyName,
      rate,
      duration,
      type,
      aboutCompany,
      jobDescription,
      kpis,
    });

    await createGig(companyLogo, jobDescription, kpis, rate);

    // Reset form fields after submission
    setCompanyLogo(null);
    setJobTitle("");
    setCompanyName("");
    setRate("");
    setDuration("");
    setType("");
    setAboutCompany("");
    setJobDescription("");
    setKpis([]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Create a New Gig</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* File Upload */}
            <div className="flex flex-col items-center space-y-2">
              <label htmlFor="companyLogo" className="block text-sm font-medium text-gray-700 text-center">
                Company Logo
              </label>
              <div className="flex items-center">
                <input
                  type="file"
                  id="companyLogo"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
                <button
                  type="button"
                  onClick={() => document.getElementById('companyLogo').click()}
                  className="bg-[#ff0909] bg-500 text-white mb-6 px-4 py-2 rounded-md hover:bg-[#ff0909] bg-700"
                >
                  Choose File
                </button>
                {companyLogo && <span className="ml-2">{companyLogo.name}</span>}
              </div>
            </div>

            {/* Job Title */}
            <div className="flex flex-col items-center space-y-2">
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 text-center">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="mt-1 block w-[60%] mb-6 border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* Company Name */}
            <div className="flex flex-col items-center space-y-2">
              <label htmlFor="companyName" className="block mt-6 text-sm font-medium text-gray-700 text-center">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="mt-1 block w-[60%] border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* Rate */}
            <div className="flex flex-col items-center space-y-2">
              <label htmlFor="rate" className="block text-sm mt-6 font-medium text-gray-700 text-center">
                Rate
              </label>
              <input
                type="text"
                id="rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="mt-1 block w-[60%] border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* Duration */}
            <div className="flex flex-col items-center space-y-2">
              <label htmlFor="duration" className="block text-sm mt-6 font-medium text-gray-700 text-center">
                Duration
              </label>
              <input
                type="text"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="mt-1 block w-[60%] border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* Type */}
            <div className="flex flex-col items-center space-y-2">
              <label htmlFor="type" className="block text-sm mt-6 font-medium text-gray-700 text-center">
                Type
              </label>
              <input
                type="text"
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="mt-1 block w-[60%] border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* About the Company */}
            <div className="flex flex-col items-center space-y-2">
              <label htmlFor="aboutCompany" className="block text-sm mt-6 font-medium text-gray-700 text-center">
                About the Company
              </label>
              <textarea
                id="aboutCompany"
                value={aboutCompany}
                onChange={(e) => setAboutCompany(e.target.value)}
                className="mt-1 block w-[60%] border border-gray-300 rounded-md p-2"
                rows={4}
                required
              />
            </div>

            {/* Job Description */}
            <div className="flex flex-col items-center space-y-2">
              <label htmlFor="jobDescription" className="block text-sm mt-4 font-medium text-gray-700 text-center">
                Job Description
              </label>
              <textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="mt-1 block w-[60%] mb-6 border border-gray-300 rounded-md p-2"
                rows={4}
                required
              />
            </div>

            {/* KPIs */}
            <div className="flex flex-col items-center space-y-2">
              <label htmlFor="kpis" className="block text-sm font-medium text-gray-700 text-center">
                KPIs (comma-separated)
              </label>
              <textarea
                id="kpis"
                value={kpis.join(", ")}
                onChange={handleKpiChange}
                className="mt-1 block w-[60%] mb-6 border border-gray-300 rounded-md p-2"
                rows={4}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#ff0909] mb-2 bg-500 text-white px-4 py-2 rounded-md hover:bg-[#ff0909] bg-700"
              >
                Post Gig
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateGigPage;
