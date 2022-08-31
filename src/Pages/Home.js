import React from 'react'
import { assets, COLORS, SHADOWS, SIZES} from "../constants"
import NavBar from '../components/NavBar'
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <div className='h-screen bg-gray-300'>
        <NavBar />

        <div className='bg-emerald-400 flex justify-center items-center' style={{height: '63vh'}}>

            <div className="min-w-fit h-4/6 flex justify-around items-center flex-col">

                <div>
                    <h1 className="text-5xl text-center font-bold">The Earth  Observatory </h1>
                    <h1 className="text-5xl text-center font-bold text-sky-800">Natural</h1>
                    <h1 className="text-5xl text-center font-bold">Event Tracker</h1>
                </div>
                
                <div>

                    <h1 className="text-base text-center">Extreme natural events like hurricanes, floods,</h1>
                    <h1 className="text-base text-center"> and wildfires can cause damage and harm to people, animals, and environments.</h1>
                </div>
            </div>

        </div>

        <div className='bg-sky-900 flex justify-center items-center' style={{height: '27vh'}}>

            <NavLink to="/data" key='DATA'>
                <button className='hover:text-2xl text-xl bg-yellow-400 w-40 h-18 rounded text-sky-900 font-semibold ease-in-out duration-300 hover:shadow-lg  hover:shadow-yellow-500/50'>Track Wildfire</button>
            </NavLink>
        </div>

    </div>
  )
}

export default Home