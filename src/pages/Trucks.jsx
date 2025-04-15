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
        <h1>{truck.name}</h1>
    ))

    return(
        <div>
            {truckElements}
        </div>
    )
}