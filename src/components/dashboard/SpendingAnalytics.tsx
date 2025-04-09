
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface SpendingCategory {
  id: string;
  name: string;
  value: number;
  color: string;
}

interface SpendingAnalyticsProps {
  data: SpendingCategory[];
  totalSpending: number;
  currency: string;
}

const SpendingAnalytics: React.FC<SpendingAnalyticsProps> = ({ data, totalSpending, currency }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const category = payload[0].payload;
      return (
        <div className="bg-white p-3 shadow-md rounded-md border border-gray-200">
          <p className="font-medium">{category.name}</p>
          <p className="text-sm">{formatCurrency(category.value)}</p>
          <p className="text-xs text-muted-foreground">
            {Math.round((category.value / totalSpending) * 100)}% of total
          </p>
        </div>
      );
    }
    return null;
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (percent < 0.05) return null; // Don't show labels for small segments

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Card className="card-gradient">
      <CardHeader>
        <CardTitle>Spending Analytics</CardTitle>
        <CardDescription>Where your money goes this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend layout="vertical" verticalAlign="middle" align="right" />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between items-center mt-4 pt-2 border-t">
          <div>
            <div className="text-sm font-medium text-muted-foreground">Total Spending</div>
            <div className="text-2xl font-bold">{formatCurrency(totalSpending)}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground">Top Category</div>
            <div className="text-lg font-bold">
              {data.sort((a, b) => b.value - a.value)[0]?.name || 'N/A'}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingAnalytics;
