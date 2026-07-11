"use client";

/*
 * Client-Barrel für @mind-studio/ui: Im dist-Build der Lib liegen Komponenten
 * ohne "use client"-Direktive (Card, Badge, …) im Server-Barrel, rufen aber
 * cn() aus einem Client-Chunk auf — Rendern aus Server Components schlägt
 * fehl. Über dieses Re-Export-Modul werden alle Komponenten zu
 * Client-Referenzen. Komponenten daher immer von hier importieren.
 */
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  NativeSelect,
  Separator,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Textarea,
  cn,
} from "@mind-studio/ui";
