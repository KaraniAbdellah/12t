import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Sparkles,
  CheckCircle2,
  Users,
} from "lucide-react";
import first_part from "../assets/12t.png";
import second_part from "../assets/12.png";
import { primary_color } from "../constant/conts";

export default function Footer() {
  return (
    <footer
      className="relative text-white overflow-hidden font-sans mt-20"
      style={{
        background: `linear-gradient(180deg, ${primary_color} 0%, #1e40af 100%)`,
      }}
    >
      {/* 1. Subtle Grid Texture Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* 2. Vertical Dashed Divider Lines */}
      <div className="absolute top-0 bottom-0 left-[8%] lg:left-[20%] border-r border-white/15 border-dashed pointer-events-none z-0" />
      <div className="absolute top-0 bottom-0 right-[8%] lg:right-[20%] border-r border-white/15 border-dashed pointer-events-none z-0" />

      {/* 3. Concentric Rings at the Top Center */}
      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[850px] h-[850px] rounded-full border border-white/10 pointer-events-none z-0" />
      <div className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-white/10 pointer-events-none z-0" />
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full border border-white/15 pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto pt-24 pb-36 px-6 sm:px-12 flex flex-col items-center text-center">
        {/* Top Arc of Floating Icons */}
        <div className="relative flex justify-center items-end gap-4 sm:gap-7 h-24 mb-10 w-full max-w-md">
          <div className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 translate-y-7 shadow-sm">
            <Smartphone className="w-4 h-4 text-white/90" />
          </div>

          <div className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 translate-y-2 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-white/90" />
          </div>

          {/* Center Brand Logo Card */}
          <div className="p-3 bg-white rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.25)] z-20 mx-2 -translate-y-2 flex items-center justify-center">
            <div className="flex items-center">
              <img src={second_part} alt="12T" className="h-10 w-10 object-contain" />
              <img src={first_part} alt="12T" className="h-10 w-10 object-contain" />
            </div>
          </div>

          <div className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 translate-y-2 shadow-sm">
            <Sparkles className="w-4 h-4 text-white/90" />
          </div>

          <div className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 translate-y-7 shadow-sm">
            <Users className="w-4 h-4 text-white/90" />
          </div>
        </div>

        {/* Headline & CTA */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 max-w-2xl text-white leading-tight">
          Ready to pass Google Play's 14-day closed testing track?
        </h2>

        <p className="text-white/85 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
          12 real testers on physical devices. Pay only after 10 Days of verified daily engagement.
        </p>

        <motion.a
          href="/#contact-us"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-slate-900 text-sm font-extrabold rounded-2xl hover:bg-slate-50 transition-all shadow-xl shadow-black/10 cursor-pointer"
        >
          <span style={{ color: primary_color }}>Get 12 Testers Now</span>
          <ArrowRight className="w-4 h-4" style={{ color: primary_color }} />
        </motion.a>

        {/* Footer Navigation Columns */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 mt-28 text-left text-sm text-white/80 border-t border-white/15 pt-12">
          {/* Brand Summary */}
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white font-extrabold text-xl tracking-tight">
              12T<span className="text-blue-200">.</span>
            </div>
            <p className="max-w-[320px] leading-relaxed text-xs sm:text-sm text-white/75">
              Helping Android developers fulfill Google Play Console closed testing requirements with real active testers across 14 consecutive days.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Navigation</h4>
            <a href="/" className="hover:text-white transition-colors text-xs sm:text-sm">Home</a>
            <a href="/#how-it-works" className="hover:text-white transition-colors text-xs sm:text-sm">How It Works</a>
            <a href="/#pricing" className="hover:text-white transition-colors text-xs sm:text-sm">Pricing</a>
            <a href="/blogs" className="hover:text-white transition-colors text-xs sm:text-sm">Blogs</a>
          </div>

          {/* Platform & Contact */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Connect</h4>
            <a href="/aboutMe" className="hover:text-white transition-colors text-xs sm:text-sm">About Me</a>
            <a href="/#contact-us" className="hover:text-white transition-colors text-xs sm:text-sm">Contact Support</a>
            <div className="flex items-center gap-1.5 text-xs text-white/70 mt-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
              <span>Real Hardware Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="w-full mt-12 pt-6 border-t border-white/10 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} 12T. All rights reserved.</span>
          <span>Google Play is a trademark of Google LLC.</span>
        </div>
      </div>

      {/* Massive Background Watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none select-none translate-y-[28%]">
        <h1 className="text-[20vw] font-black text-white/[0.07] leading-none tracking-tighter m-0 p-0">
          12T
        </h1>
      </div>
    </footer>
  );
}
