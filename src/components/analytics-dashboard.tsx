import { useState, useEffect } from "react";
import { NeonCard, NeonCardContent, NeonCardDescription, NeonCardHeader, NeonCardTitle } from "@/components/ui/neon-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

interface ScanData {
  id: string;
  timestamp: Date;
  location?: string;
  userAgent?: string;
}

interface AnalyticsData {
  totalScans: number;
  uniqueUsers: number;
  repeatScans: number;
  avgSessionTime: number;
  topLocations: Array<{ location: string; count: number }>;
  hourlyData: Array<{ hour: number; scans: number }>;
}

export const AnalyticsDashboard = () => {
  const [isPremium, setIsPremium] = useState(false);
  const [scans, setScans] = useState<ScanData[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalScans: 2847,
    uniqueUsers: 1523,
    repeatScans: 412,
    avgSessionTime: 2.4,
    topLocations: [
      { location: "Nairobi, Kenya", count: 842 },
      { location: "Lagos, Nigeria", count: 567 },
      { location: "Kampala, Uganda", count: 234 },
    ],
    hourlyData: Array.from({ length: 24 }, (_, i) => ({
      hour: i,
      scans: Math.floor(Math.random() * 100) + 20,
    })),
  });

  useEffect(() => {
    // Simulate real-time analytics updates
    const interval = setInterval(() => {
      setAnalytics(prev => ({
        ...prev,
        totalScans: prev.totalScans + Math.floor(Math.random() * 5),
        uniqueUsers: prev.uniqueUsers + Math.floor(Math.random() * 2),
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleUpgradeToPremium = () => {
    setIsPremium(true);
    toast({
      title: "Upgraded to Premium! 🌟",
      description: "You now have access to advanced analytics and insights.",
      className: "border-primary/50 bg-card-elevated shadow-glow-medium",
    });
  };

  const handleExportData = (format: 'csv' | 'pdf') => {
    toast({
      title: `Exporting ${format.toUpperCase()}...`,
      description: "Your analytics report will be ready shortly.",
      className: "border-primary/50 bg-card-elevated shadow-glow-medium",
    });
  };

  const BasicDataView = () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <NeonCard variant="elevated">
        <NeonCardHeader>
          <NeonCardTitle className="text-lg">Total Scans</NeonCardTitle>
          <NeonCardDescription>QR/NFC scan count</NeonCardDescription>
        </NeonCardHeader>
        <NeonCardContent>
          <div className="text-3xl font-bold text-neon-bright animate-pulse">
            {analytics.totalScans.toLocaleString()}
          </div>
        </NeonCardContent>
      </NeonCard>

      <NeonCard variant="elevated">
        <NeonCardHeader>
          <NeonCardTitle className="text-lg">Active Users</NeonCardTitle>
          <NeonCardDescription>Unique scan sources</NeonCardDescription>
        </NeonCardHeader>
        <NeonCardContent>
          <div className="text-3xl font-bold text-neon-bright animate-pulse">
            {analytics.uniqueUsers.toLocaleString()}
          </div>
        </NeonCardContent>
      </NeonCard>

      <NeonCard variant="elevated">
        <NeonCardHeader>
          <NeonCardTitle className="text-lg">Recent Activity</NeonCardTitle>
          <NeonCardDescription>Last 24 hours</NeonCardDescription>
        </NeonCardHeader>
        <NeonCardContent>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Live Updates</div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-neon-bright rounded-full animate-pulse"></div>
              <span className="text-sm">Real-time tracking active</span>
            </div>
          </div>
        </NeonCardContent>
      </NeonCard>
    </div>
  );

  const PremiumDataView = () => (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <NeonCard variant="glow">
          <NeonCardHeader>
            <NeonCardTitle className="text-lg">Total Scans</NeonCardTitle>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="text-3xl font-bold text-neon-bright animate-pulse">
              {analytics.totalScans.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">+12% from last week</p>
          </NeonCardContent>
        </NeonCard>

        <NeonCard variant="glow">
          <NeonCardHeader>
            <NeonCardTitle className="text-lg">Unique Users</NeonCardTitle>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="text-3xl font-bold text-neon-bright animate-pulse">
              {analytics.uniqueUsers.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">+8% from last week</p>
          </NeonCardContent>
        </NeonCard>

        <NeonCard variant="glow">
          <NeonCardHeader>
            <NeonCardTitle className="text-lg">Repeat Scans</NeonCardTitle>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="text-3xl font-bold text-neon-bright animate-pulse">
              {analytics.repeatScans}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Loyalty rate: 27%</p>
          </NeonCardContent>
        </NeonCard>

        <NeonCard variant="glow">
          <NeonCardHeader>
            <NeonCardTitle className="text-lg">Avg Session</NeonCardTitle>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="text-3xl font-bold text-neon-bright animate-pulse">
              {analytics.avgSessionTime}m
            </div>
            <p className="text-xs text-muted-foreground mt-1">+15% engagement</p>
          </NeonCardContent>
        </NeonCard>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <NeonCard variant="glow">
          <NeonCardHeader>
            <NeonCardTitle>Top Locations</NeonCardTitle>
            <NeonCardDescription>Geographic distribution</NeonCardDescription>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="space-y-3">
              {analytics.topLocations.map((location, index) => (
                <div key={location.location} className="flex items-center justify-between">
                  <span className="text-sm">{location.location}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-surface rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-neon rounded-full"
                        style={{ width: `${(location.count / analytics.totalScans) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-neon-bright font-semibold">
                      {location.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </NeonCardContent>
        </NeonCard>

        <NeonCard variant="glow">
          <NeonCardHeader>
            <NeonCardTitle>Behavioral Patterns</NeonCardTitle>
            <NeonCardDescription>User engagement insights</NeonCardDescription>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Peak Hours</span>
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    2-4 PM
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Retention Rate</span>
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    68%
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Conversion Rate</span>
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    23%
                  </Badge>
                </div>
              </div>
            </div>
          </NeonCardContent>
        </NeonCard>
      </div>

      <NeonCard variant="glow">
        <NeonCardHeader>
          <NeonCardTitle>Export Options</NeonCardTitle>
          <NeonCardDescription>Download comprehensive reports</NeonCardDescription>
        </NeonCardHeader>
        <NeonCardContent>
          <div className="flex space-x-4">
            <NeonButton 
              variant="outline" 
              onClick={() => handleExportData('csv')}
            >
              Export CSV
            </NeonButton>
            <NeonButton 
              variant="outline" 
              onClick={() => handleExportData('pdf')}
            >
              Export PDF
            </NeonButton>
          </div>
        </NeonCardContent>
      </NeonCard>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-dark p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary animate-neon-flicker">
            Analytics Dashboard
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <Badge variant={isPremium ? "default" : "outline"} className="text-lg px-4 py-2">
              {isPremium ? "Premium Active" : "Basic Plan"}
            </Badge>
            {!isPremium && (
              <NeonButton variant="glow" onClick={handleUpgradeToPremium}>
                Upgrade to Premium
              </NeonButton>
            )}
          </div>
        </div>

        {/* Analytics Content */}
        {isPremium ? <PremiumDataView /> : <BasicDataView />}

        {!isPremium && (
          <NeonCard variant="elevated" className="text-center">
            <NeonCardContent className="py-8">
              <h3 className="text-xl font-bold mb-4 text-primary">
                Unlock Premium Analytics
              </h3>
              <p className="text-muted-foreground mb-6">
                Get demographic insights, behavioral patterns, retention tracking, and advanced reporting.
              </p>
              <NeonButton variant="glow" onClick={handleUpgradeToPremium}>
                Upgrade Now
              </NeonButton>
            </NeonCardContent>
          </NeonCard>
        )}
      </div>
    </div>
  );
};