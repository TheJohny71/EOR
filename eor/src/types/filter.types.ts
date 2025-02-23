// filter.types.ts
export interface DateRange {
    start: string | null;
    end: string | null;
  }
  
  export interface FilterState {
    status: OrderStatus[];
    agencies: string[];
    dateRange: DateRange;
    tags: string[];
    assignees: string[];
    searchQuery: string;
  }
  
  export interface SortConfig {
    field: keyof Order;
    direction: 'asc' | 'desc';
  }