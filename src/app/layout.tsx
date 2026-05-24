import type { Metadata } from "next";
// Allow side-effect import of CSS without type declarations
// @ts-ignore
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { StarField } from "@/components/StarField";
import { CustomCursor } from "@/components/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Dharani M | CS & Design Portfolio",
  description: "Computer Science and Design student | Full-Stack Developer | UI/UX Designer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <StarField />
         <CustomCursor />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}