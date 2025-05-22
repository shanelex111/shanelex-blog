export interface NavItem {
  title: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    title: "首页",
    href: "/",
  },
  {
    title: "文章",
    href: "/articles",
  },
  {
    title: "项目",
    href: "/projects",
  },
  {
    title: "关于",
    href: "/about",
  },
];
