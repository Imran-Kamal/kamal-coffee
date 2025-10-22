// components/AnnouncementBar.tsx
'use client';

import { useEffect, useState } from 'react';

const KEY = 'kamal_announcement_dismissed';

export default function AnnouncementBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = typeof window !== 'undefined' && localStorage.getItem(KEY) === '1';
    if (!dismissed) setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="w-full bg-[#c7a987] text-white text-sm">
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-center gap-3">
        <span className="font-medium">Welcome to Kamal Coffee.</span>
        <span className="opacity-90">Get early access to drops — join the list below.</span>
        <button
          aria-label="Close announcement"
          onClick={() => {
            localStorage.setItem(KEY, '1');
            setOpen(false);
          }}
          className="ml-3 rounded-full bg-white/15 px-2 py-1 text-xs hover:bg-white/25 transition"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
