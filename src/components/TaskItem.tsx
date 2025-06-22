import React, { useState } from 'react';
import { Check, Trash2, Edit3, Save, X, Circle, AlertTriangle, Clock } from 'lucide-react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onUpdateTask: (id: string, updates: Partial<Task>) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDeleteTask, onUpdateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  const [editPriority, setEditPriority] = useState(task.priority);

  const handleSave = () => {
    if (editTitle.trim()) {
      onUpdateTask(task.id, {
        title: editTitle.trim(),
        description: editDescription.trim(),
        priority: editPriority,
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setEditDescription(task.description);
    setEditPriority(task.priority);
    setIsEditing(false);
  };

  const priorityConfig = {
    low: { icon: Circle, color: 'text-green-500', bg: 'bg-green-50', border: 'border-green-200' },
    medium: { icon: Circle, color: 'text-yellow-500', bg: 'bg-yellow-50', border: 'border-yellow-200' },
    high: { icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-200' },
  };

  const PriorityIcon = priorityConfig[task.priority].icon;

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(date));
  };

  return (
    <div className={`group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg ${
      task.completed ? 'opacity-75' : ''
    }`}>
      <div className="p-6">
        {isEditing ? (
          <div className="space-y-4">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full px-3 py-2 text-lg font-medium border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              placeholder="Add description..."
              rows={3}
              className="w-full px-3 py-2 text-gray-600 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">Priority:</span>
              <div className="flex gap-2">
                {Object.entries(priorityConfig).map(([level, config]) => {
                  const Icon = config.icon;
                  return (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setEditPriority(level as 'low' | 'medium' | 'high')}
                      className={`flex items-center gap-1 px-3 py-1 rounded-lg border transition-all duration-200 ${
                        editPriority === level 
                          ? `${config.bg} ${config.border} ${config.color}` 
                          : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span className="text-xs font-medium capitalize">{level}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCancel}
                className="flex items-center gap-1 px-3 py-1 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Save className="w-4 h-4" />
                Save
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <button
                  onClick={() => onToggleComplete(task.id)}
                  className={`mt-1 p-1 rounded-full border-2 transition-all duration-200 ${
                    task.completed
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 hover:border-green-400 text-transparent hover:text-green-400'
                  }`}
                >
                  <Check className="w-4 h-4" />
                </button>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-lg font-semibold transition-all duration-200 ${
                    task.completed ? 'line-through text-gray-500' : 'text-gray-800'
                  }`}>
                    {task.title}
                  </h3>
                  {task.description && (
                    <p className={`mt-1 text-gray-600 leading-relaxed ${
                      task.completed ? 'line-through opacity-75' : ''
                    }`}>
                      {task.description}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  title="Edit task"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                  title="Delete task"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div className={`flex items-center gap-2 px-3 py-1 rounded-lg ${priorityConfig[task.priority].bg} ${priorityConfig[task.priority].border} border`}>
                <PriorityIcon className={`w-3 h-3 ${priorityConfig[task.priority].color}`} />
                <span className={`text-xs font-medium capitalize ${priorityConfig[task.priority].color}`}>
                  {task.priority} Priority
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                {task.completed && task.completedAt ? (
                  <span>Completed {formatDate(task.completedAt)}</span>
                ) : (
                  <span>Created {formatDate(task.createdAt)}</span>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;