import React, { useMemo } from 'react';
import { CheckSquare, Sparkles } from 'lucide-react';
import { Task, FilterType, SortType } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import TaskInput from './components/TaskInput';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('taskflow-tasks', []);
  const [searchTerm, setSearchTerm] = useLocalStorage<string>('taskflow-search', '');
  const [filter, setFilter] = useLocalStorage<FilterType>('taskflow-filter', 'all');
  const [sortBy, setSortBy] = useLocalStorage<SortType>('taskflow-sort', 'created');

  const addTask = (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  const toggleComplete = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              completedAt: !task.completed ? new Date() : undefined,
            }
          : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, ...updates } : task
      )
    );
  };

  const filteredAndSortedTasks = useMemo(() => {
    let filtered = tasks;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    switch (filter) {
      case 'active':
        filtered = filtered.filter(task => !task.completed);
        break;
      case 'completed':
        filtered = filtered.filter(task => task.completed);
        break;
      default:
        break;
    }

    // Apply sorting
    switch (sortBy) {
      case 'priority':
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        filtered.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
        break;
      case 'alphabetical':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'created':
      default:
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
    }

    return filtered;
  }, [tasks, searchTerm, filter, sortBy]);

  const taskCounts = useMemo(() => ({
    total: tasks.length,
    active: tasks.filter(task => !task.completed).length,
    completed: tasks.filter(task => task.completed).length,
  }), [tasks]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
              <CheckSquare className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              TaskFlow
            </h1>
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Streamline your productivity with our beautifully designed task management system. 
            Create, organize, and complete your tasks with style.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <TaskFilter
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              filter={filter}
              onFilterChange={setFilter}
              sortBy={sortBy}
              onSortChange={setSortBy}
              taskCounts={taskCounts}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <TaskInput onAddTask={addTask} />
            <TaskList
              tasks={filteredAndSortedTasks}
              onToggleComplete={toggleComplete}
              onDeleteTask={deleteTask}
              onUpdateTask={updateTask}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            Made with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;