import React from 'react';
import { Bookmark, Plus, Share2, MoreVertical, Download } from 'lucide-react';

interface DataItem {
  id: number;
  title: string;
  category: string;
  range: string;
  frequency: string;
  unit: string;
  coverage: { type: string; hasR?: boolean };
}

interface DataTableProps {
  data: DataItem[];
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function DataTable({ data, currentPage, itemsPerPage, onPageChange }: DataTableProps) {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold">New Releases</h2>
          <span className="bg-gray-100 px-2 py-1 rounded-md text-sm text-gray-600">
            {data.length} items
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bookmark className="h-5 w-5" />
          </button>
          <div className="relative">
            <button className="flex items-center space-x-1 bg-gray-100 px-3 py-1.5 rounded-md hover:bg-gray-200 transition-colors">
              <span>Selected (2)</span>
            </button>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="text-left p-4 text-gray-600">Title</th>
              <th className="text-left p-4 text-gray-600">Range</th>
              <th className="text-left p-4 text-gray-600">Unit</th>
              <th className="text-left p-4 text-gray-600">Coverage</th>
              <th className="text-left p-4 text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                      {item.category}
                    </div>
                    <div className="text-sm text-gray-500">{item.frequency}</div>
                  </div>
                </td>
                <td className="p-4">{item.range}</td>
                <td className="p-4">{item.unit}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full 
                    ${item.coverage.type === 'S' ? 'bg-pink-100 text-pink-600' : 
                      item.coverage.type === 'N' ? 'bg-blue-100 text-blue-600' : 
                      'bg-green-100 text-green-600'}`}>
                    {item.coverage.type}
                  </span>
                  {item.coverage.hasR && (
                    <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-600">
                      R
                    </span>
                  )}
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Add to selection">
                      <Plus className="h-4 w-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Share">
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Download">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="More options">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between p-4 border-t">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-gray-50 transition-colors"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-gray-50 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}