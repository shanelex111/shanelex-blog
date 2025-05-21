import Link from "next/link";
import { Search } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-16">
        <div>
          <Link href="/" className="text-2xl font-bold">
            ShaneLex
          </Link>
        </div>
        <nav className="gap-6 md:flex hidden items-center font-medium text-lg">
          <Link href="/">首页</Link>
          <Link href="/articles">文章</Link>
          <Link href="/projects">项目</Link>
          <Link href="/about">关于</Link>
        </nav>

        <div>
          <Search className="h-5 w-5"></Search>
        </div>
      </div>
    </header>
  );
}
