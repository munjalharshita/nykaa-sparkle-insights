import { MetricCard } from "@/components/dashboard/MetricCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { CategoryPerformance } from "@/components/dashboard/CategoryPerformance";
import { CustomerInsights } from "@/components/dashboard/CustomerInsights";
import { CampaignMetrics } from "@/components/dashboard/CampaignMetrics";
import { TopProducts } from "@/components/dashboard/TopProducts";
import { TrendingUp, Users, ShoppingCart, DollarSign, Target, Star } from "lucide-react";
import nykaaBrand from "@/assets/nykaa-brand.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-white shadow-card border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={nykaaBrand} alt="Nykaa" className="h-12 w-auto object-contain" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Marketing Insights Dashboard
                </h1>
                <p className="text-muted-foreground">Real-time analytics and performance metrics</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Last updated</div>
              <div className="font-semibold">Jan 15, 2024 • 2:30 PM</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics Row */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <MetricCard
            title="Total Revenue"
            value="₹12.4M"
            change="+18.2% from last month"
            trend="up"
            icon={DollarSign}
          />
          <MetricCard
            title="Active Customers"
            value="8.2M"
            change="+12.5% from last month"
            trend="up"
            icon={Users}
          />
          <MetricCard
            title="Orders"
            value="45.6K"
            change="+8.3% from last month"
            trend="up"
            icon={ShoppingCart}
          />
          <MetricCard
            title="Conversion Rate"
            value="3.4%"
            change="+0.8% from last month"
            trend="up"
            icon={Target}
          />
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <SalesChart />
          <CategoryPerformance />
        </div>

        {/* Customer Insights */}
        <div className="mb-8">
          <CustomerInsights />
        </div>

        {/* Campaign and Products Row */}
        <div className="grid gap-6 lg:grid-cols-2">
          <CampaignMetrics />
          <TopProducts />
        </div>
      </div>
    </div>
  );
};

export default Index;
