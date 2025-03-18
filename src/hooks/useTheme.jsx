import { useEffect, useState } from "react"

function useTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = localStorage.getItem("theme")
  const initialTheme = storedTheme || (prefersDark ? "dark" : "light")

  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    if (theme == 'dark') {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'dark' ? "light" : "dark")
  }

  return { theme, toggleTheme }
}

export default useTheme; 
