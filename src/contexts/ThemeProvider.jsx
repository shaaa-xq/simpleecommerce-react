import { createContext, useState } from "react";

export const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light')

  const themeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return(
    <ThemeContext.Provider value={{theme, themeToggle}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider