import React, { useState } from 'react';
import { Plus, Zap, Circle, AlertTriangle } from 'lucide-react';
import { Task } from '../types';

interface TaskInputProps {
  onAddTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask({
        title: title.trim(),
        description: description.trim(),
        completed: false,
        priority,
      });
      setTitle('');
      setDescription('');
      setPriority('medium');
      setIsExpanded(false);
    }
  };

  const priorityConfig = {
    low: { icon: Circle, color: 'text-green-500', bg: 'bg-green-50 border-green-200' },
    medium: { icon: Circle, color: 'text-yellow-500', bg: 'bg-yellow-50 border-yellow-200' },
    high: { icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50 border-red-200' },
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
      <form onSubmit={handleSubmit} className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Plus className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Add New Task</h2>
        </div>

        <div className="space-y-4">
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              placeholder="What needs to be done?"
              className="w-full px-4 py-3 text-lg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
            />
          </div>

          <div className={`transition-all duration-300 ease-in-out ${
            isExpanded ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
          }`}>
            <div className="space-y-4">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a description (optional)"
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level</label>
                <div className="flex gap-2">
                  {Object.entries(priorityConfig).map(([level, config]) => {
                    const Icon = config.icon;
                    return (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setPriority(level as 'low' | 'medium' | 'high')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                          priority === level 
                            ? `${config.bg} border-current ${config.color}` 
                            : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium capitalize">{level}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            {isExpanded && (
              <button
                type="button"
                onClick={() => {
                  setIsExpanded(false);
                  setTitle('');
                  setDescription('');
                  setPriority('medium');
                }}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={!title.trim()}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskInput;