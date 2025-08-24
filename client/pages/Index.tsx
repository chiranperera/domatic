import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { AuthOverlay } from "@/components/auth/AuthOverlay";
import { useState } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authOverlayOpen, setAuthOverlayOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

  const openAuthOverlay = (mode: "signin" | "signup" = "signin") => {
    setAuthMode(mode);
    setAuthOverlayOpen(true);
  };

  const closeAuthOverlay = () => {
    setAuthOverlayOpen(false);
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-50 w-full h-[70px] md:h-[89px] flex items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-[100px] bg-transparent">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-2 h-4 sm:h-5 bg-white"></div>
          <span
            className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-white"
            style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700 }}
          >
            domatic
          </span>
        </div>

        {/* Navigation Links */}
        <div
          className="hidden lg:flex items-center gap-8"
          style={{ font: "400 11px DM Sans, sans-serif" }}
        >
          <a
            href="#"
            className="text-cyber-blue text-[17px] font-medium hover:text-cyber-blue transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white text-[17px] font-medium hover:text-cyber-blue transition-colors"
          >
            Sectors
          </a>
          <a
            href="#"
            className="text-white text-[17px] font-medium hover:text-cyber-blue transition-colors"
          >
            Insights
          </a>
          <a
            href="#"
            className="text-white text-[17px] font-medium hover:text-cyber-blue transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-white text-[17px] font-medium hover:text-cyber-blue transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 relative group"
          >
            {!mobileMenuOpen ? (
              <svg
                className="w-6 h-6 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Sign In Button */}
        <Button
          onClick={() => openAuthOverlay("signin")}
          className="hidden lg:block bg-white text-black h-[38px] hover:bg-gray-100 transition-colors"
          style={{
            borderRadius: "62px",
            width: "99.4px",
            padding: "12px 24px 32px",
            font: "700 17px/21px DM Sans, sans-serif",
          }}
        >
          Sign In
        </Button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`fixed top-[70px] left-0 right-0 z-40 lg:hidden transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="bg-cyber-darker/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#"
              className="block py-3 px-4 text-white text-[16px] font-medium rounded-lg bg-gradient-to-r from-transparent to-transparent hover:from-cyan-500/10 hover:to-blue-500/10 border border-transparent hover:border-cyan-500/30 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                Services
              </span>
            </a>
            <a
              href="#"
              className="block py-3 px-4 text-white text-[16px] font-medium rounded-lg bg-gradient-to-r from-transparent to-transparent hover:from-cyan-500/10 hover:to-blue-500/10 border border-transparent hover:border-cyan-500/30 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                Sectors
              </span>
            </a>
            <a
              href="#"
              className="block py-3 px-4 text-white text-[16px] font-medium rounded-lg bg-gradient-to-r from-transparent to-transparent hover:from-cyan-500/10 hover:to-blue-500/10 border border-transparent hover:border-cyan-500/30 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Insights
              </span>
            </a>
            <a
              href="#"
              className="block py-3 px-4 text-white text-[16px] font-medium rounded-lg bg-gradient-to-r from-transparent to-transparent hover:from-cyan-500/10 hover:to-blue-500/10 border border-transparent hover:border-cyan-500/30 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                About
              </span>
            </a>
            <a
              href="#"
              className="block py-3 px-4 text-white text-[16px] font-medium rounded-lg bg-gradient-to-r from-transparent to-transparent hover:from-cyan-500/10 hover:to-blue-500/10 border border-transparent hover:border-cyan-500/30 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                Contact
              </span>
            </a>
            <Button
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white h-[44px] hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold text-[16px] border border-cyan-400/30 shadow-lg shadow-cyan-500/20"
              onClick={() => {
                setMobileMenuOpen(false);
                openAuthOverlay("signin");
              }}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section with Background */}
      <div className="relative w-full lg:min-h-screen flex flex-col overflow-hidden">
        {/* Aurora Background */}
        <div className="absolute inset-0 aurora-gradient"></div>

        {/* Hero Content Container */}
        <div
          className="relative z-10 flex flex-col h-full cyber-hero-animated"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2Fdd067d1a18d54c45bde7470fb8926721%2Fd9c30919b837408c9522f7c8fd31b486)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            ...(window.innerWidth >= 1024 ? { minHeight: "100vh" } : {}),
          }}
        >
          {/* Animated Data Streams */}
          <div className="cyber-data-stream"></div>
          <div className="cyber-data-stream"></div>
          <div className="cyber-data-stream"></div>
          <div className="cyber-data-stream"></div>

          {/* Top Content - Headings and Description */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-32 pb-8 sm:py-12 md:py-16 lg:py-0 lg:pt-[140px]">
            <h1
              className="text-white mb-3 sm:mb-4 md:mb-4 text-[40px] sm:text-[55px] md:text-[65px] lg:text-[75px] leading-tight"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, color: "white" }}
            >
              Mission Possible
            </h1>
            <h2
              className="text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-[20px] sm:text-[24px] md:text-[27px]"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 400, color: "white" }}
            >
              Build, Deploy, Defend.
            </h2>
            <p
              className="text-white max-w-[90%] sm:max-w-[545px] text-center text-[14px] sm:text-[16px] md:text-[17px] leading-relaxed mb-8 sm:mb-10 md:mb-16 lg:mb-20"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 400, color: "white" }}
            >
              Trusted by ISPs and enterprises to develop reliable integrations,
              deploy high-availability hosting, and defend with scalable
              cybersecurity solutions.
            </p>
          </div>

          {/* Dashboard Analytics Section - Stuck to Bottom */}
          <div className="relative z-30 w-full flex justify-center">
            <div
              className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[830px] h-[220px] sm:h-[350px] md:h-[400px] lg:h-[484px]"
            >
              {/* World Map Background */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f45015bd3536b051326c84ad97176fa7094d5437?width=1714"
                alt="World Map"
                className="absolute w-full h-full object-contain"
              />

              {/* Cortex AI Threat Detection Label - Desktop Only */}
              <div
                className="absolute hidden lg:flex flex-col justify-start gap-3 left-[52px] top-[46px] w-[720px]"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b21fcdd6ef336cc07e948e9cb62a44de738ba8f1?width=78"
                  alt="Play button"
                  className="w-10 h-10 rounded-full ml-auto animated-glow sea-blue-border-glow"
                />
                <span
                  className="text-white font-medium text-left text-[16px]"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    marginTop: "-39px",
                  }}
                >
                  Cortex AI Threat Detection
                </span>
              </div>

              {/* Cortex AI Label for Mobile/Tablet - Updated positioning */}
              <div className="lg:hidden absolute" style={{ top: "3rem", left: "3rem", right: "1rem" }}>
                <span className="text-white text-[12px] sm:text-[14px] font-medium">
                  Cortex AI Threat Detection
                </span>
              </div>

              {/* Statistics Cards - Bottom of Map */}
              <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-[92px] left-0 right-0 px-4 sm:px-8 lg:px-0">
                {/* Mobile/Tablet View - Horizontal Layout */}
                <div className="lg:hidden flex justify-center">
                  <div className="bg-cyber-darker/80 backdrop-blur-sm rounded-lg px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-4 sm:gap-6">
                    {/* Detected Threats */}
                    <div className="text-center">
                      <div className="text-[18px] sm:text-[20px] md:text-[22px] font-normal text-white">
                        <AnimatedCounter target={13274} separator="," />
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-gray-400">
                        Detected Threats
                      </div>
                    </div>

                    {/* Threats Blocked */}
                    <div className="text-center">
                      <div className="text-[18px] sm:text-[20px] md:text-[22px] font-normal text-white">
                        <AnimatedCounter target={643} />
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-gray-400">
                        Threats Blocked
                      </div>
                    </div>

                    {/* Average Response Time */}
                    <div className="text-center">
                      <div className="text-[18px] sm:text-[20px] md:text-[22px] font-normal text-white">
                        <AnimatedCounter target={5} suffix=" min" />
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-gray-400">
                        Average Response Time
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop View - Original Layout */}
                <div className="hidden lg:flex items-end gap-4 ml-[58px]">
                  {/* Detected Threats */}
                  <div className="rounded-sm p-4 min-w-[110px]">
                    <div className="text-[23px] font-normal text-white mb-1 text-left">
                      <AnimatedCounter target={13274} separator="," />
                    </div>
                    <div className="text-[11px] text-gray-400 text-left">
                      Detected Threats
                    </div>
                  </div>

                  {/* Threats Blocked */}
                  <div className="rounded-sm p-4 min-w-[104px]">
                    <div className="text-[24px] font-normal text-white mb-1 text-left">
                      <AnimatedCounter target={643} />
                    </div>
                    <div className="text-[11px] text-gray-400 text-left">
                      Threats Blocked
                    </div>
                  </div>

                  {/* Average Response Time */}
                  <div className="text-left">
                    <div className="text-[23px] font-normal text-white pb-[3px]">
                      <AnimatedCounter target={5} suffix=" min" />
                    </div>
                    <div className="text-[11px] text-gray-400 pb-[17px]">
                      Average Response Time
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts and Analytics - Desktop Only */}
              <div
                className="hidden lg:flex absolute bottom-[92px] right-[90px] gap-4"
                style={{ marginBottom: "-67px" }}
              >
                {/* Threat Activity Chart */}
                <div className="bg-cyber-darker/80 border border-gray-800 rounded-sm p-3 w-[135px] h-[156px]">
                  <div className="text-[8px] text-white font-dm-sans font-bold mb-3">
                    Threat Activity
                  </div>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ed22609638b1e18f39055b5537015f063c874b39?width=230"
                    alt="Threat Activity Chart"
                    className="w-full h-8 mb-6"
                  />

                  {/* Legend */}
                  <div
                    className="space-y-2 text-[8px] text-white"
                    style={{ marginTop: "-20px" }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-sm"></div>
                      <span>Phishing</span>
                      <span className="ml-auto">
                        <AnimatedCounter target={40} suffix="%" />
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                      <span>Malware</span>
                      <span className="ml-auto">
                        <AnimatedCounter target={27} suffix="%" />
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-sm"></div>
                      <span>Intrusion</span>
                      <span className="ml-auto">
                        <AnimatedCounter target={18} suffix="%" />
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-sm"></div>
                      <span>Other</span>
                      <span className="ml-auto">
                        <AnimatedCounter target={18} suffix="%" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Threat Types Donut Chart */}
                <div className="bg-cyber-darker/80 border border-gray-800 rounded-sm p-3 w-[103px] h-[156px]">
                  <div className="text-[8px] text-white font-dm-sans font-bold mb-3">
                    Threat Types
                  </div>
                  <div className="relative w-[74px] h-[75px] mx-auto mb-4">
                    <div
                      className="absolute flex flex-col items-center justify-center inset-0"
                      style={{ marginTop: "-1px" }}
                    >
                      <div
                        className="text-[10px] text-white font-bold"
                        style={{ marginTop: "-2px" }}
                      >
                        <AnimatedCounter target={40} suffix="%" />
                      </div>
                      <div
                        className="text-[6px] text-white"
                        style={{ marginTop: "-2px" }}
                      >
                        <AnimatedCounter target={95} isPercentage={true} />
                      </div>
                    </div>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/9b21dbf0913426e72d1a343d7bbfc3c6978f114b?width=148"
                      alt="Threat Types Donut Chart"
                      className="w-full h-full"
                      style={{ marginTop: "-8px" }}
                    />
                  </div>

                  {/* Legend */}
                  <div
                    className="space-y-1 text-[7px] text-white"
                    style={{ marginTop: "-11px" }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-sm"></div>
                      <span>Phishing</span>
                      <span className="ml-auto">
                        <AnimatedCounter target={40} suffix="%" />
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                      <span>Intrusion</span>
                      <span className="ml-auto">
                        <AnimatedCounter target={18} suffix="%" />
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-sm"></div>
                      <span>Other</span>
                      <span className="ml-auto">
                        <AnimatedCounter target={13} suffix="%" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Series Chart - Desktop Only */}
              <div className="hidden lg:block absolute bottom-[184px] left-[104px] w-[380px] h-[74px]">
                <div
                  className="bg-cyber-darker/80 rounded-sm w-full h-full p-3"
                  style={{
                    margin: "159px 0 0 -27px",
                    border: "1px solid rgb(31, 41, 55)",
                  }}
                >
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/aa553e8afbbc38d62d5c1d28b8f94ed7027b45f8?width=680"
                    alt="Time Series Chart"
                    className="w-full h-10 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div
        className="w-full pb-[60px] sm:pb-[80px] lg:pb-[100px] relative"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2Ff16ee0a559e542848f50f86238f3368e%2F5402c346daf04fd281952ed1445336b5?format=webp&width=800)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full text-center pt-12 sm:pt-16 px-4">
          <div className="text-[12px] sm:text-[14px] text-white font-dm-sans font-bold mb-[34px]">
            Trusted By
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            {/* Sonar */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/616fb4e9dc800aafa351522aa8317b12f159e2e5?width=70"
                alt="Sonar logo"
                className="w-5 h-5 sm:w-7 md:w-8 lg:w-9 lg:h-9"
              />
              <span className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[33px] text-gray-300 font-inter">
                sonar
              </span>
            </div>

            {/* Broadpeak */}
            <div className="flex flex-col items-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/206c1eb4bf0d80bfe800003ca50bc369893d03bf?width=338"
                alt="Broadpeak logo"
                className="w-[100px] h-[30px] sm:w-[130px] sm:h-[40px] md:w-[150px] md:h-[46px] lg:w-[169px] lg:h-[51px]"
              />
              <span
                className="text-[20px] sm:text-[24px] md:text-[27px] lg:text-[29px] text-gray-300 font-inter"
                style={{ marginTop: "-28px" }}
              >
                broadpeak
              </span>
            </div>

            {/* Ruckus */}
            <div className="flex flex-col items-center">
              <span className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] text-gray-300 font-inter font-bold">
                RUCKUS
              </span>
              <span className="text-[7px] sm:text-[9px] md:text-[10px] lg:text-[12px] text-gray-400 font-inter font-bold">
                COMMSCOPE
              </span>
            </div>

            {/* Palo Alto */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/77a97b67360c119135f86ac18307ea8da584fdce?width=76"
                alt="Palo Alto logo"
                className="w-5 h-4 sm:w-7 sm:h-5 md:w-8 md:h-6 lg:w-10 lg:h-7"
              />
              <span className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[29px] text-gray-300 font-inter font-bold">
                paloalto
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Authentication Overlay */}
      <AuthOverlay
        isOpen={authOverlayOpen}
        onClose={closeAuthOverlay}
        initialMode={authMode}
      />
    </div>
  );
}