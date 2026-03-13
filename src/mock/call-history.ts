import type { CallRecord } from "@/types/call-records";
import { getDemoCallHistory } from "@/lib/ur-agents";

/**
 * Mock API for call history used across the app.
 * Frontend code should call this instead of touching localStorage directly.
 */
export async function getCallHistory(): Promise<CallRecord[]> {
  if (typeof window === "undefined") {
    // During SSR or in non-browser contexts, fall back to static demo data.
    return getDemoCallHistory();
  }

  try {
    const raw = window.localStorage.getItem("ur_call_history");
    if (!raw) {
      return getDemoCallHistory();
    }
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) {
      return parsed as CallRecord[];
    }
    return getDemoCallHistory();
  } catch {
    return getDemoCallHistory();
  }
}

