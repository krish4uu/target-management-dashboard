'use client'
import BarChart from "@/components/BarChart";
import TargetTable from "@/components/TargetTable";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Dashboard() {
  const [filter, setFilter] = useState("");

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex flex-col p-4 gap-6 flex-grow md:flex-row">
        <div className="flex flex-col gap-4 md:gap-6 w-full items-center">
          <div className="flex flex-col gap-2 w-full md:w-1/3">
            <label htmlFor="filter" className="text-lg">Filter by Pipeline Status:</label>
            <select
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-2 rounded-md bg-slate-800 border border-slate-700 text-white"
            >
              <option value="">All</option>
              <option value="Hot">Hot</option>
              <option value="Active">Active</option>
              <option value="Passed">Passed</option>
              <option value="Cold">Cold</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <div className="flex w-full justify-center">
            <BarChart filter={filter} />
          </div>
        </div>
        <div className="w-full">
          <TargetTable filter={filter} />
        </div>
      </main>
      <Footer/>
    </div>
  );
}
