import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "../ui/button"

const appUrl = import.meta.env.PUBLIC_APP_URL

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/blog", label: "Блог" },
]

type NavProps = {
  currentPath: string
}

const Nav = ({ currentPath }: NavProps) => {
  return (
    <nav className="fixed z-50 flex h-12 w-full items-center justify-between bg-white px-8 shadow-xs">
      <div className="flex items-center gap-6">
        <div className="font-heading text-lg">QADAM</div>

        <div className="flex items-center gap-4">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? currentPath === "/"
                : currentPath.startsWith(item.href)

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "font-medium text-foreground"
                )}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </div>
      <a href={appUrl} className={buttonVariants({ size: "sm", className: "!rounded-full !font-light px-4" })}>
        Войти
      </a>
    </nav>
  )
}

export default Nav
