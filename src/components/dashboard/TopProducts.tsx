import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const topProducts = [
  {
    rank: 1,
    name: "Lakme Absolute Mattreal Skin Natural Mousse",
    category: "Makeup",
    sales: "₹2.3L",
    units: "1,234",
    rating: 4.8,
    trend: "up"
  },
  {
    rank: 2, 
    name: "Nykaa Naturals Vitamin C Face Serum",
    category: "Skincare",
    sales: "₹1.9L",
    units: "987",
    rating: 4.7,
    trend: "up"
  },
  {
    rank: 3,
    name: "Maybelline New York Fit Me Foundation",
    category: "Makeup", 
    sales: "₹1.6L",
    units: "856",
    rating: 4.6,
    trend: "steady"
  },
  {
    rank: 4,
    name: "L'Oreal Paris Revitalift Serum",
    category: "Skincare",
    sales: "₹1.4L", 
    units: "723",
    rating: 4.5,
    trend: "up"
  },
  {
    rank: 5,
    name: "Plum Green Tea Face Wash",
    category: "Skincare",
    sales: "₹1.2L",
    units: "645",
    rating: 4.4,
    trend: "down"
  }
];

export function TopProducts() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Top Performing Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducts.map((product) => (
            <div key={product.rank} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-accent/50 transition-smooth">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-nykaa-pink text-white font-bold text-sm">
                {product.rank}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{product.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <span>★ {product.rating}</span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-semibold text-nykaa-pink">{product.sales}</div>
                <div className="text-sm text-muted-foreground">{product.units} units</div>
              </div>
              
              <div className="text-xs">
                {product.trend === "up" && <span className="text-green-600">↗</span>}
                {product.trend === "down" && <span className="text-red-600">↘</span>}
                {product.trend === "steady" && <span className="text-yellow-600">→</span>}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-accent rounded-lg">
          <div className="text-sm font-medium mb-2">Product Performance Insights</div>
          <ul className="text-xs space-y-1 text-muted-foreground">
            <li>• Skincare products show 23% higher conversion rates</li>
            <li>• Premium brands outperform budget options by 40%</li>
            <li>• Video reviews increase sales by 65%</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}