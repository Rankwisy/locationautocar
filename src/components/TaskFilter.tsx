import React from 'react';
import { Search, Filter, BarChart3, CheckCircle, Circle, AlertCircle } from 'lucide-react';
import { FilterType, SortType } from '../types';

interface TaskFilterProps {
  searchTerm: string;
  onSearchChange: (search: string) => void;
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  sortBy: SortType;
  onSortChange: (sort: SortType) => void;
  taskCounts: {
    total: number;
    active: number;
    completed: number;
  };
}

const TaskFilter: React.FC<TaskFilterProps> = ({
  searchTerm,
  onSearchChange,
  filter,
  onFilterChange,
  sortBy,
  onSortChange,
  taskCounts,
}) => {
  const filterButtons = [
    { key: 'all' as FilterType, label: 'All Tasks', icon: BarChart3, count: taskCounts.total },
    { key: 'active' as FilterType, label: 'Active', icon: Circle, count: taskCounts.active },
    { key: 'completed' as FilterType, label: 'Completed', icon: CheckCircle, count: taskCounts.completed },
  ];

  const sortOptions = [
    { key: 'created' as SortType, label: 'Date Created' },
    { key: 'priority' as SortType, label: 'Priority' },
    { key: 'alphabetical' as SortType, label: 'Alphabetical' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tasks..."
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Filter Buttons */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Filter by Status</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {filterButtons.map(({ key, label, icon: Icon, count }) => (
            <button
              key={key}
              onClick={() => onFilterChange(key)}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all duration-200 ${
                filter === key
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <div className="text-center">
                <div className="text-xs font-medium">{label}</div>
                <div className={`text-lg font-bold ${
                  filter === key ? 'text-blue-700' : 'text-gray-700'
                }`}>
                  {count}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Sort by</label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortType)}
          className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
        >
          {sortOptions.map(({ key, label }) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Progress Indicator */}
      {taskCounts.total > 0 && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-600">
              {taskCounts.completed} of {taskCounts.total} completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500"
              style={{
                width: `${taskCounts.total > 0 ? (taskCounts.completed / taskCounts.total) * 100 : 0}%`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskFilter;