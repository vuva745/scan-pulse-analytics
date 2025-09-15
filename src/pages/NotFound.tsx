import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NeonButton } from "@/components/ui/neon-button";
import { NeonCard, NeonCardContent, NeonCardDescription, NeonCardHeader, NeonCardTitle } from "@/components/ui/neon-card";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center p-6">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-bright/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <NeonCard variant="contest" className="w-full max-w-md text-center relative z-10">
        <NeonCardHeader>
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-destructive/20 border border-destructive/40 flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <NeonCardTitle className="text-4xl mb-2 text-destructive animate-neon-flicker">
            404
          </NeonCardTitle>
          <NeonCardDescription className="text-lg">
            Oops! This page doesn't exist in the Kardiverse
          </NeonCardDescription>
        </NeonCardHeader>
        <NeonCardContent className="space-y-6">
          <p className="text-muted-foreground">
            The page you're looking for might have been moved or deleted.
          </p>
          
          <div className="space-y-4">
            <NeonButton 
              variant="glow" 
              size="lg" 
              onClick={() => window.location.href = "/"}
              className="w-full"
            >
              Return to Home
            </NeonButton>
            
            <NeonButton 
              variant="outline" 
              onClick={() => window.history.back()}
              className="w-full"
            >
              Go Back
            </NeonButton>
          </div>
          
          <div className="pt-4 border-t border-primary/20">
            <p className="text-xs text-muted-foreground">
              Error Code: 404 | Route: {location.pathname}
            </p>
          </div>
        </NeonCardContent>
      </NeonCard>
    </div>
  );
};

export default NotFound;
