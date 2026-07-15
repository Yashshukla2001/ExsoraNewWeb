import { createContext, useContext, useEffect, useState, createElement } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true) // always start in dark mode, every load

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.remove('light')
    } else {
      root.classList.add('light')
    }
  }, [dark])

  const toggle = () => setDark((d) => !d)

  return createElement(ThemeContext.Provider, { value: { dark, toggle } }, children)
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return ctx
}