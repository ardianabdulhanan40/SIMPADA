"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PhoneSchematic() {
  const [stage, setStage] = useState<"splash" | "home">("splash");
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage("home");
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const resetDemo = () => {
    setSelectedPoint(null);
    setStage("splash");
    setTimeout(() => {
      setStage("home");
    }, 2400);
  };

  return (
    <div className="relative mx-auto flex w-full max-w-[320px] items-center justify-center sm:max-w-[360px] md:max-w-[390px]">
      {/* Glow Ambient di Belakang HP */}
      <div className="absolute -inset-4 rounded-[48px] bg-emerald-600/15 blur-2xl md:-inset-6 transition-all duration-700" />

      {/* Frame Bodi HP Android */}
      <div className="relative aspect-[9/19.5] w-full rounded-[44px] border-[8px] border-slate-900 bg-slate-950 p-2 shadow-2xl ring-1 ring-white/10 sm:rounded-[48px] sm:border-[9px]">
        
        {/* Layar HP */}
        <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-[#f6f8f6] select-none text-slate-800 font-sans">
          
          {/* Punch-hole Camera Depan Minimalis (Tidak Menabrak Jam) */}
          <div className="absolute left-1/2 top-2 z-50 h-3 w-3 -translate-x-1/2 rounded-full bg-slate-950 ring-2 ring-black/40" />

          {/* Konten Transisi */}
          <AnimatePresence mode="wait">
            {stage === "splash" ? (
              /* ================= 1. SPLASH SCREEN ================= */
              <motion.div
                key="splash"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-b from-[#3a6932] via-[#2d5a27] to-[#1e3f1a] px-6 pb-6 pt-3 text-white"
              >
                {/* Orbs Background */}
                <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-white/[0.07] blur-sm pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/[0.08] blur-sm pointer-events-none" />

                {/* Status Bar Splash */}
                <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-white/80">
                  <span>16:40</span>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span>4G</span>
                    <span>📶</span>
                    <span>61%</span>
                  </div>
                </div>

                {/* Logo & Judul */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                  className="my-auto flex flex-col items-center text-center"
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl shadow-black/20 ring-4 ring-white/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-14 w-14 text-[#2d5a27] -rotate-12"
                    >
                      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                    </svg>
                  </div>

                  <h2 className="mt-6 font-display text-2xl font-extrabold tracking-wider text-white">
                    SIMPADA
                  </h2>
                  <p className="mt-2 text-xs font-normal text-white/80 max-w-[200px] leading-relaxed">
                    Sistem Monitoring Penyakit Daun Padi
                  </p>
                </motion.div>

                {/* Progress Loader */}
                <div className="relative z-10 flex flex-col items-center pb-2 text-center">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                  <span className="mt-2 text-[11px] text-white/70">
                    Menyiapkan aplikasi...
                  </span>
                </div>
              </motion.div>
            ) : (
              /* ================= 2. DASHBOARD HOME SCREEN ================= */
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex h-full w-full flex-col justify-between overflow-y-auto bg-[#f6f8f6] pb-4"
              >
                {/* Header Hijau Terpadu (Status Bar + App Bar) */}
                <div className="bg-[#1e5a22] px-5 pb-5 pt-3 text-white rounded-b-[24px] shadow-sm relative overflow-hidden shrink-0">
                  <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/[0.08] pointer-events-none" />
                  
                  {/* Status Bar di Dalam Header */}
                  <div className="flex items-center justify-between font-mono text-[11px] text-white/85 mb-3">
                    <span>16:40</span>
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <span>4G</span>
                      <span>📶</span>
                      <span>61%</span>
                    </div>
                  </div>

                  {/* App Bar Title & Menu Action */}
                  <div className="flex items-center justify-between pt-1">
                    <h1 className="text-[15px] font-bold tracking-tight text-white leading-tight">
                      Deteksi Penyakit Daun Padi
                    </h1>
                    <button
                      onClick={resetDemo}
                      title="Ulang Animasi"
                      className="rounded-full p-1 text-white/80 hover:bg-white/15 text-sm transition"
                    >
                      ⋮
                    </button>
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex-1 px-4 py-3 space-y-3">
                  {/* Card Progres Pengambilan Sampel */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-emerald-500 bg-emerald-50 text-xs font-bold text-emerald-800">
                      0/5
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-800">
                        Progres pengambilan sampel
                      </h3>
                      <p className="text-[10px] leading-relaxed text-slate-500 mt-0.5">
                        Pilih titik pengambilan sampel (pola X), lalu ambil/unggah 3 foto strata untuk tiap rumpun.
                      </p>
                    </div>
                  </motion.div>

                  {/* Banner Bantuan Panduan */}
                  <div className="flex items-center justify-between rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50/80 to-purple-100/40 px-3.5 py-2.5 shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-600 text-white text-[10px]">
                        📊
                      </div>
                      <p className="text-[10.5px] font-medium text-slate-700 leading-tight">
                        Bingung apa arti Level pada Analisis?<br />
                        <span className="text-[9.5px] text-purple-700 font-semibold">Ketuk untuk lihat panduannya.</span>
                      </p>
                    </div>
                    <span className="text-slate-400 text-xs">›</span>
                  </div>

                  {/* Grid 5 Titik Pola X */}
                  <div className="pt-1">
                    <div className="flex items-center justify-between pb-2 text-[10.5px]">
                      <span className="font-bold text-slate-700">Titik Pengambilan Sampel</span>
                      <div className="flex items-center gap-2 text-[9px] text-slate-500">
                        <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> Belum</span>
                        <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Proses</span>
                        <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> Selesai</span>
                      </div>
                    </div>

                    {/* Matriks Pola X */}
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        {renderPointCard(0, "Kiri Atas", selectedPoint, setSelectedPoint)}
                        {renderPointCard(1, "Kanan Atas", selectedPoint, setSelectedPoint)}
                      </div>

                      <div className="flex justify-center">
                        <div className="w-[68%]">
                          {renderPointCard(2, "Titik Tengah", selectedPoint, setSelectedPoint)}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {renderPointCard(3, "Kiri Bawah", selectedPoint, setSelectedPoint)}
                        {renderPointCard(4, "Kanan Bawah", selectedPoint, setSelectedPoint)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="px-4 pt-1 shrink-0">
                  <div className="flex items-center justify-center gap-2 rounded-xl bg-slate-200/90 py-2.5 text-xs font-semibold text-slate-500 shadow-2xs">
                    <span>🔒</span> Lengkapi 5 Titik (5 tersisa)
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Home Indicator Bar Bawah */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-28 rounded-full bg-slate-400/50 pointer-events-none z-50" />
        </div>
      </div>
    </div>
  );
}

function renderPointCard(
  index: number,
  label: string,
  selected: number | null,
  onSelect: (idx: number) => void
) {
  const isSelected = selected === index;

  return (
    <motion.div
      whileTap={{ scale: 0.96 }}
      onClick={() => onSelect(index)}
      className={`relative flex flex-col items-center justify-center rounded-2xl border p-2 text-center cursor-pointer transition-all duration-200 ${
        isSelected
          ? "border-emerald-500 bg-emerald-50/70 shadow-sm"
          : "border-slate-200/90 bg-white hover:border-slate-300 shadow-2xs"
      }`}
    >
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs transition-colors ${
          isSelected ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-400"
        }`}
      >
        🍃
      </div>
      <span className="mt-1 text-[10.5px] font-bold text-slate-800 leading-none">
        {label}
      </span>
      <span className="mt-0.5 text-[9px] text-slate-400">0/3 foto</span>
    </motion.div>
  );
}