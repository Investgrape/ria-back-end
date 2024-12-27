import { Request, Response } from 'express';
import { DashboardService } from '../services/dashboard.service';

export class DashboardController {
  private dashboardService: DashboardService;

  constructor() {
    this.dashboardService = new DashboardService();
  }

  getDashboardMetrics = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;
      const metrics = await this.dashboardService.getDashboardMetrics(userId);
      res.json(metrics);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching dashboard metrics' });
    }
  };

  getRecentActivity = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;
      const activities = await this.dashboardService.getRecentActivity(userId);
      res.json(activities);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching recent activities' });
    }
  };

  getComplianceMetrics = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;
      const metrics = await this.dashboardService.getComplianceMetrics(userId);
      res.json(metrics);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching compliance metrics' });
    }
  };
}