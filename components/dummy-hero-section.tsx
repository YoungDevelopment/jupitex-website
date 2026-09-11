"use client"

import React, { useEffect, useState } from "react"
import { motion } from "motion/react"

// Compact animated number
function AnimatedCompactNumber({ value, prefix = "", suffix = "", decimals = 1 }: { value: number, prefix?: string, suffix?: string, decimals?: number }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1500; 

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setDisplayValue(easeProgress * value);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value]);

  return (
    <span>
      {prefix}
      {displayValue.toLocaleString(undefined, { 
        minimumFractionDigits: decimals, 
        maximumFractionDigits: decimals 
      })}
      {suffix}
    </span>
  )
}

export function DummyHeroSection() {
  return (
    <section className="relative w-full flex justify-center -mt-[-150px] z-30 pb-24">
      <div className="w-[1024px] bg-[#f8f9fc] rounded-[2rem] shadow-[0_0_60px_20px_rgba(0,0,0,0.15)] border border-gray-200/50 p-6 sm:p-8 flex flex-col gap-6">
        
        {/* TOP BAR */}
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shadow-sm">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight leading-none">Jupitex</h2>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-1">Collection OS</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 shadow-sm">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Oct 1, 2026 - Oct 31, 2026
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 shadow-sm">
              Last 30 days
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-700 font-medium shadow-sm cursor-pointer">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              Add widget
            </div>
            <div className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl px-4 py-2 text-sm text-white font-medium shadow-sm cursor-pointer">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Export
            </div>
          </div>
        </div>

        {/* ROW 1: 4 Metric Cards */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { title: "Total Placements", val: 16.431, isCurrency: false, change: "+15.5%", up: true, vs: "14,653" },
            { title: "Active Debtors", val: 6.225, isCurrency: false, change: "+8.4%", up: true, vs: "5,732" },
            { title: "Promises to Pay", val: 2.832, isCurrency: false, change: "-10.5%", up: false, vs: "3,294" },
            { title: "Settlements", val: 1.224, isCurrency: false, change: "+4.4%", up: true, vs: "1,186" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold text-gray-800">{stat.title}</h3>
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                </div>
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold text-gray-900">
                  <AnimatedCompactNumber value={stat.val} decimals={3} />
                </span>
                <span className={`flex items-center text-[11px] font-bold px-1.5 py-0.5 rounded-md ${stat.up ? 'bg-green-100/60 text-green-600' : 'bg-red-100/60 text-red-600'}`}>
                  {stat.up ? '▲' : '▼'} {stat.change}
                </span>
              </div>
              <div className="text-[11px] text-gray-400 font-medium">vs. {stat.vs} last period</div>
            </motion.div>
          ))}
        </div>

        {/* ROW 2: Main Chart + Stacked Cards */}
        <div className="grid grid-cols-3 gap-6">
          
          {/* Main Chart Card (Takes up 2 columns) */}
          <div className="col-span-2 flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex-1 flex flex-col"
            >
              <h3 className="text-base font-semibold text-gray-800 mb-6">Total Recovered</h3>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-bold text-gray-900">
                  <AnimatedCompactNumber value={446.7} prefix="$" suffix="K" decimals={1} />
                </span>
                <span className="flex items-center text-xs font-bold px-2 py-1 rounded-md bg-green-100/60 text-green-600">
                  ▲ 24.4%
                </span>
                <span className="text-xs text-gray-400 font-medium">vs. last period</span>
              </div>
              
              {/* Fake SVG Line Chart with blue gradient */}
              <div className="relative w-full h-32 mt-auto">
                {/* Chart Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[15, 10, 5, 0].map(val => (
                    <div key={val} className="w-full flex items-center gap-4">
                      <span className="text-[10px] text-gray-400 w-4 text-right">{val}K</span>
                      <div className="flex-1 border-t border-gray-100/80 border-dashed"></div>
                    </div>
                  ))}
                </div>
                {/* SVG Line & Fill */}
                <div className="absolute inset-0 ml-8 pb-4">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
                        <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                      </linearGradient>
                    </defs>
                    {/* Gradient Fill (fades in) */}
                    <motion.path 
                      d="M 0 70 C 5 70, 5 65, 10 65 C 15 65, 15 40, 20 40 C 25 40, 25 45, 30 45 C 35 45, 35 55, 40 55 C 45 55, 45 50, 50 50 C 55 50, 55 25, 60 25 C 65 25, 65 30, 70 30 C 75 30, 75 20, 80 20 C 85 20, 85 35, 90 35 C 95 35, 95 15, 100 15 L 100 100 L 0 100 Z" 
                      fill="url(#blueGrad)" 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                    />
                    {/* Stroke Line (draws path) */}
                    <motion.path 
                      d="M 0 70 C 5 70, 5 65, 10 65 C 15 65, 15 40, 20 40 C 25 40, 25 45, 30 45 C 35 45, 35 55, 40 55 C 45 55, 45 50, 50 50 C 55 50, 55 25, 60 25 C 65 25, 65 30, 70 30 C 75 30, 75 20, 80 20 C 85 20, 85 35, 90 35 C 95 35, 95 15, 100 15" 
                      fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    />
                  </svg>
                  {/* X axis labels */}
                  <div className="absolute -bottom-4 left-0 w-full flex justify-between text-[10px] text-gray-400 font-medium px-2">
                    <span>1 Jan</span>
                    <span>8 Jan</span>
                    <span>15 Jan</span>
                    <span>22 Jan</span>
                    <span>29 Jan</span>
                  </div>
                </div>
              </div>

              {/* Sub-section: Channels */}
              <div className="mt-10 border border-gray-100 rounded-xl p-4 flex justify-between relative">
                <div className="absolute top-2 right-3 text-gray-300">•••</div>
                <div className="absolute -top-3 left-3 bg-white px-2 text-xs font-bold text-gray-700">Recovery Channels</div>
                
                <div className="flex-1 flex flex-col justify-end relative px-4 border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                    <span className="text-lg font-bold text-gray-900">2.884</span>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">AI Voice Agents</div>
                </div>

                <div className="flex-1 flex flex-col justify-end relative px-4 border-l-4 border-green-400">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                    <span className="text-lg font-bold text-gray-900">1.432</span>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">SMS / Email</div>
                </div>

                <div className="flex-1 flex flex-col justify-end relative px-4 border-l-4 border-orange-400">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    <span className="text-lg font-bold text-gray-900">562</span>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Manual Agents</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stacked Right Cards */}
          <div className="col-span-1 flex flex-col gap-4">
            
            {/* Top Stacked Card: Most Day Active */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex-1 relative flex flex-col"
            >
              <div className="absolute top-4 right-4 text-gray-300">•••</div>
              <h3 className="text-sm font-semibold text-gray-800 mb-6">Most Active Day</h3>
              
              <div className="flex items-end justify-between mt-auto h-32 px-2 pb-6">
                {[
                  { d: "Sun", h: 40 },
                  { d: "Mon", h: 60 },
                  { d: "Tue", h: 100, active: true },
                  { d: "Wed", h: 50 },
                  { d: "Thu", h: 30 },
                  { d: "Fr", h: 70 },
                  { d: "Sat", h: 80 },
                ].map(day => (
                  <div key={day.d} className="flex flex-col items-center gap-2 relative">
                    {day.active && (
                      <span className="absolute -top-6 text-[10px] font-bold text-gray-700">8.162</span>
                    )}
                    <div 
                      className={`w-6 rounded-md ${day.active ? 'bg-blue-500' : 'bg-gray-100'}`} 
                      style={{ height: `${day.h}%` }}
                    ></div>
                    <span className={`text-[10px] font-medium absolute -bottom-5 ${day.active ? 'text-blue-500' : 'text-gray-400'}`}>{day.d}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom Stacked Card: Automation Rate */}
            <motion.div 

              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] z-[-50] border border-gray-100 flex-1 relative flex flex-col items-center"
            >
              <div className="absolute top-4 right-4 text-gray-300">•••</div>
              <h3 className="text-sm font-semibold text-gray-800 mb-4 w-full text-left">AI Resolution Rate</h3>
              
              <div className="relative w-40 h-24 mt-auto overflow-hidden flex justify-center items-end">
                {/* Fake SVG Gauge */}
                <svg className="w-full h-[200%] absolute top-0" viewBox="0 0 100 100">
                  <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#f3f4f6" strokeWidth="12" strokeLinecap="round" strokeDasharray="4 6" />
                  <path d="M 10 50 A 40 40 0 0 1 70 20" fill="none" stroke="#34d399" strokeWidth="12" strokeLinecap="round" strokeDasharray="4 6" />
                </svg>
                <div className="flex flex-col items-center pb-2 z-10">
                  <span className="text-3xl font-bold text-gray-900">68%</span>
                  <span className="text-[9px] font-medium text-gray-400">On track for 80% target</span>
                </div>
              </div>
              
              <button className="mt-4 border border-gray-200 text-gray-600 text-xs font-semibold py-1.5 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                Show details
              </button>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}
