import { Link } from "react-router-dom"
import "./style/HomePage.css"

const Homepage = () => {
    return (
        <div style = {{textAlign:"center"}}>
            <h1>Welcome to BookStore :D</h1>
            <Link to ="/NotFound"> Go to Booklist</Link>
        </div>
    )
}

export default Homepage;