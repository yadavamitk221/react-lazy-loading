import { Link } from "react-router";

export function Home () {
    return (
       <div>
          <Link to="/">Home</Link>
          <Link  to="/About">About</Link>
          <Link to="Admin">Admin</Link>

          <div>
            This is Home Page
          </div>
       </div>


    )
}