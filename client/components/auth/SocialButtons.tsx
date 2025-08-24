import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function SocialButtons() {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleSocialAuth = (provider: string) => {
    setLoadingProvider(provider);
    
    // Simulate authentication process
    setTimeout(() => {
      setLoadingProvider(null);
      // Show a brief success state or handle the auth flow
      console.log(`Authenticating with ${provider}...`);
    }, 2000);
  };

  return (
    <div className="space-y-3">
      {/* Google Button */}
      <Button
        type="button"
        variant="outline"
        onClick={() => handleSocialAuth("google")}
        disabled={loadingProvider !== null}
        className="w-full bg-white/5 border-gray-600 text-white hover:bg-white/10 hover:border-gray-500 transition-all duration-200 py-3 relative overflow-hidden"
      >
        {loadingProvider === "google" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Connecting...
          </>
        ) : (
          <>
            {/* Google Icon */}
            <svg
              className="mr-2 h-4 w-4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </>
        )}
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </Button>

      {/* X (Twitter) Button */}
      <Button
        type="button"
        variant="outline"
        onClick={() => handleSocialAuth("x")}
        disabled={loadingProvider !== null}
        className="w-full bg-white/5 border-gray-600 text-white hover:bg-white/10 hover:border-gray-500 transition-all duration-200 py-3 relative overflow-hidden"
      >
        {loadingProvider === "x" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Connecting...
          </>
        ) : (
          <>
            {/* X (Twitter) Icon */}
            <svg
              className="mr-2 h-4 w-4 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
            </svg>
            Continue with X
          </>
        )}
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </Button>

      {/* Alternative layout for smaller screens */}
      <div className="lg:hidden flex gap-3">
        {/* Google Compact Button */}
        <Button
          type="button"
          variant="outline"
          onClick={() => handleSocialAuth("google")}
          disabled={loadingProvider !== null}
          className="flex-1 bg-white/5 border-gray-600 text-white hover:bg-white/10 hover:border-gray-500 transition-all duration-200 py-3"
        >
          {loadingProvider === "google" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          )}
        </Button>

        {/* X Compact Button */}
        <Button
          type="button"
          variant="outline"
          onClick={() => handleSocialAuth("x")}
          disabled={loadingProvider !== null}
          className="flex-1 bg-white/5 border-gray-600 text-white hover:bg-white/10 hover:border-gray-500 transition-all duration-200 py-3"
        >
          {loadingProvider === "x" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <svg
              className="h-4 w-4 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
            </svg>
          )}
        </Button>
      </div>
    </div>
  );
}