"use client";

import { ThemeProvider } from "@mind-studio/ui";
import { nolliDogs } from "@/lib/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      theme={nolliDogs}
      defaultTheme="light"
      enableSystem={false}
      storageKey="nollidogs-theme-v1"
    >
      {children}
    </ThemeProvider>
  );
}
