"use client";
import Link from "next/link";
import { Search, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { SiGithub } from "react-icons/si";
import { navItems } from "@/config/nav";

export function Navbar() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-16">
        <div>
          <Link href="/" className="text-2xl font-bold">
            ShaneLex
          </Link>
        </div>
        <nav className="gap-16 md:flex hidden items-center text-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary nav-link"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="items-center gap-6 flex">
          <Button
            size="icon"
            variant="ghost"
            className="transition-all hover:text-primary  group"
          >
            <Search className="h-5 w-5 transition-transform group-hover:scale-110"></Search>
          </Button>
          <a
            href="https://github.com/shanelex111"
            target="_blank"
            aria-label="GitHub"
          >
            <Button
              size="icon"
              variant="ghost"
              className="transition-all hover:text-primary  group"
            >
              <SiGithub className="h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
