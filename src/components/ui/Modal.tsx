"use client";

import React, { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ?? "Dialog"}
      onMouseDown={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        onMouseDown={(e) => e.stopPropagation()}
        style={{
          width: "min(960px, 100%)",
          maxHeight: "90vh",            // ✅ LIMIT HEIGHT
          background: "var(--bs-body-bg)",
          color: "var(--bs-body-color)",
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",      // ✅ COLUMN LAYOUT
        }}
      >
        {/* HEADER (STICKY) */}
        <div
          style={{
            position: "sticky",          // ✅ STICKY HEADER
            top: 0,
            zIndex: 10,
            display: "flex",
            gap: 12,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            borderBottom: "1px solid rgba(127,127,127,0.25)",
            background: "var(--bs-body-bg)",
          }}
        >
          <div style={{ fontWeight: 600 }}>{title ?? ""}</div>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={onClose}
            aria-label="Close"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>

        {/* BODY (SCROLLS) */}
        <div
          style={{
            padding: 14,
            overflowY: "auto",           // ✅ BODY SCROLL
            flex: 1,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
