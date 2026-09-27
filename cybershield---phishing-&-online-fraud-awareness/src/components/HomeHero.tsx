import React from 'react';
import { ShieldAlert, ArrowRight, CheckCircle2, AlertOctagon, Terminal, Smartphone, Sparkles, Lock, ExternalLink, Zap } from 'lucide-react';
import { NavTab } from '../types';

interface HomeHeroProps {
  onNavigate: (tab: NavTab) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Cyber Glow & Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 relative z-10">
        
        {/* Intro Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-medium tracking-wide shadow-sm shadow-cyan-500/20 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span>CyberShield &bull; Interactive Anti-Phishing &amp; Fraud Defense Education</span>
          </div>
        </div>

        {/* 1. Introduction to Phishing & Online Fraud */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Stop Cyber Scams Before{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              They Steal Your Identity
            </span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Phishing is the #1 gateway for cyber criminals to hijack bank accounts, drain UPI wallets, and compromise digital identities. 
            Learn to spot the warning signs, test your instincts in realistic threat simulations, and build unshakeable digital defense habits.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* "Start Learning" button */}
            <button
              onClick={() => onNavigate('learn')}
              className="px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Quick interactive test button */}
            <button
              onClick={() => onNavigate('detect')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide bg-slate-900/90 text-cyan-300 hover:text-white border border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <ShieldAlert className="w-4 h-4 text-cyan-400" />
              <span>Detect a Scam (Interactive)</span>
            </button>

            <button
              onClick={() => onNavigate('quiz')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide bg-slate-900/60 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Take Quiz</span>
            </button>
          </div>
        </div>

        {/* Short Awareness Message Banner */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="glass-panel p-5 rounded-2xl border-cyan-500/30 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-400" />
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 shrink-0 text-cyan-400">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white tracking-wide flex items-center gap-2">
                  <span>Golden Cybersecurity Rule:</span>
                  <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    Zero Trust
                  </span>
                </h2>
                <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
                  Real banks, postal services, police departments, and tech support executives will <strong>NEVER</strong> demand your OTP, debit card PIN, or ask you to scan a UPI QR code to receive money. If an incoming message creates artificial panic and threatens immediate account suspension, pause and verify independently.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cyber Threat Visual Comparison: Fake Login Glass Simulation (Inspired by user's reference) */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Key Stats & Threat Landscape */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>LIVE_CYBER_CRIME_RADAR // 2026</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Fraudsters Don&apos;t Hack Systems.<br />
              <span className="text-cyan-400">They Hack Human Psychology.</span>
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Modern cyber scams no longer look like crude, broken emails. Scammers now use precision domain spoofing, professional glassmorphism templates, search engine ads, and AI voice cloning to stage seamless fraudulent traps.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 backdrop-blur-md">
                <div className="text-2xl sm:text-3xl font-black font-mono text-cyan-400">82%+</div>
                <div className="text-xs text-slate-400 mt-1">Breaches involve social engineering and human manipulation.</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 backdrop-blur-md">
                <div className="text-2xl sm:text-3xl font-black font-mono text-rose-400">3.4M+</div>
                <div className="text-xs text-slate-400 mt-1">Deceptive phishing websites created globally every single day.</div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Learn how to inspect the domain bar before typing sensitive data</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Understand reverse QR tricks and SMS sender spoofing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Know the exact official emergency numbers (1930 / IC3)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Simulated Scam Preview (Frosted Glass UI inspired by user's uploaded mockup) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md">
              {/* Glow backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 blur-xl opacity-75" />

              <div className="relative rounded-2xl glass-panel-glow p-6 text-slate-100 overflow-hidden">
                {/* Deception Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                      Simulated Phishing Lure
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                    Domain: secure-bank-login.xyz
                  </span>
                </div>

                {/* Simulated Glass Login Form matching user's image styling */}
                <div className="rounded-xl bg-gradient-to-b from-sky-900/40 to-slate-900/60 p-5 border border-cyan-400/30 backdrop-blur-md shadow-inner text-center relative">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mx-auto mb-3 text-cyan-300">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">SECURE BANK LOGIN</h3>
                  <p className="text-xs text-cyan-200/80 mb-4">ACCESS YOUR ACCOUNT TO VERIFY KYC</p>

                  <div className="space-y-3 text-left">
                    <div>
                      <label className="text-[11px] text-slate-400 font-mono">Username / Customer ID</label>
                      <div className="mt-1 px-3 py-2 rounded-lg bg-slate-950/60 border border-slate-700 text-xs text-slate-300 font-mono flex items-center justify-between">
                        <span>user_demo_982</span>
                        <span className="text-[10px] text-slate-500">Auto-filled</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 font-mono">Net-Banking Password</label>
                      <div className="mt-1 px-3 py-2 rounded-lg bg-slate-950/60 border border-rose-500/50 text-xs text-rose-300 font-mono flex items-center justify-between">
                        <span>••••••••••••</span>
                        <span className="text-[10px] text-rose-400 font-bold">EXFILTRATED!</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-2.5 rounded-lg bg-rose-950/40 border border-rose-500/40 text-[11px] text-rose-200 text-left space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-rose-300">
                      <AlertOctagon className="w-3.5 h-3.5" />
                      <span>Security Inspection: Red Flags Detected</span>
                    </div>
                    <p className="text-[10px] text-slate-300">
                      1. The address bar says <code className="text-rose-300">.xyz</code> instead of <code className="text-emerald-300">.com</code>.
                    </p>
                    <p className="text-[10px] text-slate-300">
                      2. Real banks authenticate inside protected apps, never disposable domains.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Would you have caught this?</span>
                  <button 
                    onClick={() => onNavigate('challenge')}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Try Phishing Challenge</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Scam Examples Preview Cards */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Common Online Scam Examples
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Fraudsters use these 4 recurring attack angles to target millions of smartphone users daily.
              </p>
            </div>
            <button
              onClick={() => onNavigate('scam-types')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer self-start sm:self-auto"
            >
              <span>Explore all 7 scam categories</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Example 1: Bank / KYC */}
            <div 
              onClick={() => onNavigate('scam-types')}
              className="glass-panel p-4 rounded-xl glass-card-interactive cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                  SMS / Smishing
                </span>
                <span className="text-rose-400 font-semibold text-[11px]">Severe</span>
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                Fake Bank & KYC Expiry
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                &ldquo;Your account will be blocked today. Click this link immediately to upload PAN card.&rdquo;
              </p>
              <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-cyan-400 font-medium flex items-center justify-between">
                <span>View Modus Operandi</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Example 2: Fake Job */}
            <div 
              onClick={() => onNavigate('scam-types')}
              className="glass-panel p-4 rounded-xl glass-card-interactive cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  WhatsApp / Telegram
                </span>
                <span className="text-amber-400 font-semibold text-[11px]">High Risk</span>
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                Work-From-Home Task Scam
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                &ldquo;Earn $300 daily for liking YouTube videos. Deposit $50 to unlock VIP withdrawal.&rdquo;
              </p>
              <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-cyan-400 font-medium flex items-center justify-between">
                <span>View Modus Operandi</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Example 3: UPI QR */}
            <div 
              onClick={() => onNavigate('scam-types')}
              className="glass-panel p-4 rounded-xl glass-card-interactive cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-mono text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                  Payment Apps
                </span>
                <span className="text-rose-400 font-semibold text-[11px]">Severe</span>
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                UPI &ldquo;Scan to Receive&rdquo;
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                Buyer on OLX/Marketplace asks you to scan a QR code & enter PIN to credit payment to you.
              </p>
              <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-cyan-400 font-medium flex items-center justify-between">
                <span>View Modus Operandi</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Example 4: Fake Support Number */}
            <div 
              onClick={() => onNavigate('scam-types')}
              className="glass-panel p-4 rounded-xl glass-card-interactive cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                  Google Search Ad
                </span>
                <span className="text-rose-400 font-semibold text-[11px]">Severe</span>
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                Fake Customer Care Number
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                Calling a search ad helpline prompts you to install AnyDesk or share a 6-digit verification code.
              </p>
              <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-cyan-400 font-medium flex items-center justify-between">
                <span>View Modus Operandi</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
