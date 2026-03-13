"use client";

import { Phone, PhoneOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface SpoofPersonaOption {
  value: string;
  label: string;
}

export interface SpoofIntentOption {
  value: string;
  label: string;
}

interface CallControlsProps {
  callStatus: "idle" | "connecting" | "active" | "ended";
  callDuration: number;
  /** Demo: persona for spoof customer (value = name, label can include emoji) */
  selectedPersona: string;
  onPersonaChange: (persona: string) => void;
  personaOptions: SpoofPersonaOption[];
  /** Demo: intent for spoof call */
  selectedIntent: string;
  onIntentChange: (intent: string) => void;
  intentOptions: SpoofIntentOption[];
  onStartCall: () => void;
  onEndCall: () => void;
  onNewCall: () => void;
}

function formatDuration(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

const selectClass =
  "h-8 rounded-lg bg-gray-50 border border-gray-200 px-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 disabled:opacity-50 disabled:cursor-not-allowed";

export function CallControls({
  callStatus,
  callDuration,
  selectedPersona,
  onPersonaChange,
  personaOptions,
  selectedIntent,
  onIntentChange,
  intentOptions,
  onStartCall,
  onEndCall,
  onNewCall,
}: CallControlsProps) {
  const demoDisabled = callStatus === "active" || callStatus === "connecting";
  return (
    <div className="shrink-0 min-h-14 px-5 py-2 bg-white border-b border-gray-200 flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 shrink-0">
        <label className="text-xs font-medium text-gray-500 shrink-0">
          Persona
        </label>
        <select
          value={selectedPersona}
          onChange={(e) => onPersonaChange(e.target.value)}
          disabled={demoDisabled}
          className={`${selectClass} min-w-[140px]`}
        >
          {personaOptions.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <label className="text-xs font-medium text-gray-500 shrink-0">
          Intent
        </label>
        <select
          value={selectedIntent}
          onChange={(e) => onIntentChange(e.target.value)}
          disabled={demoDisabled}
          className={`${selectClass} min-w-[160px]`}
        >
          {intentOptions.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </div>

      {callStatus === "active" && (
        <div className="flex items-center gap-2 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span className="text-sm tabular-nums font-medium text-gray-900">
            {formatDuration(callDuration)}
          </span>
        </div>
      )}

      <div className="flex items-center gap-2 shrink-0">
        {callStatus === "idle" || callStatus === "ended" ? (
          <Button
            onClick={callStatus === "ended" ? onNewCall : onStartCall}
            className="rounded-full bg-primary text-white shadow-none hover:bg-primary/90 h-9 px-4"
          >
            <Phone className="size-4" />
            <span className="text-sm font-semibold">
              {callStatus === "ended" ? "New Call" : "Start Call"}
            </span>
          </Button>
        ) : callStatus === "connecting" ? (
          <Button disabled className="rounded-full shadow-none h-9 px-4">
            <Loader2 className="size-4 animate-spin" />
            <span className="text-sm font-semibold">Connecting...</span>
          </Button>
        ) : (
          <Button
            variant="destructive"
            onClick={onEndCall}
            className="rounded-full shadow-none h-9 px-4"
          >
            <PhoneOff className="size-4" />
            <span className="text-sm font-semibold">End Call</span>
          </Button>
        )}
      </div>
    </div>
  );
}
