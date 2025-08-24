import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { AuthForm } from "./AuthForm";

interface AuthOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "signin" | "signup";
}

export function AuthOverlay({ isOpen, onClose, initialMode = "signin" }: AuthOverlayProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimatingOut(false);
      document.body.style.overflow = "hidden";
    } else {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "unset";
      }, 300);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isVisible && !isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen && !isAnimatingOut
          ? "opacity-100 backdrop-blur-xl"
          : "opacity-0 backdrop-blur-none"
      }`}
      onClick={handleBackdropClick}
      style={{
        background: `
          radial-gradient(ellipse at center, 
            hsla(199, 89%, 48%, 0.1) 0%, 
            hsla(220, 91%, 2%, 0.8) 50%, 
            hsla(222, 84%, 5%, 0.95) 100%
          )
        `,
      }}
    >
      {/* Liquid Glass Container */}
      <div
        className={`relative w-full max-w-md transform transition-all duration-300 ${
          isOpen && !isAnimatingOut
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-95 translate-y-4 opacity-0"
        }`}
      >
        {/* Glass Effect Background */}
        <div className="liquid-glass-container">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 rounded-full p-2 text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
            aria-label="Close authentication modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="relative z-10 p-8 pt-12">
            <AuthForm initialMode={initialMode} onSuccess={onClose} />
          </div>

          {/* Cyber Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="cyber-scan-line"></div>
            <div className="cyber-grid-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}