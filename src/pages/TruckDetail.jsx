import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import "../server"

export default function TruckDetail(){
    const params = useParams()//gets the paramaters of the page, in this case it is just the /:id endpoint
    console.log(params)

    const [truck, setTruck] = useState(null)//set the initial state of the truck variable to null
    useEffect(() => {//on render, fetch the data from the fake server based on the id stored in params. 
        fetch(`/api/trucks/${params.id}`)//uses the /trucks/:id endpoint
            .then((response) => response.json())
            .then((data) => setTruck(data.trucks))
    }, [params.id])//dependency array to trigger a rerender if no params.id

    return(
        <div className="truck-detail-container">
            {truck ? (
                <div className="truck-detail">
                    <img src={truck.imageUrl} />
                    <i className={`truck-type ${truck.type} selected`}>{truck.type}</i>
                    <h2>{truck.name}</h2>
                    <p className="truck-price"><span>${truck.price}</span>/day</p>
                    <p>{truck.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}