// stores/orderStore.ts
import { create } from 'zustand';
import type { Order, FilterState, SortConfig, OrderStatus } from '../types/order.types';

type OrderStore = {
  // State
  orders: Order[];
  loading: boolean;
  error: string | null;
  filters: FilterState;
  sort: SortConfig;
  
  // Actions
  setOrders: (orders: Order[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setFilters: (filters: Partial<FilterState>) => void;
  setSort: (sort: SortConfig) => void;
  getFilteredOrders: () => Order[];
}

export const useOrderStore = create<OrderStore>((set, get) => ({
  // Initial state
  orders: [],
  loading: false,
  error: null,
  filters: {
    status: [],
    agencies: [],
    dateRange: { start: null, end: null },
    tags: [],
    assignees: [],
    searchQuery: '',
  },
  sort: {
    field: 'dateIssued',
    direction: 'desc',
  },

  // Actions
  setOrders: (orders) => set({ orders }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setFilters: (filters) => set((state) => ({
    filters: { ...state.filters, ...filters },
  })),
  setSort: (sort) => set({ sort }),

  // Computed
  getFilteredOrders: () => {
    const { orders, filters, sort } = get();
    let filtered = [...orders];

    if (filters.status.length > 0) {
      filtered = filtered.filter((order) => 
        filters.status.includes(order.status)
      );
    }

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter((order) =>
        order.title.toLowerCase().includes(query) ||
        order.description.toLowerCase().includes(query) ||
        order.agencies.some((agency) => 
          agency.toLowerCase().includes(query)
        )
      );
    }

    filtered.sort((a, b) => {
      const aVal = a[sort.field];
      const bVal = b[sort.field];
      const compareVal = sort.direction === 'asc' ? 1 : -1;
      return aVal > bVal ? compareVal : -compareVal;
    });

    return filtered;
  },
}));