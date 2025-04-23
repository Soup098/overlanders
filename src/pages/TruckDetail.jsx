import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import "../server"

export default function TruckDetail(){
    const params = useParams()

    const [truck, setTruck] = useState([])
    useEffect(() => {
        fetch(`/api/trucks/:${params.id}`)
            .then((response) => response.json())
            .then((data) => console.log(data))
    }, [])

    //console.log(truck)

    return(
        <h1>Truck detail page</h1>
    )
}