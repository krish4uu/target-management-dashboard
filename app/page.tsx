"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import BarChart from "@/components/BarChart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Navbar />
      <div className="flex flex-col pt-8 justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Target Management
        </h1>
        <Link
          href="/dashboard"
          className="text-2xl text-blue-500 hover:underline"
        >
          Go to Dashboard
        </Link>
      </div>
      <BarChart filter="" />
      <Footer />
    </main>
  );
}
