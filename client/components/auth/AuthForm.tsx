import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock, User, Loader2 } from "lucide-react";
import { SocialButtons } from "./SocialButtons";

interface AuthFormProps {
  initialMode: "signin" | "signup";
  onSuccess: () => void;
}

interface FormData {
  email: string;
  password: string;
  name: string;
  rememberMe: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
  name?: string;
}

export function AuthForm({ initialMode, onSuccess }: AuthFormProps) {
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    name: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Name validation for signup
    if (mode === "signup" && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Show success message then close
      setTimeout(() => {
        onSuccess();
      }, 1500);
    }, 2000);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleMode = () => {
    setMode(prev => prev === "signin" ? "signup" : "signin");
    setErrors({});
    setFormData({
      email: "",
      password: "",
      name: "",
      rememberMe: false,
    });
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          {mode === "signin" ? "Welcome back!" : "Account created!"}
        </h3>
        <p className="text-gray-400">
          {mode === "signin" ? "You've been signed in successfully." : "Your account has been created successfully."}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          {mode === "signin" ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-gray-400 text-sm">
          {mode === "signin" 
            ? "Sign in to your account to continue" 
            : "Join us to secure your digital world"
          }
        </p>
      </div>

      {/* Social Buttons */}
      <SocialButtons />

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-transparent px-4 text-gray-400">or continue with email</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name field for signup */}
        {mode === "signup" && (
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white text-sm font-medium">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`pl-10 bg-white/5 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyber-blue focus:ring-cyber-blue ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-red-400 text-xs">{errors.name}</p>
            )}
          </div>
        )}

        {/* Email field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white text-sm font-medium">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`pl-10 bg-white/5 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyber-blue focus:ring-cyber-blue ${
                errors.email ? "border-red-500" : ""
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-xs">{errors.email}</p>
          )}
        </div>

        {/* Password field */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-white text-sm font-medium">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder={mode === "signin" ? "Enter your password" : "Create a password"}
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className={`pl-10 pr-10 bg-white/5 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyber-blue focus:ring-cyber-blue ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-400 text-xs">{errors.password}</p>
          )}
        </div>


        {/* Remember me / Forgot password */}
        {mode === "signin" && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={formData.rememberMe}
                onCheckedChange={(checked) => handleInputChange("rememberMe", !!checked)}
                className="border-gray-600 data-[state=checked]:bg-cyber-blue data-[state=checked]:border-cyber-blue"
              />
              <Label htmlFor="remember" className="text-sm text-gray-400">
                Remember me
              </Label>
            </div>
            <button
              type="button"
              className="text-sm text-cyber-blue hover:text-blue-400 transition-colors"
            >
              Forgot password?
            </button>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-cyber-blue to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/25"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {mode === "signin" ? "Signing in..." : "Creating account..."}
            </>
          ) : (
            mode === "signin" ? "Sign In" : "Create Account"
          )}
        </Button>
      </form>

      {/* Mode toggle */}
      <div className="mt-6 text-center">
        <span className="text-gray-400 text-sm">
          {mode === "signin" ? "Don't have an account?" : "Already have an account?"}
        </span>{" "}
        <button
          type="button"
          onClick={toggleMode}
          className="text-cyber-blue hover:text-blue-400 font-medium text-sm transition-colors"
        >
          {mode === "signin" ? "Sign up" : "Sign in"}
        </button>
      </div>
    </div>
  );
}