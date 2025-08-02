import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const demographicsData = [
  { name: '18-25 years', value: 35, color: 'hsl(var(--nykaa-pink))' },
  { name: '26-35 years', value: 40, color: 'hsl(var(--nykaa-pink-light))' },
  { name: '36-45 years', value: 20, color: 'hsl(var(--nykaa-accent))' },
  { name: '45+ years', value: 5, color: 'hsl(var(--nykaa-secondary))' },
];

const locationData = [
  { city: 'Mumbai', customers: '2.3M', percentage: 28 },
  { city: 'Delhi', customers: '1.9M', percentage: 23 },
  { city: 'Bangalore', customers: '1.5M', percentage: 18 },
  { city: 'Chennai', customers: '1.2M', percentage: 15 },
  { city: 'Others', customers: '1.3M', percentage: 16 },
];

export function CustomerInsights() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Customer Demographics</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={demographicsData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {demographicsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Top Cities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {locationData.map((location, index) => (
              <div key={location.city} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-nykaa-pink" />
                  <span className="font-medium">{location.city}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{location.customers}</div>
                  <div className="text-xs text-muted-foreground">{location.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gradient-subtle rounded-lg">
            <div className="text-sm font-medium mb-2">Customer Retention Rate</div>
            <div className="text-2xl font-bold text-nykaa-pink">78.5%</div>
            <div className="text-xs text-green-600">+5.2% from last quarter</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}