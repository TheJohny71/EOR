// stores/uiStore.ts
import { create } from 'zustand';
import type { ViewMode } from '../types/ui.types';

type UIStore = {
  // State
  viewMode: ViewMode;
  commandPaletteOpen: boolean;
  selectedOrderId: string | null;
  sidebarOpen: boolean;

  // Actions
  setViewMode: (mode: ViewMode) => void;
  toggleCommandPalette: () => void;
  setSelectedOrder: (id: string | null) => void;
  toggleSidebar: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  // Initial state
  viewMode: 'grid',
  commandPaletteOpen: false,
  selectedOrderId: null,
  sidebarOpen: true,

  // Actions
  setViewMode: (mode) => set({ viewMode: mode }),
  toggleCommandPalette: () => 
    set((state) => ({ 
      commandPaletteOpen: !state.commandPaletteOpen 
    })),
  setSelectedOrder: (id) => set({ selectedOrderId: id }),
  toggleSidebar: () => 
    set((state) => ({ 
      sidebarOpen: !state.sidebarOpen 
    })),
}));