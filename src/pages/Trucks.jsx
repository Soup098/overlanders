import { useState, useEffect } from "react"
import "../server"

export default function Trucks(){

    const [trucks, setTrucks] = useState([])

    useEffect(() => {
        fetch("/api/trucks")
            .then((response) => response.json())
            .then((data) => setTrucks(data.trucks))
    }, [])

    const truckElements = trucks.map(truck => (
        <div key={truck.id} className="truck-tile">
            <img src={truck.imageUrl} alt="truck image"/>
            <div className="truck-info">
                <h1>{truck.name}</h1>
                <div className="type-price">
                    <h2>{truck.type}</h2>
                    <p>
                        {truck.price}
                        <span>/day</span>
                    </p>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="trucks-container">
            <main>
                {truckElements}
            </main>
            
        </div>
    )
}