const BAR_HEIGHTS = Array.from(
  { length: 40 },
  (_, i) => 20 + ((i * 37 + 13) % 81)
)

export function DummyHeroSection() {
  return (
    <section className="relative w-full flex justify-center -mt-[-150px] z-30 pb-24">
      <div className="w-[95%] max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex min-h-[700px]">
        {/* Sidebar */}
        <div className="w-64 bg-[#3a3a3a] text-white p-6 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div>
              <div className="font-semibold text-sm">Analitica</div>
              <div className="text-xs text-white/50">Top Staking Assets</div>
            </div>
          </div>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="SEARCH" 
              className="w-full bg-white/10 border-none rounded-lg py-2 px-4 text-xs text-white placeholder-white/50 outline-none"
            />
          </div>

          <nav className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-3 px-2 py-2 rounded-lg bg-white/10 text-sm font-medium">
              Dashboard
            </div>
            <div className="flex items-center gap-3 px-2 py-2 text-sm text-white/70 hover:text-white">
              Analytics Subsections
            </div>
            <div className="flex items-center gap-3 px-2 py-2 text-sm text-white/70 hover:text-white">
              Sales List
            </div>
          </nav>

          <div className="mt-4">
            <div className="flex items-center justify-between px-2 text-sm font-medium mb-2">
              Goals
              <span className="text-xs">^</span>
            </div>
            <div className="flex flex-col gap-2 pl-4 border-l border-white/20 ml-2">
              <div className="text-xs text-white/70 py-1">Monthly Targets</div>
              <div className="text-xs text-white/70 py-1">Quarterly Goals</div>
              <div className="text-xs text-white/70 py-1 font-medium text-white">Yearly Projections</div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white p-8 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-medium text-sm">Ronald Richards</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-black"></span>
                Timeframe
                <span className="ml-2">Oct 1 - Nov 30, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1 text-xs font-medium">
                Sat, 18 June
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="text-xs font-semibold text-gray-500 tracking-wider mb-2 flex items-center gap-2">
              <span className="text-black">⚡</span> CAPITAL UNDER CONTROL
            </div>
            <div className="flex items-baseline gap-4">
              <h2 className="text-5xl font-semibold">$ 345,392.58</h2>
              <div className="flex gap-2">
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">8.9%</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">$ 248,348.09</span>
              </div>
            </div>
          </div>
          
          {/* Dummy Chart Area */}
          <div className="flex-1 w-full flex items-end gap-1 mb-8 border-b border-gray-100 pb-4 min-h-[300px]">
            {BAR_HEIGHTS.map((height, i) => (
              <div 
                key={i} 
                className="w-full bg-gray-200 rounded-t-sm" 
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
