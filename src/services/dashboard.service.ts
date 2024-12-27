import { DashboardMetrics } from '../models/Dashboard';

export class DashboardService {
  async getDashboardMetrics(userId: string) {
    try {
      const metrics = await DashboardMetrics.findOne({ userId });
      return metrics || this.createDefaultMetrics(userId);
    } catch (error) {
      throw new Error('Error fetching dashboard metrics');
    }
  }

  async getRecentActivity(userId: string) {
    try {
      const metrics = await DashboardMetrics.findOne({ userId });
      return metrics?.recentActivity || [];
    } catch (error) {
      throw new Error('Error fetching recent activities');
    }
  }

  async getComplianceMetrics(userId: string) {
    try {
      const metrics = await DashboardMetrics.findOne({ userId });
      return {
        complianceScore: metrics?.complianceScore || 0,
        pendingReviews: metrics?.pendingReviews || 0
      };
    } catch (error) {
      throw new Error('Error fetching compliance metrics');
    }
  }

  private async createDefaultMetrics(userId: string) {
    try {
      return await DashboardMetrics.create({
        userId,
        totalClients: 0,
        activeAgreements: 0,
        pendingReviews: 0,
        complianceScore: 0,
        recentActivity: []
      });
    } catch (error) {
      throw new Error('Error creating default metrics');
    }
  }
}