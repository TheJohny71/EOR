// stores/uiStore.ts
import { create } from 'zustand';

// Define explicit types for all state and actions
type ViewMode = 'grid' | 'list';

interface UIState {
  viewMode: ViewMode;
  commandPaletteOpen: boolean;
  selectedOrderId: string | null;
  sidebarOpen: boolean;
}

interface UIActions {
  setViewMode: (mode: ViewMode) => void;
  toggleCommandPalette: () => void;
  setSelectedOrder: (id: string | null) => void;
  toggleSidebar: () => void;
}

// Combine state and actions in store type
type UIStore = UIState & UIActions;

// Create store with explicit typing
export const useUIStore = create<UIStore>()((set) => ({
  // Initial state
  viewMode: 'grid' as ViewMode,
  commandPaletteOpen: false,
  selectedOrderId: null,
  sidebarOpen: true,

  // Actions with explicit typing
  setViewMode: (mode: ViewMode) => set({ viewMode: mode }),
  toggleCommandPalette: () => set((state) => ({ 
    commandPaletteOpen: !state.commandPaletteOpen 
  })),
  setSelectedOrder: (id: string | null) => set({ selectedOrderId: id }),
  toggleSidebar: () => set((state) => ({ 
    sidebarOpen: !state.sidebarOpen 
  })),
}));