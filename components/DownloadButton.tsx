"use client";

import { useState } from "react";

type Props = {
  href: string;
  fileName: string;
  label?: string;
};

export default function DownloadButton({ href, fileName, label = "Unduh Aplikasi (.apk)" }: Props) {
  const [clicked, setClicked] = useState(false);

  return (
    <a
      href={href}
      download={fileName}
      onClick={() => {
        setClicked(true);
        setTimeout(() => setClicked(false), 2200);
      }}
      className="group relative inline-flex items-center gap-3 rounded-md bg-amber px-7 py-4 font-display text-base font-bold text-ink shadow-[4px_4px_0_0_#16273D] transition-transform hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#16273D] active:translate-y-0 active:shadow-[2px_2px_0_0_#16273D]"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v12" />
        <path d="M7 10l5 5 5-5" />
        <path d="M4 19h16" />
      </svg>
      <span>{clicked ? "Mengunduh…" : label}</span>
    </a>
  );
}
