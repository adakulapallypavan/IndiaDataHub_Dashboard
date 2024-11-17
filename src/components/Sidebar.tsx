import React, { useState } from 'react';
import { ChevronDown, Grid, ChevronRight } from 'lucide-react';
import { categories } from '../data/dummyData';

interface SidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Sidebar({ selectedCategory, onCategoryChange }: SidebarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  return (
    <div className="w-64 bg-gray-50 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="p-4">
        <div className="bg-blue-100 rounded-lg p-4 mb-4">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between text-gray-700 font-medium"
          >
            <span>Category:</span>
            <ChevronDown className={`h-4 w-4 transform transition-transform ${isDropdownOpen ? '' : '-rotate-90'}`} />
          </button>
          {isDropdownOpen && (
            <div className="mt-2 space-y-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-200 text-blue-800'
                      : 'hover:bg-blue-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-1">
          {categories.find(c => c.id === selectedCategory)?.subcategories.map((sub, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer group"
            >
              <div className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                <span className="group-hover:text-gray-900">{sub}</span>
              </div>
              {index === 0 && <Grid className="h-4 w-4 text-gray-500" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}