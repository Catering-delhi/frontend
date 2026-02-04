"use client";

import React from "react";

function buildWhatsAppUrl(phoneE164NoPlus: string, message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${phoneE164NoPlus}?text=${text}`;
}

export default function WhatsAppFloat() {
  const phone = "+918595572638";
  const msg = "I want to book a date. Please Share Availability and Menus";

  const href = buildWhatsAppUrl(phone, msg);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        left: 18,
        bottom: 18,
        zIndex: 9999,
        width: 52,
        height: 52,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        textDecoration: "none",
        boxShadow: "0 10px 25px rgba(0,0,0,.25)",
        background: "#25D366",
        color: "white"
      }}
    >
      <i className="bi bi-whatsapp" style={{ fontSize: 28, lineHeight: 1 }} />
    </a>
  );
}
