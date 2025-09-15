import { useState, useEffect } from "react";
import { NeonButton } from "@/components/ui/neon-button";
import { NeonCard } from "@/components/ui/neon-card";
import { toast } from "@/hooks/use-toast";
import robotMascot from "@/assets/robot-mascot.jpg";

export const ContestPage = () => {
  const [entries, setEntries] = useState(154);
  const [hasEntered, setHasEntered] = useState(false);
  const [scanCount, setScanCount] = useState(0);

  useEffect(() => {
    // Simulate real-time entry updates
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setEntries(prev => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClaimEntry = () => {
    if (!hasEntered) {
      setHasEntered(true);
      setEntries(prev => prev + 1);
      setScanCount(prev => prev + 1);
      
      toast({
        title: "Entry Claimed! 🎉",
        description: "You're now entered to win €100 M-Pesa. Good luck!",
        className: "border-primary/50 bg-card-elevated shadow-glow-medium",
      });
    } else {
      toast({
        title: "Already Entered!",
        description: "You can only enter once per contest.",
        variant: "destructive",
      });
    }
  };

  const handleQRScan = () => {
    setScanCount(prev => prev + 1);
    toast({
      title: "QR Code Scanned! 📱",
      description: `Scan #${scanCount + 1} recorded successfully`,
      className: "border-primary/50 bg-card-elevated shadow-glow-medium",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-bright/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <NeonCard variant="contest" className="w-full max-w-md mx-auto text-center relative z-10">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-neon flex items-center justify-center shadow-glow-large">
            <span className="text-2xl font-bold text-primary-foreground">K</span>
          </div>
          <h1 className="text-3xl font-bold text-primary animate-neon-flicker tracking-wider">
            KARDIVERSE
          </h1>
        </div>

        {/* Robot Mascot */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={robotMascot} 
              alt="Kardiverse Robot Mascot" 
              className="w-32 h-32 object-cover rounded-full shadow-glow-large"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-neon/20 animate-pulse"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-primary animate-neon-flicker">
              CONGRATULATIONS!
            </h2>
            <div className="space-y-1">
              <h3 className="text-4xl font-bold text-neon-bright">
                WIN €100
              </h3>
              <p className="text-2xl font-bold text-primary">
                M-PESA TODAY
              </p>
            </div>
          </div>

          {/* Action Button */}
          <NeonButton
            variant="claim"
            size="claim"
            onClick={handleClaimEntry}
            disabled={hasEntered}
            className="w-full"
          >
            {hasEntered ? "ENTRY CLAIMED ✓" : "TAP TO CLAIM ENTRY"}
          </NeonButton>

          {/* Entry Counter */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              <span className="text-2xl font-bold text-neon-bright animate-pulse">
                {entries}
              </span>{" "}
              ENTRIES
            </p>
          </div>

          {/* QR Scan Simulation */}
          <div className="pt-4 border-t border-primary/20">
            <NeonButton
              variant="outline"
              onClick={handleQRScan}
              className="w-full mb-4"
            >
              Simulate QR/NFC Scan
            </NeonButton>
            <p className="text-sm text-muted-foreground">
              Total Scans: <span className="text-primary font-semibold">{scanCount}</span>
            </p>
          </div>
        </div>

        {/* Sponsor Logo */}
        <div className="mt-8 pt-6 border-t border-primary/20">
          <div className="flex items-center justify-center">
            <div className="text-red-500 font-bold text-xl italic">
              Safaricom
            </div>
          </div>
        </div>
      </NeonCard>
    </div>
  );
};