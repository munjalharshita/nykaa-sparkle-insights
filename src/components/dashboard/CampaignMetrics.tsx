import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const campaigns = [
  {
    name: "Summer Beauty Sale",
    status: "Active",
    reach: "1.2M",
    engagement: "8.5%",
    conversions: "12.3K",
    roi: "340%",
    progress: 85
  },
  {
    name: "Skincare Sunday",
    status: "Active", 
    reach: "950K",
    engagement: "6.8%",
    conversions: "8.9K",
    roi: "285%",
    progress: 70
  },
  {
    name: "Festive Makeup Collection",
    status: "Scheduled",
    reach: "2.1M",
    engagement: "12.1%",
    conversions: "18.5K",
    roi: "420%",
    progress: 25
  },
  {
    name: "Haircare Heroes",
    status: "Completed",
    reach: "780K",
    engagement: "9.2%",
    conversions: "11.2K",
    roi: "356%",
    progress: 100
  }
];

export function CampaignMetrics() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Campaign Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {campaigns.map((campaign) => (
            <div key={campaign.name} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{campaign.name}</h3>
                <Badge 
                  variant={campaign.status === "Active" ? "default" : 
                           campaign.status === "Scheduled" ? "secondary" : "outline"}
                  className={campaign.status === "Active" ? "bg-nykaa-pink" : ""}
                >
                  {campaign.status}
                </Badge>
              </div>
              
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Reach</div>
                  <div className="font-semibold">{campaign.reach}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Engagement</div>
                  <div className="font-semibold text-green-600">{campaign.engagement}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Conversions</div>
                  <div className="font-semibold">{campaign.conversions}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">ROI</div>
                  <div className="font-semibold text-nykaa-pink">{campaign.roi}</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Campaign Progress</span>
                  <span>{campaign.progress}%</span>
                </div>
                <Progress value={campaign.progress} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}