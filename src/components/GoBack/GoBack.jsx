import { Link } from "react-router-dom"
import "./GoBack.css"

const GoBack = ({to}) => {
  return (
    <Link to={to}>
    <div className="back">
        <h1> BACK </h1>
    </div>
    </Link>
  )
}

export default GoBack