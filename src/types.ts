export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  completedAt?: Date;
}

export type FilterType = 'all' | 'active' | 'completed';
export type SortType = 'created' | 'priority' | 'alphabetical';