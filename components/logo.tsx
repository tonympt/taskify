import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" alt="Logo" height={33} width={33} />
        <h1
          className={cn("text-lg text-neutral-700 pt-1", headingFont.className)}
        >
          Taskify
        </h1>
      </div>
    </Link>
  );
};
