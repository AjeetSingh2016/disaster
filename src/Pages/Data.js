import React, {useState, useEffect} from 'react'
import Loader from '../components/Loader'
import Map from '../components/Map'
const Data = () => {
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fetchData = async () =>{
            setLoading(true)
            const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
            
            const { events } = await res.json();

            setEventData(events)
            setLoading(false)


        }

        fetchData()

        console.log(eventData);
    })
    
  return (
     <div>
          {!loading ? <Map eventData={eventData} /> :
           <Loader/> }
      </div> 
  )
}

export default Data