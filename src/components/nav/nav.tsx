import { Check, ChevronDown, Languages } from "lucide-react"

import { m } from "@/paraglide/messages.js"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

const appUrl = import.meta.env.PUBLIC_APP_URL

type Lang = "ru" | "en"

type NavProps = {
  lang: Lang
  navItems: {
    href: string
    label: string
    active: boolean
  }[]
  languageOptions: {
    code: Lang
    label: string
    href: string
    selected: boolean
  }[]
}

const Nav = ({ lang, navItems, languageOptions }: NavProps) => {
  return (
    <nav className="fixed z-50 flex h-12 w-full items-center justify-between gap-4 bg-white px-4 shadow-xs sm:px-8">
      <div className="flex min-w-0 items-center gap-4 sm:gap-6">
        <div className="font-heading text-lg">QADAM</div>

        <div className="hidden items-center gap-3 sm:flex sm:gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={cn(
                "text-sm text-muted-foreground transition-colors hover:text-foreground",
                item.active && "font-medium text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Popover>
          <PopoverTrigger
            aria-label={m.nav_select_language({}, { locale: lang })}
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
              {m.nav_language({}, { locale: lang })}
            </p>
            {languageOptions.map((option) => {
              return (
                <a
                  key={option.code}
                  href={option.href}
                  aria-current={option.selected ? "true" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-sm px-2 py-2 text-sm transition-colors hover:bg-muted",
                    option.selected && "font-medium"
                  )}
                >
                  <span>{option.label}</span>
                  {option.selected && (
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
          {m.nav_login({}, { locale: lang })}
        </a>
      </div>
    </nav>
  )
}

export default Nav
