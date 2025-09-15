import { useState, useEffect } from "react";
import { NeonCard, NeonCardContent, NeonCardDescription, NeonCardHeader, NeonCardTitle } from "@/components/ui/neon-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { QrCode, Nfc, MapPin, Clock, Smartphone } from "lucide-react";

interface ScanEvent {
  id: string;
  type: 'QR' | 'NFC';
  timestamp: Date;
  location: string;
  device: string;
  ip?: string;
}

export const ScanTracker = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [totalScans, setTotalScans] = useState(156);
  const [recentScans, setRecentScans] = useState<ScanEvent[]>([
    {
      id: "1",
      type: "QR",
      timestamp: new Date(Date.now() - 2 * 60 * 1000),
      location: "Nairobi, Kenya",
      device: "iPhone 14 Pro",
    },
    {
      id: "2", 
      type: "NFC",
      timestamp: new Date(Date.now() - 8 * 60 * 1000),
      location: "Lagos, Nigeria",
      device: "Samsung Galaxy S24",
    },
    {
      id: "3",
      type: "QR",
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      location: "Kampala, Uganda",
      device: "Google Pixel 8",
    },
  ]);

  useEffect(() => {
    // Simulate real-time scan events
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        const locations = ["Nairobi, Kenya", "Lagos, Nigeria", "Kampala, Uganda", "Kigali, Rwanda"];
        const devices = ["iPhone 14 Pro", "Samsung Galaxy S24", "Google Pixel 8", "OnePlus 11"];
        
        const newScan: ScanEvent = {
          id: Date.now().toString(),
          type: Math.random() > 0.6 ? 'QR' : 'NFC',
          timestamp: new Date(),
          location: locations[Math.floor(Math.random() * locations.length)],
          device: devices[Math.floor(Math.random() * devices.length)],
        };

        setRecentScans(prev => [newScan, ...prev.slice(0, 9)]);
        setTotalScans(prev => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScanSimulation = (type: 'QR' | 'NFC') => {
    setIsScanning(true);
    
    // Simulate scan delay
    setTimeout(() => {
      const newScan: ScanEvent = {
        id: Date.now().toString(),
        type,
        timestamp: new Date(),
        location: "Your Location",
        device: "Simulated Device",
      };

      setRecentScans(prev => [newScan, ...prev.slice(0, 9)]);
      setTotalScans(prev => prev + 1);
      setIsScanning(false);

      toast({
        title: `${type} Scan Successful! 📱`,
        description: `Scan registered and logged to analytics.`,
        className: "border-primary/50 bg-card-elevated shadow-glow-medium",
      });
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getTimeAgo = (date: Date) => {
    const minutes = Math.floor((Date.now() - date.getTime()) / 60000);
    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    return `${Math.floor(minutes / 60)}h ago`;
  };

  return (
    <div className="min-h-screen bg-gradient-dark p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary animate-neon-flicker">
            Scan Tracker
          </h1>
          <p className="text-muted-foreground">
            Monitor QR and NFC scan activities in real-time
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-6 md:grid-cols-3">
          <NeonCard variant="glow">
            <NeonCardHeader>
              <NeonCardTitle className="text-lg flex items-center space-x-2">
                <QrCode className="w-5 h-5 text-primary" />
                <span>Total Scans</span>
              </NeonCardTitle>
            </NeonCardHeader>
            <NeonCardContent>
              <div className="text-3xl font-bold text-neon-bright animate-pulse">
                {totalScans.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">All time activity</p>
            </NeonCardContent>
          </NeonCard>

          <NeonCard variant="glow">
            <NeonCardHeader>
              <NeonCardTitle className="text-lg flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Last 24h</span>
              </NeonCardTitle>
            </NeonCardHeader>
            <NeonCardContent>
              <div className="text-3xl font-bold text-neon-bright animate-pulse">
                {Math.floor(totalScans * 0.15)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Recent activity</p>
            </NeonCardContent>
          </NeonCard>

          <NeonCard variant="glow">
            <NeonCardHeader>
              <NeonCardTitle className="text-lg flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-bright rounded-full animate-pulse"></div>
                <span>Live Status</span>
              </NeonCardTitle>
            </NeonCardHeader>
            <NeonCardContent>
              <div className="text-lg font-bold text-success">
                ACTIVE
              </div>
              <p className="text-xs text-muted-foreground mt-1">Real-time monitoring</p>
            </NeonCardContent>
          </NeonCard>
        </div>

        {/* Scan Simulation */}
        <NeonCard variant="contest">
          <NeonCardHeader>
            <NeonCardTitle>Scan Simulation</NeonCardTitle>
            <NeonCardDescription>Test QR and NFC scan functionality</NeonCardDescription>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <NeonButton
                variant="glow"
                size="lg"
                onClick={() => handleScanSimulation('QR')}
                disabled={isScanning}
                className="flex items-center space-x-2 min-w-[160px]"
              >
                <QrCode className="w-5 h-5" />
                <span>{isScanning ? "Scanning..." : "Simulate QR"}</span>
              </NeonButton>
              
              <NeonButton
                variant="glow"
                size="lg"
                onClick={() => handleScanSimulation('NFC')}
                disabled={isScanning}
                className="flex items-center space-x-2 min-w-[160px]"
              >
                <Nfc className="w-5 h-5" />
                <span>{isScanning ? "Scanning..." : "Simulate NFC"}</span>
              </NeonButton>
            </div>
            
            {isScanning && (
              <div className="mt-4 text-center">
                <div className="inline-flex items-center space-x-2 text-primary animate-pulse">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <span>Processing scan...</span>
                </div>
              </div>
            )}
          </NeonCardContent>
        </NeonCard>

        {/* Recent Scans */}
        <NeonCard variant="elevated">
          <NeonCardHeader>
            <NeonCardTitle>Recent Scans</NeonCardTitle>
            <NeonCardDescription>Live feed of scan activities</NeonCardDescription>
          </NeonCardHeader>
          <NeonCardContent>
            <div className="space-y-4">
              {recentScans.map((scan) => (
                <div
                  key={scan.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-surface border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${scan.type === 'QR' ? 'bg-primary/20' : 'bg-neon-bright/20'}`}>
                      {scan.type === 'QR' ? (
                        <QrCode className="w-5 h-5 text-primary" />
                      ) : (
                        <Nfc className="w-5 h-5 text-neon-bright" />
                      )}
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-primary/50 text-primary">
                          {scan.type}
                        </Badge>
                        <span className="text-sm font-medium">{formatTime(scan.timestamp)}</span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{scan.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Smartphone className="w-3 h-3" />
                          <span>{scan.device}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">
                      {getTimeAgo(scan.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {recentScans.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No recent scans. Try the simulation buttons above.
              </div>
            )}
          </NeonCardContent>
        </NeonCard>
      </div>
    </div>
  );
};