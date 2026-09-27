import React, { useState } from 'react';
import { Shield, AlertTriangle, BookOpen, Search, Lock, Award, Compass, BarChart2, MessageSquare, PhoneCall, Menu, X, CheckCircle, Code, Download, ExternalLink, LogOut, User } from 'lucide-react';
import { NavTab } from '../types';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  currentTab: NavTab;
  setTab: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showVsModal, setShowVsModal] = useState(false);
  const { overallProgressPercent } = useProgress();
  const { currentUser, logout } = useAuth();

  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'login', label: 'Login / Register', icon: <User className="w-4 h-4" /> },
    { id: 'learn', label: 'Learn Phishing', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'scam-types', label: 'Scam Messages & KYC', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'detect', label: 'Detect a Scam', icon: <Search className="w-4 h-4" /> },
    { id: 'safety', label: 'Safety Tips', icon: <Lock className="w-4 h-4" /> },
    { id: 'quiz', label: 'Quiz', icon: <Award className="w-4 h-4" /> },
    { id: 'challenge', label: 'Challenge', icon: <Compass className="w-4 h-4" /> },
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart2 className="w-4 h-4" /> },
    { id: 'report', label: 'Report & Help', icon: <PhoneCall className="w-4 h-4" /> },
    { id: 'feedback', label: 'Feedback', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  const handleNavClick = (tab: NavTab) => {
    setTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/85 border-b border-cyan-500/20 shadow-lg shadow-black/40">
      {/* Top emergency & live alert bar */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 px-4 py-1.5 text-xs border-b border-cyan-500/10 flex items-center justify-between text-slate-300">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30 animate-pulse">
            CYBER ALERT
          </span>
          <span className="truncate">
            Beware of fake KYC & &ldquo;Account Blocked&rdquo; SMS lures asking to enter banking PINs. Official banks never ask for OTPs.
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 shrink-0 text-cyan-400 font-mono text-[11px]">
          <span>Helpline: <strong>1930</strong> (India) | <strong>IC3.gov</strong> (US)</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center p-0.5 shadow-md shadow-cyan-500/30 group-hover:shadow-cyan-400/50 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-950 animate-ping" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                  CyberShield
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-semibold">
                  SEC-ED
                </span>
              </div>
              <p className="text-[11px] text-slate-400 tracking-wide font-medium">
                Anti-Phishing & Fraud Awareness
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                  }`}
                >
                  <span className={isActive ? 'text-cyan-400' : 'text-slate-400'}>{item.icon}</span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Awareness Progress Pill & Visual Studio Guide button */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={() => setShowVsModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-900/40 text-xs font-semibold cursor-pointer transition-all shadow-sm"
              title="View instructions to run in Visual Studio or download pure HTML"
            >
              <Code className="w-3.5 h-3.5 text-blue-400" />
              <span>Visual Studio Run</span>
            </button>

            <button
              onClick={() => handleNavClick('dashboard')}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 transition-all cursor-pointer shadow-inner shadow-cyan-950"
              title="Click to view full security dashboard"
            >
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Awareness Progress</div>
                <div className="text-xs font-bold font-mono text-cyan-300">{overallProgressPercent}% Complete</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center relative">
                <svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-700"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-cyan-400 transition-all duration-700 ease-out"
                    strokeDasharray={`${overallProgressPercent}, 100`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                {overallProgressPercent >= 70 ? (
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 absolute" />
                ) : (
                  <span className="text-[9px] font-mono font-bold text-cyan-300 absolute">
                    {overallProgressPercent}%
                  </span>
                )}
              </div>
            </button>

            {/* User Session Profile & Logout */}
            {currentUser && (
              <div className="flex items-center gap-2 pl-1 border-l border-slate-800">
                <div className="hidden 2xl:block text-right">
                  <div className="text-xs font-semibold text-white truncate max-w-[110px]">
                    {currentUser.name}
                  </div>
                  <div className="text-[10px] text-cyan-400 font-mono truncate max-w-[110px]">
                    {currentUser.role || 'Member'}
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-rose-500/40 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
                  title={`Signed in as ${currentUser.name} (${currentUser.email}). Click to Sign Out.`}
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setShowVsModal(true)}
              className="p-1.5 rounded-lg bg-blue-950/70 border border-blue-500/40 text-blue-300 text-xs flex items-center gap-1"
              title="Visual Studio Run"
            >
              <Code className="w-4 h-4 text-blue-400" />
            </button>
            <button
              onClick={() => handleNavClick('dashboard')}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs text-cyan-300 font-mono"
            >
              <span className="text-[10px] text-slate-400">Prog:</span>
              <strong>{overallProgressPercent}%</strong>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-1.5 backdrop-blur-2xl">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all text-left ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-300 hover:bg-slate-900 border border-slate-800/80'
                  }`}
                >
                  <span className={isActive ? 'text-cyan-400' : 'text-slate-400'}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <span>Overall Awareness Level</span>
            <span className="font-mono font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/40">
              {overallProgressPercent}% Ready
            </span>
          </div>

          {currentUser && (
            <div className="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">{currentUser.name}</div>
                  <div className="text-[10px] text-slate-400">{currentUser.email}</div>
                </div>
              </div>
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium hover:bg-rose-500/20 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Visual Studio Run Guide Modal */}
      {showVsModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl max-w-xl w-full p-6 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setShowVsModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">How to Run in Visual Studio</h3>
                <p className="text-xs text-slate-400">Simple instructions for pure HTML/JS/CSS or full React stack</p>
              </div>
            </div>

            {/* Option 1: Pure HTML/JS/CSS */}
            <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Option 1: Pure HTML + JavaScript + CSS (Zero Setup)
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-semibold">
                  EASIEST
                </span>
              </div>
              <p className="text-xs text-slate-300">
                We provided <strong>cyber-shield.html</strong> right in your project folder! It includes HTML, JavaScript, and CSS all-in-one.
              </p>
              <ol className="text-xs text-slate-400 space-y-1 list-decimal list-inside">
                <li>Open the folder in Visual Studio or VS Code.</li>
                <li>Right-click <strong>cyber-shield.html</strong> &rarr; Click <em>&ldquo;Open with Live Server&rdquo;</em> (or double-click to view directly in Chrome/Edge).</li>
                <li>No Node.js or installation required!</li>
              </ol>
              <div className="pt-2 flex gap-2">
                <a
                  href="/standalone.html"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open Standalone HTML
                </a>
              </div>
            </div>

            {/* Option 2: Full React Project */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  Option 2: React + Vite Development Server
                </span>
                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-mono font-semibold">
                  Full Stack
                </span>
              </div>
              <p className="text-xs text-slate-300">
                In the Visual Studio terminal (<code className="text-cyan-300">Ctrl + ~</code>):
              </p>
              <pre className="p-2 rounded bg-slate-900 text-[11px] font-mono text-cyan-300">
                npm install{'\n'}npm run dev
              </pre>
              <p className="text-xs text-slate-400">Then visit <span className="text-white font-mono">http://localhost:3000</span> in your browser.</p>
            </div>

            <button
              onClick={() => setShowVsModal(false)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

