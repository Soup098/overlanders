import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div>
            <Link to="/About">About</Link>
            <h1>This is the home page</h1>
        </div>
    )
}