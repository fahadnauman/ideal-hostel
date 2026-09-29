"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Building2,
  KeyRound,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Delete,
} from "lucide-react";

function setSessionCookies() {
  if (typeof document !== "undefined") {
    document.cookie = "pghq_owner_session=active; path=/; max-age=2592000; SameSite=Lax";
    localStorage.setItem("pghq_owner_authenticated", "true");
  }
}

export default function LoginPage() {
  const [pin, setPin] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInstantBypass = () => {
    setIsLoading(true);
    setSessionCookies();
    setTimeout(() => {
      router.push("/dashboard");
    }, 300);
  };

  const handlePinSubmit = useCallback(
    (enteredPin: string) => {
      if (enteredPin === "1234" || enteredPin.length === 4) {
        setIsLoading(true);
        setError(null);
        setSessionCookies();
        setTimeout(() => {
          router.push("/dashboard");
        }, 350);
      } else {
        setError("Incorrect PIN. Please use default PIN: 1234");
        setPin("");
      }
    },
    [router]
  );

  const handleKeyPress = (num: string) => {
    if (pin.length < 4) {
      const nextPin = pin + num;
      setPin(nextPin);
      setError(null);
      if (nextPin.length === 4) {
        handlePinSubmit(nextPin);
      }
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
    setError(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (/^[0-9]$/.test(e.key)) {
        setPin((prev) => {
          if (prev.length < 4) {
            const nextPin = prev + e.key;
            if (nextPin.length === 4) {
              handlePinSubmit(nextPin);
            }
            return nextPin;
          }
          return prev;
        });
        setError(null);
      } else if (e.key === "Backspace") {
        setPin((prev) => prev.slice(0, -1));
        setError(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePinSubmit]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center items-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        {/* Header Branding */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#f5c800] text-black shadow-md mb-2">
            <Building2 className="w-7 h-7" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Ideal Hostel
          </h1>
          <p className="text-sm sm:text-base text-[#888]">
            Owner Management Dashboard · Direct Access
          </p>
          <p className="text-xs text-[#555] font-medium tracking-widest uppercase">Opificio Round</p>
        </div>

        {/* Main Card */}
        <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 card-shadow space-y-6">
          {/* Quick Handoff Banner */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1a1500] border border-[#78620a]">
            <ShieldCheck className="w-5 h-5 text-[#f5c800] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#fef08a]">
              <span className="font-semibold block text-[#f5c800]">
                Direct Client Handoff Mode Active
              </span>
              Passwords bypassed. Tap below to enter dashboard instantly, or use PIN{" "}
              <strong className="font-bold underline">1234</strong>.
            </div>
          </div>

          {/* Primary Action: 1-Click Instant Bypass */}
          <div>
            <button
              onClick={handleInstantBypass}
              disabled={isLoading}
              className="w-full min-h-[52px] bg-[#f5c800] hover:bg-[#ffd700] active:scale-[0.98]
                         text-black text-base font-semibold rounded-xl
                         flex items-center justify-center gap-2.5 shadow-sm
                         transition-default disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  <span>Opening Dashboard...</span>
                </div>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-black" />
                  <span>Instant Owner Access (1-Click)</span>
                  <ArrowRight className="w-5 h-5 ml-1" />
                </>
              )}
            </button>
            <p className="text-center text-[12px] text-[#888] mt-2">
              Recommended for property owners · No password needed
            </p>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="border-t border-[#2a2a2a] w-full" />
            <span className="bg-[#141414] px-3 text-xs font-semibold text-[#555] uppercase tracking-wider absolute">
              Or 4-Digit Owner PIN
            </span>
          </div>

          {/* PIN Input Indicator */}
          <div className="space-y-4">
            <div className="flex justify-center items-center gap-3 py-2">
              {[0, 1, 2, 3].map((idx) => {
                const filled = pin.length > idx;
                return (
                  <div
                    key={idx}
                    className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center text-xl font-bold transition-all ${
                      filled
                        ? "border-[#f5c800] bg-[#f5c800] text-black scale-105"
                        : "border-[#2a2a2a] bg-[#1e1e1e] text-[#555]"
                    }`}
                  >
                    {filled ? "●" : ""}
                  </div>
                );
              })}
            </div>

            {error && (
              <p className="text-xs sm:text-sm text-center font-medium text-red-400 bg-[#2d0a0a] py-1.5 px-3 rounded-lg border border-[#991b1b]">
                {error}
              </p>
            )}

            {/* Touch Keypad */}
            <div className="grid grid-cols-3 gap-2.5 max-w-[280px] mx-auto pt-1">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((digit) => (
                <button
                  key={digit}
                  type="button"
                  onClick={() => handleKeyPress(digit)}
                  className="h-14 rounded-xl bg-[#1e1e1e] hover:bg-[#2a2a2a] active:bg-[#383838]
                             text-xl font-semibold text-white flex items-center justify-center
                             transition-default cursor-pointer shadow-2xs"
                >
                  {digit}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPin("")}
                className="h-14 rounded-xl bg-[#141414] hover:bg-[#1e1e1e] active:bg-[#2a2a2a]
                           text-xs font-semibold text-[#888] flex items-center justify-center
                           transition-default cursor-pointer"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => handleKeyPress("0")}
                className="h-14 rounded-xl bg-[#1e1e1e] hover:bg-[#2a2a2a] active:bg-[#383838]
                           text-xl font-semibold text-white flex items-center justify-center
                           transition-default cursor-pointer shadow-2xs"
              >
                0
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="h-14 rounded-xl bg-[#141414] hover:bg-[#1e1e1e] active:bg-[#2a2a2a]
                           text-[#888] flex items-center justify-center
                           transition-default cursor-pointer"
                title="Backspace"
              >
                <Delete className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Footer info */}
          <div className="pt-2 border-t border-[#1e1e1e] flex items-center justify-center gap-1.5 text-xs text-[#555]">
            <KeyRound className="w-3.5 h-3.5 text-[#383838]" />
            <span>Preset Owner PIN: <strong className="text-[#888]">1234</strong></span>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-[#383838]">
          © {new Date().getFullYear()} Ideal Hostel · Opificio Round · Client Handoff Edition
        </p>
      </div>
    </div>
  );
}
