// stats.types.ts
export interface DashboardStat {
    title: string;
    value: number | string;
    trend: {
      value: number;
      direction: 'up' | 'down';
      percentage: boolean;
    };
    icon: string;
  }
  
  export interface DashboardStats {
    activeOrders: DashboardStat;
    underReview: DashboardStat;
    teamMembers: DashboardStat;
    comments: DashboardStat;
  }
  