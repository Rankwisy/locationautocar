import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { Task } from '../types';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onUpdateTask: (id: string, updates: Partial<Task>) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleComplete, onDeleteTask, onUpdateTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
          <CheckCircle2 className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
        <p className="text-gray-500">Create your first task to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </div>
  );
};

export default TaskList;