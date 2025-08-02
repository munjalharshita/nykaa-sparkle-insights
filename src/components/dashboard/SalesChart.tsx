import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 45000, orders: 120 },
  { month: 'Feb', revenue: 52000, orders: 145 },
  { month: 'Mar', revenue: 48000, orders: 135 },
  { month: 'Apr', revenue: 61000, orders: 175 },
  { month: 'May', revenue: 55000, orders: 160 },
  { month: 'Jun', revenue: 67000, orders: 190 },
];

export function SalesChart() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Sales Performance
          <span className="text-sm font-normal text-muted-foreground">(Last 6 months)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="month" 
              className="text-xs"
              stroke="hsl(var(--muted-foreground))"
            />
            <YAxis 
              className="text-xs"
              stroke="hsl(var(--muted-foreground))"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="hsl(var(--nykaa-pink))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--nykaa-pink))', strokeWidth: 2, r: 4 }}
              name="Revenue (₹)"
            />
            <Line 
              type="monotone" 
              dataKey="orders" 
              stroke="hsl(var(--nykaa-accent))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--nykaa-accent))', strokeWidth: 2, r: 4 }}
              name="Orders"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}