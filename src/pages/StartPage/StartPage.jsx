import "./StartPage.css"
import { Link } from "react-router-dom"


const StartPage = () => {
  return (
    <div className="startPage flex-container">
        <h1>Recipes from the world</h1>
        <Link to={"/Country"}>
        <button className="flex-container">Explore</button>
        </Link>
    </div>
  )
}

export default StartPage