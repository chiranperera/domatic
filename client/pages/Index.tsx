import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export default function Index() {
  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-50 w-full h-[89px] flex items-center justify-between px-4 sm:px-6 lg:px-[100px] bg-transparent">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-2 h-4 sm:h-5 bg-white"></div>
          <span
            className="text-[42px] font-bold text-white"
            style={{ font: "700 42px/63px DM Sans, sans-serif" }}
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
          <button className="text-white p-2">
            <svg
              className="w-6 h-6"
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
          </button>
        </div>

        {/* Sign In Button */}
        <Button
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

      {/* Hero Section with Background */}
      <div className="relative w-full min-h-[600px] sm:min-h-[800px] lg:h-[1075px] overflow-hidden">
        {/* Aurora Background */}
        <div className="absolute inset-0 aurora-gradient"></div>

        {/* Background Images */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/88af472420c530eb0c69ff0be97de82f01ce72a6?width=2880"
            alt="Background"
            className="w-full h-full object-cover opacity-80 mt-[134px]"
          />
        </div>

        {/* Hero Content */}
        <div
          className="relative z-10 flex flex-col items-center text-center pt-[160px] px-6 cyber-hero-animated"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2Fdd067d1a18d54c45bde7470fb8926721%2Fd9c30919b837408c9522f7c8fd31b486)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* Animated Data Streams */}
          <div className="cyber-data-stream"></div>
          <div className="cyber-data-stream"></div>
          <div className="cyber-data-stream"></div>
          <div className="cyber-data-stream"></div>
          <h1
            className="text-white mb-4 animated-glow"
            style={{ font: "700 75px/94px DM Sans, sans-serif" }}
          >
            Mission Possible
          </h1>
          <h2
            className="text-white mb-8"
            style={{ font: "400 27px/40.5px DM Sans, sans-serif" }}
          >
            Build, Deploy, Defend.
          </h2>
          <p
            className="text-white max-w-[545px] text-center mb-16"
            style={{ font: "400 17px/26px DM Sans, sans-serif" }}
          >
            Trusted by ISPs and enterprises to develop reliable integrations,
            deploy high-availability hosting, and defend with scalable
            cybersecurity solutions.
          </p>

          {/* Dashboard Analytics Section */}
          <div
            className="relative w-full max-w-[830px] h-[484px] flex flex-col justify-start items-center"
            style={{ marginTop: "-4px" }}
          >
            {/* World Map Background */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f45015bd3536b051326c84ad97176fa7094d5437?width=1714"
              alt="World Map"
              className="absolute w-full h-full object-contain"
              style={{ top: "1px", bottom: "0px", left: "0px", right: "0px" }}
            />

            {/* Cortex AI Threat Detection Label */}
            <div
              className="absolute flex flex-col justify-start gap-3"
              style={{
                top: "46px",
                left: "0px",
                width: "720px",
                margin: "0 0 auto 52px",
              }}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b21fcdd6ef336cc07e948e9cb62a44de738ba8f1?width=78"
                alt="Play button"
                className="w-10 h-10 rounded-full ml-auto animated-glow"
              />
              <span
                className="text-white font-medium text-left"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  marginTop: "-39px",
                }}
              >
                Cortex AI Threat Detection
              </span>
            </div>

            {/* Statistics Cards */}
            <div
              className="absolute bottom-[92px] left-0 flex items-end gap-4"
              style={{ marginLeft: "58px" }}
            >
              {/* Detected Threats */}
              <div
                className="rounded-sm p-4 min-w-[110px]"
                style={{
                  marginLeft: "3px",
                  border: "1px none rgb(31, 41, 55)",
                }}
              >
                <div className="text-[23px] font-normal text-white mb-1 text-left">
                  <AnimatedCounter target={13274} separator="," />
                </div>
                <div className="text-[11px] text-gray-400 text-left">
                  Detected Threats
                </div>
              </div>

              {/* Threats Blocked */}
              <div
                className="rounded-sm p-4 min-w-[104px]"
                style={{ border: "1px none rgb(31, 41, 55)" }}
              >
                <div className="text-[24px] font-normal text-white mb-1 text-left">
                  <AnimatedCounter target={643} />
                </div>
                <div className="text-[11px] text-gray-400 text-left">
                  Threats Blocked
                </div>
              </div>

              {/* Average Response Time */}
              <div className="text-left">
                <div
                  className="text-[23px] font-normal text-white"
                  style={{ paddingBottom: "3px" }}
                >
                  <AnimatedCounter target={5} suffix=" min" />
                </div>
                <div
                  className="text-[11px] text-gray-400"
                  style={{ paddingBottom: "17px" }}
                >
                  Average Response Time
                </div>
              </div>
            </div>

            {/* Charts and Analytics */}
            <div
              className="absolute bottom-[92px] right-0 flex gap-4"
              style={{ margin: "0 90px -67px 0" }}
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
                    <span className="ml-auto"><AnimatedCounter target={40} suffix="%" /></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                    <span>Malware</span>
                    <span className="ml-auto"><AnimatedCounter target={27} suffix="%" /></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-sm"></div>
                    <span>Intrusion</span>
                    <span className="ml-auto"><AnimatedCounter target={18} suffix="%" /></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-sm"></div>
                    <span>Other</span>
                    <span className="ml-auto"><AnimatedCounter target={18} suffix="%" /></span>
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
                    className="absolute flex flex-col items-center justify-center"
                    style={{
                      top: "2px",
                      bottom: "0px",
                      left: "0px",
                      right: "0px",
                      marginTop: "-1px",
                    }}
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
                    <span className="ml-auto"><AnimatedCounter target={40} suffix="%" /></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                    <span>Intrusion</span>
                    <span className="ml-auto"><AnimatedCounter target={18} suffix="%" /></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-sm"></div>
                    <span>Other</span>
                    <span className="ml-auto"><AnimatedCounter target={13} suffix="%" /></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Series Chart */}
            <div className="absolute bottom-[184px] left-[104px] w-[380px] h-[74px]">
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

      {/* Trusted By Section */}
      <div className="w-full pb-[100px] bg-cyber-darker">
        <div className="w-full text-center px-4">
          <div className="text-[12px] sm:text-[14px] text-white font-dm-sans font-bold mb-[34px]">
            Trusted By
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-12 xl:gap-16">
            {/* Sonar */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/616fb4e9dc800aafa351522aa8317b12f159e2e5?width=70"
                alt="Sonar logo"
                className="w-6 h-6 sm:w-9 sm:h-9"
              />
              <span className="text-[20px] sm:text-[28px] lg:text-[33px] text-gray-300 font-inter">
                sonar
              </span>
            </div>

            {/* Broadpeak */}
            <div className="flex flex-col items-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/206c1eb4bf0d80bfe800003ca50bc369893d03bf?width=338"
                alt="Broadpeak logo"
                className="w-[120px] h-[36px] sm:w-[150px] sm:h-[46px] lg:w-[169px] lg:h-[51px]"
              />
              <span
                className="text-[29px] text-gray-300 font-inter"
                style={{ marginTop: "-35px" }}
              >
                broadpeak
              </span>
            </div>

            {/* Ruckus */}
            <div className="flex flex-col items-center">
              <span className="text-[18px] sm:text-[24px] lg:text-[30px] text-gray-300 font-inter font-bold">
                RUCKUS
              </span>
              <span className="text-[8px] sm:text-[10px] lg:text-[12px] text-gray-400 font-inter font-bold">
                COMMSCOPE
              </span>
            </div>

            {/* Palo Alto */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/77a97b67360c119135f86ac18307ea8da584fdce?width=76"
                alt="Palo Alto logo"
                className="w-6 h-5 sm:w-8 sm:h-6 lg:w-10 lg:h-7"
              />
              <span className="text-[18px] sm:text-[24px] lg:text-[29px] text-gray-300 font-inter font-bold">
                paloalto
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
