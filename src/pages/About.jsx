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
                    <h1></h1>
                    <p></p>
                    <section className="about-action-container">
                        <h1></h1>
                        <button></button>
                    </section>
                </section>

            </main>
        </div>
    )
}