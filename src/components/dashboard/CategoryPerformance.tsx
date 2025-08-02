import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { category: 'Skincare', sales: 45000, growth: '+12%' },
  { category: 'Makeup', sales: 38000, growth: '+8%' },
  { category: 'Haircare', sales: 32000, growth: '+15%' },
  { category: 'Fragrance', sales: 28000, growth: '+5%' },
  { category: 'Personal Care', sales: 25000, growth: '+18%' },
];

export function CategoryPerformance() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Category Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="category" 
              className="text-xs"
              stroke="hsl(var(--muted-foreground))"
              angle={-45}
              textAnchor="end"
              height={80}
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
            <Bar 
              dataKey="sales" 
              fill="url(#colorGradient)"
              radius={[4, 4, 0, 0]}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--nykaa-pink))" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="hsl(var(--nykaa-pink-light))" stopOpacity={0.6}/>
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 grid grid-cols-5 gap-2 text-xs">
          {data.map((item) => (
            <div key={item.category} className="text-center">
              <div className="font-medium text-green-600">{item.growth}</div>
              <div className="text-muted-foreground">{item.category}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}