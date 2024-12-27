import React from 'react';
import { Card } from './ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', clients: 65 },
  { month: 'Feb', clients: 72 },
  { month: 'Mar', clients: 85 },
  { month: 'Apr', clients: 93 },
  { month: 'May', clients: 102 },
  { month: 'Jun', clients: 128 },
];

const recentActivity = [
  {
    id: 1,
    type: 'client_added',
    description: 'New client onboarded - John Smith',
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    type: 'agreement_signed',
    description: 'Investment agreement signed - Sarah Johnson',
    timestamp: '4 hours ago'
  },
  {
    id: 3,
    type: 'review_completed',
    description: 'Portfolio review completed - Michael Brown',
    timestamp: '6 hours ago'
  },
  {
    id: 4,
    type: 'compliance_update',
    description: 'Compliance documentation updated',
    timestamp: '1 day ago'
  }
];

const DashboardContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">Total Clients</span>
              <span className="material-icons-outlined text-emerald-500">group</span>
            </div>
            <p className="text-2xl font-semibold mt-2">128</p>
            <p className="text-sm text-gray-500 mt-2">+12% from last month</p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">Active Agreements</span>
              <span className="material-icons-outlined text-blue-500">description</span>
            </div>
            <p className="text-2xl font-semibold mt-2">85</p>
            <p className="text-sm text-gray-500 mt-2">+5% from last month</p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">Pending Reviews</span>
              <span className="material-icons-outlined text-yellow-500">pending_actions</span>
            </div>
            <p className="text-2xl font-semibold mt-2">12</p>
            <p className="text-sm text-gray-500 mt-2">-3 from last week</p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">Compliance Score</span>
              <span className="material-icons-outlined text-green-500">verified</span>
            </div>
            <p className="text-2xl font-semibold mt-2">94%</p>
            <p className="text-sm text-gray-500 mt-2">+2% from last month</p>
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Client Growth</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="clients" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <span className="material-icons-outlined text-emerald-500 mt-1">
                    {activity.type === 'client_added' ? 'person_add' :
                     activity.type === 'agreement_signed' ? 'task_alt' :
                     activity.type === 'review_completed' ? 'rate_review' : 'security_update_good'}
                  </span>
                  <div>
                    <p className="text-sm text-gray-800">{activity.description}</p>
                    <p className="text-xs text-gray-500">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent;