import { Check, ChevronDown, Languages } from "lucide-react"

import { languages, type Lang } from "@/i18n/ui"
import { getLocalizedPath, getUi, isPathActive } from "@/i18n/utils"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

const appUrl = import.meta.env.PUBLIC_APP_URL

type NavProps = {
  currentPath: string
  lang: Lang
}

const Nav = ({ currentPath, lang }: NavProps) => {
  const { nav } = getUi(lang)
  const navItems = [
    { href: "/", label: nav.home },
    { href: "/about", label: nav.about },
    { href: "/blog", label: nav.blog },
  ]

  return (
    <nav className="fixed z-50 flex h-12 w-full items-center justify-between gap-4 bg-white px-4 shadow-xs sm:px-8">
      <div className="flex min-w-0 items-center gap-4 sm:gap-6">
        <div className="font-heading text-lg">QADAM</div>

        <div className="hidden items-center gap-3 sm:flex sm:gap-4">
          {navItems.map((item) => {
            const isActive = isPathActive(currentPath, item.href)

            return (
              <a
                key={item.href}
                href={getLocalizedPath(item.href, lang)}
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
      <div className="flex shrink-0 items-center gap-2">
        <Popover>
          <PopoverTrigger
            aria-label={nav.selectLanguage}
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "!rounded-full px-3",
            })}
          >
            <Languages className="size-4" aria-hidden="true" />
            <span className="text-xs font-medium uppercase">{lang}</span>
            <ChevronDown className="size-3" aria-hidden="true" />
          </PopoverTrigger>
          <PopoverContent align="end" className="w-44 gap-1 p-1">
            <p className="px-2 py-1 text-xs text-muted-foreground">
              {nav.language}
            </p>
            {Object.entries(languages).map(([code, label]) => {
              const optionLang = code as Lang
              const isSelected = optionLang === lang

              return (
                <a
                  key={code}
                  href={getLocalizedPath(currentPath, optionLang)}
                  aria-current={isSelected ? "true" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-sm px-2 py-2 text-sm transition-colors hover:bg-muted",
                    isSelected && "font-medium"
                  )}
                >
                  <span>{label}</span>
                  {isSelected && (
                    <Check className="size-4" aria-hidden="true" />
                  )}
                </a>
              )
            })}
          </PopoverContent>
        </Popover>
        <a
          href={appUrl}
          className={buttonVariants({
            size: "sm",
            className: "!rounded-full px-4 !font-light",
          })}
        >
          {nav.login}
        </a>
      </div>
    </nav>
  )
}

export default Nav
