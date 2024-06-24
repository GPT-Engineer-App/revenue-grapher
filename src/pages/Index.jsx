import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 2000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 1890 },
  { name: 'Jun', revenue: 2390 },
  { name: 'Jul', revenue: 3490 },
  { name: 'Aug', revenue: 2000 },
  { name: 'Sep', revenue: 2780 },
  { name: 'Oct', revenue: 1890 },
  { name: 'Nov', revenue: 2390 },
  { name: 'Dec', revenue: 3490 },
];

const metrics = [
  { title: 'Total Sales', value: '$12,000', progress: 75 },
  { title: 'New Customers', value: '1,200', progress: 50 },
  { title: 'Pending Orders', value: '300', progress: 30 },
];

function Index() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">{metric.value}</p>
              <Progress value={metric.progress} />
            </CardContent>
          </Card>
        ))}
      </div>
      <h2 className="text-xl font-bold mb-4">Revenue Overview</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Index;