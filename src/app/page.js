"use client";
import { CloseIcon } from "@/components/CloseIcon";
import { Logo } from "@/components/Logo";
import { SearchIcon } from "@/components/SearchIcon";
import { useState } from "react";

export default function Home() {
  const [isInputVisible, setInputVisible] = useState(false);
  const handleSearch = () => {
    setInputVisible((prepValue) => !prepValue);
  };
  return (
    <nav className="bg-gray-700 p-4 flex justify-between fixed w-full gap-3 items-center min-h-[64px]">
      <div className="flex gap-10">
        <Logo />
        <ul className="gap-10 font-bold hidden lg:flex">
          <li>Browse</li>
          <li>Following</li>
        </ul>
      </div>
      {isInputVisible ? (
        <div className="flex bg-gray-950 rounded-md py-1 px-2 lg:hidden">
          <SearchIcon />
          <input className="bg-transparent ml-2 outline-none" placeholder="Search..." />
          <button onClick={handleSearch}>
            <CloseIcon />
          </button>
        </div>
      ) : (
        <button className="lg:hidden" onClick={handleSearch}>
          <SearchIcon />
        </button>
      )}
      <div className="hidden lg:flex flex-1 justify-center">
        <div className="bg-gray-950 rounded-md py-1 px-2 flex hover:bg-slate-800">
          <SearchIcon />
          <input className="bg-transparent ml-2 outline-none" placeholder="Search..." />
        </div>
      </div>
    </nav>
  );
}
