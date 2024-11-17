import React from 'react';
import { Search, Calendar, HelpCircle, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#1a1464] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold">IndiaDataHub</div>
          <div className="relative flex-grow max-w-2xl">
            <input
              type="text"
              placeholder="Search for data and analytics..."
              className="w-full px-4 py-2 pl-10 rounded-lg bg-white/10 focus:bg-white focus:text-black"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-300" />
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <select className="bg-transparent border-none text-white cursor-pointer">
            <option value="database">Database</option>
          </select>
          <Calendar className="h-5 w-5" />
          <HelpCircle className="h-5 w-5" />
          <User className="h-8 w-8 p-1 bg-gray-200 text-[#1a1464] rounded-full" />
        </div>
      </div>
    </header>
  );
}