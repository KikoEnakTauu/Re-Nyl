import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/modules/home/ui/components/NavBar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/modules/home/ui/components/Footer";
import { TRPCReactProvider } from "@/trpc/client";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata: Metadata = {
  title: "Re-Nyl",
  description: "Vinyl records marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NuqsAdapter>
          <TRPCReactProvider>
            <NavBar />
            {children}
            <Toaster richColors />
            <Footer />
          </TRPCReactProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
