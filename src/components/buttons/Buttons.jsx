import { AuthContext } from "../../contexts/AuthProvider"
import { useContext } from "react"


// const LoginButton = () => {
//   const {isLoggedIn, login} = useContext(AuthContext)

//   return(
//     <button 
//       style={style} 
//       onClick={onClick}
//     >Login</button>
//   )
// }

// export default {LoginButton}

const Button = ({style, onClick, children}) => {

  return(
    <button style={style} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button