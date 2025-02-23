// types/ui.types.ts
export type ViewMode = 'grid' | 'list';

export interface UIState {
  viewMode: ViewMode;
  commandPaletteOpen: boolean;
  selectedOrderId: string | null;
  sidebarOpen: boolean;
}