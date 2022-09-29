import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {
  const {user, setUser} = useContext(UserContext);

  const handleClick = ()=>{
    setUser({
      id: 1,
      name: 'Juan',
      email: 'juan@yo.com'
    })
  }

  return (
    <>
        <h1>Login Page</h1>
        <hr />
  
        <pre aria-label="pre">
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
