// order.types.ts
export type OrderStatus = 'new' | 'active' | 'under_review' | 'closed';
export type OrderPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface Order {
  id: string;
  title: string;
  number: string;
  status: OrderStatus;
  priority: OrderPriority;
  dateIssued: string;
  agencies: string[];
  tags: string[];
  description: string;
  assignees: string[];
  commentCount: number;
  lastUpdated: string;
}