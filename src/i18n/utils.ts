import { defaultLang, languages, ui, type Lang } from "./ui"

const supportedLanguages = Object.keys(languages) as Lang[]

export function isLang(value: string | undefined): value is Lang {
  return supportedLanguages.includes(value as Lang)
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/")

  if (isLang(lang)) {
    return lang
  }

  return defaultLang
}

export function getUi(lang: Lang) {
  return ui[lang] ?? ui[defaultLang]
}

export function stripLangFromPath(pathname: string) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`
  const [, lang, ...rest] = path.split("/")

  if (!isLang(lang)) {
    return path || "/"
  }

  const strippedPath = `/${rest.join("/")}`

  return strippedPath === "/" ? "/" : strippedPath.replace(/\/$/, "")
}

export function getLocalizedPath(pathname: string, lang: Lang) {
  const strippedPath = stripLangFromPath(pathname)

  if (lang === defaultLang) {
    return strippedPath
  }

  return strippedPath === "/" ? `/${lang}/` : `/${lang}${strippedPath}`
}

export function isPathActive(currentPath: string, itemPath: string) {
  const current = stripLangFromPath(currentPath).replace(/\/$/, "") || "/"
  const item = stripLangFromPath(itemPath).replace(/\/$/, "") || "/"

  if (item === "/") {
    return current === "/"
  }

  return current === item || current.startsWith(`${item}/`)
}
