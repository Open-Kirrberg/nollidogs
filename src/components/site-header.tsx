"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  cn,
} from "@/components/ui";
import { Logo } from "@/components/logo";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/training", label: "Training" },
  { href: "/workshops", label: "Workshops" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 py-2.5">
        <Link href="/" aria-label="Nolli Dogs – Startseite">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-3 py-2 text-sm font-bold text-foreground/75 transition-colors hover:text-primary",
                isActive(item.href) && "text-primary",
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary" />
              )}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2 rounded-full">
            <Link href="/kontakt">Probetraining</Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Menü öffnen"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="font-hand text-2xl">Nolli Dogs</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-base font-bold hover:bg-accent",
                    isActive(item.href) && "bg-accent text-accent-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-3 rounded-full">
                <Link href="/kontakt" onClick={() => setOpen(false)}>
                  Probetraining anfragen
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
