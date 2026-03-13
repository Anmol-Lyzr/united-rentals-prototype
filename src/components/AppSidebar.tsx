"use client";

import {
  LayoutDashboard,
  Phone,
  History,
  BarChart3,
  FileText,
  Puzzle,
  HardHat,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function AppSidebar({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div
      className={cn(
        "flex h-full w-[260px] flex-col rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(147,197,253,0.35),_transparent_55%),linear-gradient(to_bottom,_#f3e8ff,_#eef2ff)] border border-white/80 shadow-[0_22px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl overflow-hidden",
        className
      )}
    >
      {/* Header */}
      <div className="h-16 flex items-center gap-3 px-4 pt-2">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg shadow-indigo-200">
          <HardHat className="size-5 text-indigo-500" />
        </div>
        <div>
          <h2 className="text-[14px] font-semibold text-slate-900 leading-none">
            United Rentals
          </h2>
          <p className="text-[11px] text-slate-500 mt-0.5">
            ISR Co-Pilot Dashboard
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 pt-2 pb-4 space-y-4 text-[13px]">
        {/* Overview */}
        <div className="space-y-2">
          <p className="px-2 text-[11px] font-medium tracking-[0.16em] text-slate-500">
            OVERVIEW
          </p>
          <button
            onClick={() => router.push("/")}
            className={cn(
              "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all",
              isActive("/")
                ? "bg-[#6366f1] text-white shadow-md shadow-indigo-400"
                : "text-slate-700 hover:bg-white/70 hover:text-slate-900"
            )}
          >
            <LayoutDashboard className="size-4 shrink-0" />
            <span>Dashboard</span>
          </button>
        </div>

        {/* Co-pilot */}
        <div className="space-y-2">
          <p className="px-2 text-[11px] font-medium tracking-[0.16em] text-slate-500">
            CO-PILOT
          </p>
          <button
            onClick={() => router.push("/copilot")}
            className={cn(
              "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all",
              isActive("/copilot")
                ? "bg-[#6366f1] text-white shadow-md shadow-indigo-400"
                : "text-slate-700 hover:bg-white/70 hover:text-slate-900"
            )}
          >
            <Phone className="size-4 shrink-0" />
            <span>Start Co-Pilot</span>
          </button>
          <button
            onClick={() => router.push("/call-history")}
            className={cn(
              "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all",
              isActive("/call-history")
                ? "bg-[#6366f1] text-white shadow-md shadow-indigo-400"
                : "text-slate-700 hover:bg-white/70 hover:text-slate-900"
            )}
          >
            <History className="size-4 shrink-0" />
            <span>View History</span>
          </button>
        </div>

        {/* Intelligence */}
        <div className="space-y-2">
          <p className="px-2 text-[11px] font-medium tracking-[0.16em] text-slate-500">
            INTELLIGENCE
          </p>
          <button
            onClick={() => router.push("/analytics")}
            className={cn(
              "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all",
              isActive("/analytics")
                ? "bg-[#6366f1] text-white shadow-md shadow-indigo-400"
                : "text-slate-700 hover:bg-white/70 hover:text-slate-900"
            )}
          >
            <BarChart3 className="size-4 shrink-0" />
            <span>Analytics</span>
          </button>
          <button
            onClick={() => router.push("/reports")}
            className={cn(
              "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all",
              isActive("/reports")
                ? "bg-[#6366f1] text-white shadow-md shadow-indigo-400"
                : "text-slate-700 hover:bg-white/70 hover:text-slate-900"
            )}
          >
            <FileText className="size-4 shrink-0" />
            <span>Reports</span>
          </button>
        </div>

        {/* System */}
        <div className="space-y-2">
          <p className="px-2 text-[11px] font-medium tracking-[0.16em] text-slate-500">
            SYSTEM
          </p>
          <button
            onClick={() => router.push("/integrations")}
            className={cn(
              "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all",
              isActive("/integrations")
                ? "bg-[#6366f1] text-white shadow-md shadow-indigo-400"
                : "text-slate-700 hover:bg-white/70 hover:text-slate-900"
            )}
          >
            <Puzzle className="size-4 shrink-0" />
            <span>Integrations</span>
          </button>
        </div>
      </nav>

      {/* User / status */}
      <div className="px-3 pb-3 pt-2 border-t border-white/70 bg-white/60 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-2xl bg-white text-slate-900 shadow-sm shadow-indigo-100">
          <div className="flex items-center gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#6366f1]/10 text-xs font-semibold text-[#4f46e5]">
              ST
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Sarah Thompson</p>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Co-Pilot ready
                </span>
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-flex h-6 items-center rounded-full bg-emerald-50 px-2 text-[11px] font-medium text-emerald-600">
              • Live
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}