"use client";

import { useEffect } from "react";
import {
  ADSENSE_CLIENT_ID,
  ADSENSE_SLOT_HEADER,
  ADSENSE_SLOT_INLINE,
  ADSENSE_SLOT_SIDEBAR,
} from "@/lib/config";

type AdSlot = "header" | "sidebar" | "inline";

interface AdBannerProps {
  slot: AdSlot;
  className?: string;
}

const slotIds: Record<AdSlot, string> = {
  header: ADSENSE_SLOT_HEADER,
  sidebar: ADSENSE_SLOT_SIDEBAR,
  inline: ADSENSE_SLOT_INLINE,
};

const slotFormats: Record<AdSlot, string> = {
  header: "horizontal",
  sidebar: "vertical",
  inline: "rectangle",
};

export default function AdBanner({ slot, className = "" }: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-expect-error - AdSense global
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded yet
    }
  }, []);

  // Placeholder for development - shows where ads will appear
  if (process.env.NODE_ENV === "development") {
    return (
      <div
        className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm ${className}`}
        style={{
          minHeight: slot === "header" ? "90px" : slot === "sidebar" ? "600px" : "250px",
        }}
      >
        <div className="text-center p-4">
          <div className="text-2xl mb-2">📢</div>
          <div>Reklama ({slot})</div>
          <div className="text-xs mt-1">AdSense will appear here</div>
        </div>
      </div>
    );
  }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: "block" }}
      data-ad-client={ADSENSE_CLIENT_ID}
      data-ad-slot={slotIds[slot]}
      data-ad-format={slotFormats[slot]}
      data-full-width-responsive="true"
    />
  );
}
