import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { SiGithub } from "react-icons/si";
export function Navbar() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-16">
        <div>
          <Link href="/" className="text-2xl font-bold">
            ShaneLex
          </Link>
        </div>
        <nav className="gap-8 md:flex hidden items-center font-medium text-lg">
          <Link href="/" className="transition-colors hover:text-primary">
            首页
          </Link>
          <Link
            href="/articles"
            className="transition-colors hover:text-primary "
          >
            文章
          </Link>
          <Link
            href="/projects"
            className="transition-colors hover:text-primary "
          >
            项目
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary ">
            关于
          </Link>
        </nav>

        <div className="items-center gap-2 flex">
          <Button
            size="icon"
            variant="ghost"
            className="transition-all hover:text-primary hover:bg-transparent group"
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
              className="transition-all hover:text-primary hover:bg-transparent group"
            >
              <SiGithub className="h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
