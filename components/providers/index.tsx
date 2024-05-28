import { ReactNode } from "react"

import { QueryProvider } from "./query"
import { TailwindIndicator } from "./tailwind"
import { ThemeProvider } from "./theme"

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
      <TailwindIndicator />
    </ThemeProvider>
  )
}
