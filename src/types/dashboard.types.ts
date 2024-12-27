export interface DashboardMetrics {
  totalClients: number;
  activeAgreements: number;
  pendingReviews: number;
  complianceScore: number;
  recentActivity: Activity[];
  lastUpdated: Date;
}

export interface Activity {
  type: 'client_added' | 'agreement_signed' | 'review_completed' | 'compliance_update';
  description: string;
  timestamp: Date;
}

export interface ComplianceMetrics {
  complianceScore: number;
  pendingReviews: number;
}