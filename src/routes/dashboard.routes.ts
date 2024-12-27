import express from 'express';
import { DashboardController } from '../controllers/dashboard.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = express.Router();
const dashboardController = new DashboardController();

router.get('/metrics', authMiddleware, dashboardController.getDashboardMetrics);
router.get('/activity', authMiddleware, dashboardController.getRecentActivity);
router.get('/compliance', authMiddleware, dashboardController.getComplianceMetrics);

export { router as dashboardRoutes };