import { Link } from 'react-router-dom'

export default function About(){
    return(
        <div className="about-container">
            <header>
                <Link className={"title-link"}to="/">#OVERLANDERS</Link>
                <nav>
                    <Link className={"about-link"}to="/About">About</Link>
                    <Link className={"trucks-link"}to="/Trucks">Trucks</Link>
                </nav>
            </header>
            <main>
                <section className="image-container"></section>
                <section className="about-info">
                    <h1>Take something unique and capable on your journey into the unknown.</h1>
                    <p>Our mission is to make your overlanding experience as smooth as possible and give you the confidence
                        you need to know you wont just get to where you want to be, but you get back safe as well.
                    </p>
                    <section className="about-action-container">
                        <h1>The adventure of a lifetime is waiting.</h1>
                        <h1>The rig you need is prepped</h1>
                        <button>Explore overlanders</button>
                    </section>
                </section>
            </main>
            <footer>
                <p>©2025 #OVERLANDERS</p>
            </footer>
        </div>
    )
}