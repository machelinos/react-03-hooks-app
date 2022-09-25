import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {
  const {user} = useContext(UserContext);
  return (
    <>
        <h1>Home { user?.name }</h1>
        <hr />

        <pre>
          {
            user && JSON.stringify(user)
          }
        </pre>
    </>
  )
}
