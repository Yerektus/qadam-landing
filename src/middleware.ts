import { defineMiddleware } from "astro:middleware"

import { assertIsLocale, setLocale } from "@/paraglide/runtime.js"

export const onRequest = defineMiddleware((context, next) => {
  if (context.currentLocale) {
    setLocale(assertIsLocale(context.currentLocale), { reload: false })
  }

  return next()
})
