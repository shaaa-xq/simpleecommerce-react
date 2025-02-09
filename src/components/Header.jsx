import { ThemeContext } from "../contexts/ThemeProvider";
import { useContext } from "react";
import ThemeToggleButton from "./buttons/ThemeToggle";
import Button from "./buttons/Buttons";
import { AuthContext } from "../contexts/AuthProvider";

const Navbar = () => {
  const {theme} = useContext(ThemeContext)
  const {isLoggedIn, login, logout} = useContext(AuthContext)

  return(
    <>
      <nav
        style={{background: theme === 'light' ? '#DBD8E3' : '#352F44', 
          color: theme === 'light' ? '#352F44' : '#DBD8E3'
        }}
      >
        <h1>Logo</h1>
        <ThemeToggleButton />
        {isLoggedIn ? (
          <button onClick={logout}>Log out</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </nav>
    </>
  )
}

export default Navbar