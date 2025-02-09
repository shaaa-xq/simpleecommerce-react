import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import darkToggle from '../../assets/dark-mode.png'
import lightToggle from '../../assets/light-mode.png'

const ThemeToggleButton = () => {
  const {theme, themeToggle} = useContext(ThemeContext)

  return(
    <img src={theme === 'light' ? darkToggle : lightToggle} 
      alt="toggle" 
      onClick={themeToggle}
    />
  )
}

export default ThemeToggleButton