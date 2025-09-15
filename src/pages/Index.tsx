import { useState } from "react";
import { NeonButton } from "@/components/ui/neon-button";
import { NeonCard, NeonCardContent, NeonCardDescription, NeonCardHeader, NeonCardTitle } from "@/components/ui/neon-card";
import { ContestPage } from "@/components/contest-page";
import { AnalyticsDashboard } from "@/components/analytics-dashboard";
import { ScanTracker } from "@/components/scan-tracker";
import { SponsorDashboard } from "@/components/sponsor-dashboard";
import { Badge } from "@/components/ui/badge";
import { QrCode, BarChart3, Target, Trophy } from "lucide-react";

type Page = 'home' | 'contest' | 'analytics' | 'tracker' | 'sponsor';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  if (currentPage === 'contest') return <ContestPage />;
  if (currentPage === 'analytics') return <AnalyticsDashboard />;
  if (currentPage === 'tracker') return <ScanTracker />;
  if (currentPage === 'sponsor') return <SponsorDashboard />;

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Ambient glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-bright/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-12">
          {/* Logo */}
          <div className="space-y-6">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-neon flex items-center justify-center shadow-glow-large">
              <span className="text-4xl font-bold text-primary-foreground">K</span>
            </div>
            <h1 className="text-6xl font-bold text-primary animate-neon-flicker tracking-wider">
              KARDIVERSE
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced QR/NFC scan tracking system with real-time analytics, 
              contest management, and comprehensive sponsor reporting.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <NeonCard 
              variant="glow" 
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setCurrentPage('contest')}
            >
              <NeonCardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-neon flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary-foreground" />
                </div>
                <NeonCardTitle className="text-lg text-center">Contest Page</NeonCardTitle>
                <NeonCardDescription className="text-center">
                  Interactive contest interface with entry tracking
                </NeonCardDescription>
              </NeonCardHeader>
              <NeonCardContent className="text-center">
                <Badge variant="outline" className="border-primary/50 text-primary">
                  Win €100 M-Pesa
                </Badge>
              </NeonCardContent>
            </NeonCard>

            <NeonCard 
              variant="glow"
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setCurrentPage('tracker')}
            >
              <NeonCardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-neon flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-primary-foreground" />
                </div>
                <NeonCardTitle className="text-lg text-center">Scan Tracker</NeonCardTitle>
                <NeonCardDescription className="text-center">
                  Real-time QR/NFC scan monitoring
                </NeonCardDescription>
              </NeonCardHeader>
              <NeonCardContent className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-neon-bright rounded-full animate-pulse"></div>
                  <span className="text-sm text-neon-bright">Live Tracking</span>
                </div>
              </NeonCardContent>
            </NeonCard>

            <NeonCard 
              variant="glow"
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setCurrentPage('analytics')}
            >
              <NeonCardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-neon flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary-foreground" />
                </div>
                <NeonCardTitle className="text-lg text-center">Analytics</NeonCardTitle>
                <NeonCardDescription className="text-center">
                  Basic & Premium data insights
                </NeonCardDescription>
              </NeonCardHeader>
              <NeonCardContent className="text-center">
                <div className="flex justify-center space-x-2">
                  <Badge variant="outline" className="border-primary/50 text-primary text-xs">
                    Basic
                  </Badge>
                  <Badge variant="default" className="bg-gradient-neon text-xs">
                    Premium
                  </Badge>
                </div>
              </NeonCardContent>
            </NeonCard>

            <NeonCard 
              variant="glow"
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setCurrentPage('sponsor')}
            >
              <NeonCardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-neon flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <NeonCardTitle className="text-lg text-center">Sponsor Portal</NeonCardTitle>
                <NeonCardDescription className="text-center">
                  Campaign reporting & ROI analytics
                </NeonCardDescription>
              </NeonCardHeader>
              <NeonCardContent className="text-center">
                <Badge variant="outline" className="border-primary/50 text-primary">
                  Business Intelligence
                </Badge>
              </NeonCardContent>
            </NeonCard>
          </div>

          {/* Quick Start */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">
              Get Started Now
            </h2>
            <NeonButton 
              variant="glow" 
              size="xl"
              onClick={() => setCurrentPage('contest')}
              className="shadow-glow-intense"
            >
              Launch Contest Experience
            </NeonButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-primary animate-neon-flicker">
              System Features
            </h2>
            <p className="text-muted-foreground">
              Comprehensive tracking and analytics for QR/NFC campaigns
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <NeonCard variant="elevated">
              <NeonCardHeader>
                <NeonCardTitle className="text-xl">Basic Data Layer (L5 Default)</NeonCardTitle>
              </NeonCardHeader>
              <NeonCardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>QR/NFC scan registration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Timestamp & location logging</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Scan count tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Default avatar integration</span>
                  </li>
                </ul>
              </NeonCardContent>
            </NeonCard>

            <NeonCard variant="elevated">
              <NeonCardHeader>
                <NeonCardTitle className="text-xl">Premium Data Layer (L5 Upgrade)</NeonCardTitle>
              </NeonCardHeader>
              <NeonCardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-bright rounded-full"></div>
                    <span>Demographic insights (opt-in)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-bright rounded-full"></div>
                    <span>Behavioral patterns & trends</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-bright rounded-full"></div>
                    <span>Loyalty & retention tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-bright rounded-full"></div>
                    <span>Real-time analytics & reporting</span>
                  </li>
                </ul>
              </NeonCardContent>
            </NeonCard>
          </div>

          <NeonCard variant="contest">
            <NeonCardHeader>
              <NeonCardTitle className="text-xl text-center">Backend System</NeonCardTitle>
              <NeonCardDescription className="text-center">
                Lightweight infrastructure for data processing and sponsor reporting
              </NeonCardDescription>
            </NeonCardHeader>
            <NeonCardContent className="text-center space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Storage & Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    Secure data storage with real-time processing capabilities
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">API Endpoints</h4>
                  <p className="text-sm text-muted-foreground">
                    RESTful APIs for scan registration and dashboard access
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Export Tools</h4>
                  <p className="text-sm text-muted-foreground">
                    CSV & PDF export for comprehensive reporting
                  </p>
                </div>
              </div>
            </NeonCardContent>
          </NeonCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-primary/20">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-neon flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">K</span>
            </div>
            <span className="text-lg font-bold text-primary">KARDIVERSE</span>
          </div>
          
          <div className="text-red-500 font-bold text-lg italic">
            Powered by Safaricom
          </div>
          
          <p className="text-muted-foreground text-sm">
            Advanced QR/NFC Analytics Platform © 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
