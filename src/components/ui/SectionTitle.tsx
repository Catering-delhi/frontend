
"use client";

import React from "react";

type Props = {
  kicker: string;
  title: string;
  className?: string;
};

export default function SectionTitle({ kicker, title, className }: Props) {
  return (
    <div className={`container section-title ${className ?? ""}`}>
      <h2>{kicker}</h2>
      <p>{title}</p>
    </div>
  );
}
