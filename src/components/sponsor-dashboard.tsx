import { useState } from "react";
import { NeonCard, NeonCardContent, NeonCardDescription, NeonCardHeader, NeonCardTitle } from "@/components/ui/neon-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { Download, TrendingUp, Users, Target, Award } from "lucide-react";

export const SponsorDashboard = () => {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('basic');

  const basicMetrics = {
    totalScans: 2847,
    uniqueUsers: 1523,
    campaignReach: 15230,
    engagement: "2.3%",
  };

  const premiumMetrics = {
    ...basicMetrics,
    demographics: {
      age: { "18-25": 34, "26-35": 42, "36-45": 18, "46+": 6 },
      gender: { male: 58, female: 41, other: 1 },
      location: { urban: 78, suburban: 18, rural: 4 },
    },
    behaviorPatterns: {
      repeatVisitors: 27,
      avgSessionTime: 2.4,
      conversionRate: 23,
      retentionRate: 68,
    },
    roi: {
      costPerScan: 0.12,
      estimatedValue: 3416,
      roi: "320%",
    },
  };

  const handleExport = (format: 'csv' | 'pdf') => {
    toast({
      title: `Exporting ${format.toUpperCase()} Report...`,
      description: "Your sponsor report will be ready for download shortly.",
      className: "border-primary/50 bg-card-elevated shadow-glow-medium",
    });
  };

  const BasicReporting = () => (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <NeonCard variant="elevated">
          <NeonCardHeader className="pb-2">
            <NeonCardTitle className="text-sm font-medium flex items-center space-x-2">
              <Target className="w-4 h-4 text-primary" />
              <span>Total Scans</span>
            </NeonCardTitle>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="text-2xl font-bold text-neon-bright">
              {basicMetrics.totalScans.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Campaign interactions</p>
          </NeonCardContent>
        </NeonCard>

        <NeonCard variant="elevated">
          <NeonCardHeader className="pb-2">
            <NeonCardTitle className="text-sm font-medium flex items-center space-x-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Unique Users</span>
            </NeonCardTitle>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="text-2xl font-bold text-neon-bright">
              {basicMetrics.uniqueUsers.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Individual participants</p>
          </NeonCardContent>
        </NeonCard>

        <NeonCard variant="elevated">
          <NeonCardHeader className="pb-2">
            <NeonCardTitle className="text-sm font-medium flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>Campaign Reach</span>
            </NeonCardTitle>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="text-2xl font-bold text-neon-bright">
              {basicMetrics.campaignReach.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Total impressions</p>
          </NeonCardContent>
        </NeonCard>

        <NeonCard variant="elevated">
          <NeonCardHeader className="pb-2">
            <NeonCardTitle className="text-sm font-medium flex items-center space-x-2">
              <Award className="w-4 h-4 text-primary" />
              <span>Engagement</span>
            </NeonCardTitle>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="text-2xl font-bold text-neon-bright">
              {basicMetrics.engagement}
            </div>
            <p className="text-xs text-muted-foreground">Click-through rate</p>
          </NeonCardContent>
        </NeonCard>
      </div>

      <NeonCard variant="elevated">
        <NeonCardHeader>
          <NeonCardTitle>Export Basic Reports</NeonCardTitle>
          <NeonCardDescription>
            Download campaign performance data
          </NeonCardDescription>
        </NeonCardHeader>
        <NeonCardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <NeonButton 
              variant="outline" 
              onClick={() => handleExport('csv')}
              className="flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download CSV</span>
            </NeonButton>
            <NeonButton 
              variant="outline" 
              onClick={() => handleExport('pdf')}
              className="flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </NeonButton>
          </div>
        </NeonCardContent>
      </NeonCard>

      <NeonCard variant="elevated" className="text-center">
        <NeonCardContent className="py-8">
          <h3 className="text-xl font-bold mb-4 text-primary">
            Unlock Premium Insights
          </h3>
          <p className="text-muted-foreground mb-6">
            Get detailed demographics, behavioral analytics, ROI calculations, and advanced reporting features.
          </p>
          <NeonButton 
            variant="glow" 
            onClick={() => setSelectedPlan('premium')}
          >
            Upgrade to Premium
          </NeonButton>
        </NeonCardContent>
      </NeonCard>
    </div>
  );

  const PremiumReporting = () => (
    <div className="space-y-6">
      {/* Enhanced Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <NeonCard variant="glow">
          <NeonCardHeader className="pb-2">
            <NeonCardTitle className="text-sm font-medium">Total Scans</NeonCardTitle>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="text-2xl font-bold text-neon-bright">
              {premiumMetrics.totalScans.toLocaleString()}
            </div>
            <p className="text-xs text-success">+12% from last period</p>
          </NeonCardContent>
        </NeonCard>

        <NeonCard variant="glow">
          <NeonCardHeader className="pb-2">
            <NeonCardTitle className="text-sm font-medium">ROI</NeonCardTitle>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="text-2xl font-bold text-neon-bright">
              {premiumMetrics.roi.roi}
            </div>
            <p className="text-xs text-success">Excellent performance</p>
          </NeonCardContent>
        </NeonCard>

        <NeonCard variant="glow">
          <NeonCardHeader className="pb-2">
            <NeonCardTitle className="text-sm font-medium">Conversion</NeonCardTitle>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="text-2xl font-bold text-neon-bright">
              {premiumMetrics.behaviorPatterns.conversionRate}%
            </div>
            <p className="text-xs text-success">Above industry avg</p>
          </NeonCardContent>
        </NeonCard>

        <NeonCard variant="glow">
          <NeonCardHeader className="pb-2">
            <NeonCardTitle className="text-sm font-medium">Retention</NeonCardTitle>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="text-2xl font-bold text-neon-bright">
              {premiumMetrics.behaviorPatterns.retentionRate}%
            </div>
            <p className="text-xs text-success">Strong loyalty</p>
          </NeonCardContent>
        </NeonCard>
      </div>

      {/* Demographics & Behavior */}
      <div className="grid gap-6 md:grid-cols-2">
        <NeonCard variant="glow">
          <NeonCardHeader>
            <NeonCardTitle>Demographics</NeonCardTitle>
            <NeonCardDescription>Audience breakdown</NeonCardDescription>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-2">Age Groups</h4>
                <div className="space-y-2">
                  {Object.entries(premiumMetrics.demographics.age).map(([age, percentage]) => (
                    <div key={age} className="flex justify-between items-center">
                      <span className="text-sm">{age}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-surface rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-neon rounded-full"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-xs text-neon-bright">{percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </NeonCardContent>
        </NeonCard>

        <NeonCard variant="glow">
          <NeonCardHeader>
            <NeonCardTitle>Behavioral Insights</NeonCardTitle>
            <NeonCardDescription>User engagement patterns</NeonCardDescription>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-bright">
                    {premiumMetrics.behaviorPatterns.repeatVisitors}%
                  </div>
                  <p className="text-xs text-muted-foreground">Repeat Visitors</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-bright">
                    {premiumMetrics.behaviorPatterns.avgSessionTime}m
                  </div>
                  <p className="text-xs text-muted-foreground">Avg Session</p>
                </div>
              </div>
            </div>
          </NeonCardContent>
        </NeonCard>
      </div>

      {/* ROI Analysis */}
      <NeonCard variant="glow">
        <NeonCardHeader>
          <NeonCardTitle>ROI Analysis</NeonCardTitle>
          <NeonCardDescription>Campaign financial performance</NeonCardDescription>
        </NeonCardHeader>
        <NeonCardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-bright">
                €{premiumMetrics.roi.costPerScan}
              </div>
              <p className="text-sm text-muted-foreground">Cost Per Scan</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-bright">
                €{premiumMetrics.roi.estimatedValue.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">Estimated Value</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">
                {premiumMetrics.roi.roi}
              </div>
              <p className="text-sm text-muted-foreground">Return on Investment</p>
            </div>
          </div>
        </NeonCardContent>
      </NeonCard>

      {/* Export Options */}
      <NeonCard variant="glow">
        <NeonCardHeader>
          <NeonCardTitle>Premium Reports</NeonCardTitle>
          <NeonCardDescription>
            Comprehensive analytics with detailed insights
          </NeonCardDescription>
        </NeonCardHeader>
        <NeonCardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <NeonButton 
              variant="glow" 
              onClick={() => handleExport('csv')}
              className="flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Premium CSV Export</span>
            </NeonButton>
            <NeonButton 
              variant="glow" 
              onClick={() => handleExport('pdf')}
              className="flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Executive PDF Report</span>
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
            Sponsor Dashboard
          </h1>
          <p className="text-muted-foreground">
            Campaign performance analytics and reporting for sponsors
          </p>
        </div>

        {/* Plan Selection */}
        <div className="flex justify-center">
          <Tabs value={selectedPlan} onValueChange={(value) => setSelectedPlan(value as 'basic' | 'premium')}>
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-surface border-primary/20">
              <TabsTrigger value="basic" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Basic Reports
              </TabsTrigger>
              <TabsTrigger value="premium" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Premium Analytics
              </TabsTrigger>
            </TabsList>
            <TabsContent value="basic" className="mt-8">
              <BasicReporting />
            </TabsContent>
            <TabsContent value="premium" className="mt-8">
              <PremiumReporting />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};