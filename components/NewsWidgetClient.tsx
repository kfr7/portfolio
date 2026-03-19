"use client";

import { useState } from "react";

export type NewsItem = {
  id: string;
  title: string;
  url: string | null;
  text: string | null;
  createdAt: string;
};

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").replace(/&[a-z]+;/gi, " ").trim();
}

function domain(url: string) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return "";
  }
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

function NewsList({ news }: { news: NewsItem[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      {news.map((item) => {
        const isExpanded = expanded === item.id;
        const preview = item.text ? stripHtml(item.text) : null;
        return (
          <div key={item.id}>
            <div className="flex items-start rounded border border-[#1a1a1a] hover:border-[#00ff41]/30 transition-colors group">
              <button
                onClick={() => setExpanded(isExpanded ? null : item.id)}
                className="flex-1 text-left p-3"
              >
                <p className="text-[#c9d1d9] text-sm leading-snug group-hover:text-[#00ff41] transition-colors">
                  {item.title}
                </p>
                <p className="text-[#888] text-xs mt-1">
                  {item.url ? domain(item.url) : ""} · {timeAgo(item.createdAt)}
                </p>
              </button>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 text-[#888] hover:text-[#00ff41] transition-colors flex-shrink-0 self-center"
                  title="Open article"
                >
                  ↗
                </a>
              )}
            </div>
            {isExpanded && (
              <div className="px-3 py-3 border border-t-0 border-[#00ff41]/20 rounded-b bg-[#0d0d0d] text-[#8b949e] text-xs leading-relaxed">
                {preview ? (
                  <p>
                    {preview.length > 420 ? preview.slice(0, 420) + "…" : preview}
                    {item.url && (
                      <> <a href={item.url} target="_blank" rel="noreferrer" className="text-[#00ff41] hover:underline">read more →</a></>
                    )}
                  </p>
                ) : (
                  <p>
                    No preview available —{" "}
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#00ff41] hover:underline"
                      >
                        read article →
                      </a>
                    )}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function NewsWidgetClient({ news }: { news: NewsItem[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop: always visible */}
      <div className="hidden lg:block">
        <p className="text-[#00ff41] text-xs tracking-widest uppercase mb-1">
          // stay wired
        </p>
        <p className="text-[#888] text-sm mb-4">
          News in the tech world.
        </p>
        <NewsList news={news} />
      </div>

      {/* Mobile: collapsible */}
      <div className="lg:hidden mt-10">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-between w-full border border-[#1a1a1a] hover:border-[#00ff41]/30 px-4 py-2 rounded text-sm text-[#888] transition-colors"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
            What&apos;s New?
          </span>
          <span>{mobileOpen ? "↑" : "↓"}</span>
        </button>
        {mobileOpen && (
          <div className="mt-3">
            <NewsList news={news} />
          </div>
        )}
      </div>
    </>
  );
}
