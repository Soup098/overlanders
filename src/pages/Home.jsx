import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div className="home-container">
            <main>
                <section>
                    <h1>You have trails to blaze, we have overlanders for days.</h1>
                    <p>
                        Bring a source for new adventure into your life by joining the # overlander movement.
                        Rent the perfect vehicle to take you where you want to go.
                    </p>
                    <Link className={"find-vehicle-button"} to="/trucks">Find your vehicle</Link>
                </section>
            </main>
            <footer>
                <p>©2025 #OVERLANDERS</p>
            </footer>
        </div>
        
    )
}