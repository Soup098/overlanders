import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div className="home-container">
            <header>
                <Link className={"title-link"}to="/">#OVERLANDERS</Link>
                <nav>
                    <Link className={"about-link"}to="/About">About</Link>
                    <Link className={"trucks-link"}to="/Trucks">Trucks</Link>
                </nav>
            </header>
            <main>
                <section>
                    <h1>You have trails to blaze, we have overlanders for days.</h1>
                    <p>
                        Bring a source for new adventure into your life by joining the # overlander movement.
                        Rent the perfect vehicle to take you where you want to go.
                    </p>
                    <button>Find your vehicle</button>
                </section>
            </main>
        </div>
        
    )
}