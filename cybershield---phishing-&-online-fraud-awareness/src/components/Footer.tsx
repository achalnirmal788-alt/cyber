import React from 'react';
import { Shield, Heart, ExternalLink, PhoneCall, AlertTriangle } from 'lucide-react';
import { NavTab } from '../types';

interface FooterProps {
  setTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setTab }) => {
  return (
    <footer className="border-t border-cyan-500/20 bg-slate-950/90 backdrop-blur-xl mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                CyberShield
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Open educational initiative dedicated to anti-phishing defense, fraud awareness, and digital resilience.
            </p>
            <div className="text-[11px] font-mono text-cyan-400/80">
              Zero Trust &bull; Verify Before Tapping
            </div>
          </div>

          {/* Col 2: Education Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Awareness Academy
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={() => setTab('learn')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  What is Phishing?
                </button>
              </li>
              <li>
                <button onClick={() => setTab('scam-types')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Bank & KYC Scams
                </button>
              </li>
              <li>
                <button onClick={() => setTab('scam-types')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  UPI & Payment Traps
                </button>
              </li>
              <li>
                <button onClick={() => setTab('safety')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  7 Golden Safety Rules
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Practical Labs */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Interactive Drills
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={() => setTab('detect')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Scam Detector Simulator
                </button>
              </li>
              <li>
                <button onClick={() => setTab('challenge')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Phishing Challenge (Genuine vs Fake)
                </button>
              </li>
              <li>
                <button onClick={() => setTab('quiz')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Cyber Readiness Quiz
                </button>
              </li>
              <li>
                <button onClick={() => setTab('dashboard')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                  User Dashboard & Certificate
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Emergency Hotlines */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Emergency Fraud Helplines</span>
            </h4>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-rose-500/30 text-xs space-y-1.5 font-mono">
              <div className="flex justify-between items-center text-slate-300">
                <span>India (National):</span>
                <strong className="text-rose-400 font-bold">1930</strong>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>USA (FBI IC3):</span>
                <strong className="text-cyan-300 font-bold">ic3.gov</strong>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>UK Action Fraud:</span>
                <strong className="text-cyan-300 font-bold">0300 123 2040</strong>
              </div>
            </div>
            <button
              onClick={() => setTab('report')}
              className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>View Full Incident Protocol &rarr;</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} CyberShield Awareness Platform. Purely educational simulation. No actual credentials stored.
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => setTab('feedback')} className="hover:text-cyan-400 cursor-pointer">
              Provide Feedback
            </button>
            <span>&bull;</span>
            <button onClick={() => setTab('safety')} className="hover:text-cyan-400 cursor-pointer">
              Safety Best Practices
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
