import mongoose from 'mongoose';

const DashboardMetricsSchema = new mongoose.Schema({
  totalClients: {
    type: Number,
    required: true,
    default: 0
  },
  activeAgreements: {
    type: Number,
    required: true,
    default: 0
  },
  pendingReviews: {
    type: Number,
    required: true,
    default: 0
  },
  complianceScore: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
    default: 0
  },
  recentActivity: [{
    type: {
      type: String,
      enum: ['client_added', 'agreement_signed', 'review_completed', 'compliance_update'],
      required: true
    },
    description: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

export const DashboardMetrics = mongoose.model('DashboardMetrics', DashboardMetricsSchema);