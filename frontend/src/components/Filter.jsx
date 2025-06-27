// src/components/Filter.js
import { FaFilter } from "react-icons/fa";

const Filter = ({ onFilterChange }) => {
  return (
    <div className="w-full bg-gray-800 border border-gray-700 rounded-lg shadow px-4 py-3 flex items-center gap-3">
      <FaFilter className="text-blue-400 text-sm" />
      <label htmlFor="category" className="text-sm font-medium text-gray-300">
        Filter by:
      </label>
      <select
        id="category"
        onChange={(e) => onFilterChange(e.target.value)}
        className="flex-1 p-2 border border-gray-600 rounded-md text-sm text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Categories</option>
        <option value="Fiction">Fiction</option>
        <option value="Self-Help">Self-Help</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Productivity">Productivity</option>
        <option value="History">History</option>
        <option value="Motivation">Motivation</option>
      </select>
    </div>
  );
};

export default Filter;
