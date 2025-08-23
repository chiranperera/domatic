import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="relative z-50 w-full h-[89px] flex items-center justify-between px-4 sm:px-6 lg:px-[100px]">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-2 h-4 sm:h-5 bg-white"></div>
          <span className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white font-inter">domatic</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-cyber-blue font-bold text-[15px] font-dm-sans">Services</a>
          <a href="#" className="text-white font-bold text-[15px] font-dm-sans hover:text-cyber-blue transition-colors">Sectors</a>
          <a href="#" className="text-white font-bold text-[15px] font-dm-sans hover:text-cyber-blue transition-colors">Insights</a>
          <a href="#" className="text-white font-bold text-[15px] font-dm-sans hover:text-cyber-blue transition-colors">About</a>
          <a href="#" className="text-white font-bold text-[15px] font-dm-sans hover:text-cyber-blue transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button className="text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Sign In Button */}
        <Button className="hidden lg:block bg-white text-black font-bold text-[14px] px-6 py-3 rounded-[18px] h-[38px] hover:bg-gray-100 transition-colors">
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
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center pt-8 sm:pt-[42px] px-4 sm:px-6">
          <h1 className="text-[36px] sm:text-[50px] lg:text-[75px] font-bold text-white font-dm-sans leading-tight mb-2 sm:mb-4">
            Mission Possible
          </h1>
          <h2 className="text-[18px] sm:text-[22px] lg:text-[27px] font-normal text-white font-dm-sans mb-4 sm:mb-8">
            Build, Deploy, Defend.
          </h2>
          <p className="text-[14px] sm:text-[16px] font-normal text-white font-lexend max-w-[320px] sm:max-w-[500px] lg:max-w-[545px] leading-relaxed text-center mb-8 sm:mb-16">
            Trusted by ISPs and enterprises to develop reliable integrations,
            deploy high-availability hosting, and defend with scalable
            cybersecurity solutions.
          </p>

          {/* Dashboard Analytics Section */}
          <div className="relative w-full max-w-[830px] h-[484px] mt-16">
            {/* World Map Background */}
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f45015bd3536b051326c84ad97176fa7094d5437?width=1714"
              alt="World Map"
              className="absolute inset-0 w-full h-full object-contain"
            />

            {/* Cortex AI Threat Detection Label */}
            <div className="absolute top-[34px] left-1/2 transform -translate-x-1/2 flex items-center gap-3">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/b21fcdd6ef336cc07e948e9cb62a44de738ba8f1?width=78"
                alt="Play button"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-[16px] text-gray-400 font-inter">Cortex AI Threat Detection</span>
            </div>

            {/* Statistics Cards */}
            <div className="absolute bottom-[92px] left-0 flex items-end gap-4">
              {/* Detected Threats */}
              <div className="bg-cyber-darker/80 border border-gray-800 rounded-sm p-4 min-w-[110px]">
                <div className="text-[23px] font-normal text-white font-dm-sans mb-1">13,274</div>
                <div className="text-[11px] text-gray-400 font-dm-sans">Detected Threats</div>
              </div>

              {/* Threats Blocked */}
              <div className="bg-cyber-darker/80 border border-gray-800 rounded-sm p-4 min-w-[104px]">
                <div className="text-[24px] font-normal text-white font-dm-sans mb-1">643</div>
                <div className="text-[11px] text-gray-400 font-dm-sans">Threats Blocked</div>
              </div>

              {/* Average Response Time */}
              <div className="text-left">
                <div className="text-[23px] font-normal text-white font-dm-sans mb-1">5 min</div>
                <div className="text-[11px] text-gray-400 font-dm-sans">Average Response Time</div>
              </div>
            </div>

            {/* Charts and Analytics */}
            <div className="absolute bottom-[92px] right-0 flex gap-4">
              {/* Threat Activity Chart */}
              <div className="bg-cyber-darker/80 border border-gray-800 rounded-sm p-3 w-[135px] h-[156px]">
                <div className="text-[8px] text-white font-dm-sans font-bold mb-3">Threat Activity</div>
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ed22609638b1e18f39055b5537015f063c874b39?width=230"
                  alt="Threat Activity Chart"
                  className="w-full h-8 mb-6"
                />
                
                {/* Legend */}
                <div className="space-y-2 text-[8px] text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-sm"></div>
                    <span>Phishing</span>
                    <span className="ml-auto">40%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                    <span>Malware</span>
                    <span className="ml-auto">27%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-sm"></div>
                    <span>Intrusion</span>
                    <span className="ml-auto">18%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-sm"></div>
                    <span>Other</span>
                    <span className="ml-auto">18%</span>
                  </div>
                </div>
              </div>

              {/* Threat Types Donut Chart */}
              <div className="bg-cyber-darker/80 border border-gray-800 rounded-sm p-3 w-[103px] h-[156px]">
                <div className="text-[8px] text-white font-dm-sans font-bold mb-3">Threat Types</div>
                <div className="relative w-[74px] h-[75px] mx-auto mb-4">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9b21dbf0913426e72d1a343d7bbfc3c6978f114b?width=148"
                    alt="Threat Types Donut Chart"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-[10px] text-white font-dm-sans font-bold">40%</div>
                    <div className="text-[6px] text-white font-dm-sans">-95%</div>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="space-y-1 text-[7px] text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-sm"></div>
                    <span>Phishing</span>
                    <span className="ml-auto">40%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                    <span>Intrusion</span>
                    <span className="ml-auto">18%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-sm"></div>
                    <span>Other</span>
                    <span className="ml-auto">13%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Series Chart */}
            <div className="absolute bottom-[184px] left-[104px] w-[380px] h-[74px]">
              <div className="bg-cyber-darker/80 border-2 border-gray-800 rounded-sm p-3 w-full h-full">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/aa553e8afbbc38d62d5c1d28b8f94ed7027b45f8?width=680"
                  alt="Time Series Chart"
                  className="w-full h-10 rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="absolute bottom-0 w-full h-[220px] bg-gradient-to-t from-cyber-darker to-transparent">
          <div className="absolute bottom-[49px] w-full text-center">
            <div className="text-[14px] text-white font-dm-sans font-bold mb-8">Trusted By</div>
            
            <div className="flex items-center justify-center gap-12 lg:gap-16 px-6">
              {/* Sonar */}
              <div className="flex items-center gap-3">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/616fb4e9dc800aafa351522aa8317b12f159e2e5?width=70"
                  alt="Sonar logo"
                  className="w-9 h-9"
                />
                <span className="text-[33px] text-gray-300 font-inter">sonar</span>
              </div>

              {/* Broadpeak */}
              <div className="flex flex-col items-center">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/206c1eb4bf0d80bfe800003ca50bc369893d03bf?width=338"
                  alt="Broadpeak logo"
                  className="w-[169px] h-[51px]"
                />
                <span className="text-[29px] text-gray-300 font-inter mt-1">broadpeak</span>
              </div>

              {/* Ruckus */}
              <div className="flex flex-col items-center">
                <span className="text-[30px] text-gray-300 font-inter font-bold">RUCKUS</span>
                <span className="text-[12px] text-gray-400 font-inter font-bold">COMMSCOPE</span>
              </div>

              {/* Palo Alto */}
              <div className="flex items-center gap-3">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/77a97b67360c119135f86ac18307ea8da584fdce?width=76"
                  alt="Palo Alto logo"
                  className="w-10 h-7"
                />
                <span className="text-[29px] text-gray-300 font-inter font-bold">paloalto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
