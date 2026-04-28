import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RootProvider } from "fumadocs-ui/provider";
import "fumadocs-ui/style.css";

// `??` only falls back on null/undefined, so an empty `NEXT_PUBLIC_SITE_URL`
// (which Vercel emits if a project-level env var is set but blank) used to
// reach `new URL("")` and crash the build. Treat blank/whitespace as missing.
const RAW_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const SITE_URL =
  RAW_SITE_URL && RAW_SITE_URL.length > 0
    ? RAW_SITE_URL
    : "https://docs.proofly.dev";

// Without metadataBase, every absolute URL Next.js emits in OG/Twitter tags
// falls back to localhost in production builds, which breaks social previews
// and lighthouse audits. Pin it here so per-page metadata can stay relative.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "LedgerMem", template: "%s — LedgerMem" },
  description: "Long-term memory for LLM agents.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
