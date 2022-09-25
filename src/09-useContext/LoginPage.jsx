import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {
  const {user, setUser} = useContext(UserContext);

  const handleClick = ()=>{
    setUser({
      id: new Date().getTime(),
      name: 'Juan',
      email: 'juan@yo.com'
    })
  }

  return (
    <>
        <h1>Login</h1>
        <hr />
  
        <pre>
          {
            user && JSON.stringify(user)
          }
        </pre>

        <button
          className="btn btn- primary"
          onClick={handleClick}
        >
          Set user
        </button>

    </>
  )
}
