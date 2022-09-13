import { info } from 'autoprefixer'
import React, {useState, useEffect} from 'react'
import Loader from '../components/Loader'
import Map from '../components/Map'
import { useDataContext } from '../Context/ContextProvider'

const Data = () => {

    const {eventData, setEventData,loading, setLoading} = useDataContext();

    
    useEffect(() => {
        const fetchData = async () =>{
            console.log("fetching is running");
            setLoading(true)
            const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
            
            const { events } = await res.json();

            setEventData(events)
            setLoading(false)

        }
        if(eventData.length===0){
            fetchData()
        }
        console.log(eventData);
    },[eventData])

  return (
     <div>
          {!loading ? <Map eventData={eventData} /> :
           <Loader/> }
      </div> 
  )
}

export default Data