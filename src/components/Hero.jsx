import React from 'react'
import Main from '../assets/main.jpeg'
import IT from '../assets/it.png'
import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <>


            <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 text-black lg:mt-4 mt-6 px-6">
                <div className="w-12/12 bg-white rounded-2xl px-4 py-4 flex flex-col items-center  border-2 border-black shadow-2xl">

                    <h2 className='font-bold text-[#1F3E77] italic lg:text-3xl text-xl'>ATY Information Technology</h2>

                    <div className="flex flex-row flex-wrap items-center justify-center lg:gap-8 gap-4 mt-10">
                        <NavLink to="/kpi" className="button flex justify-center items-center">
                            KPI Details
                        </NavLink>
                        <button className='button '>EMR User Accounts</button>
                        <button className='button '>EMR Issue Log</button>
                        <button className='button '>ATY Device Lists</button>
                        <button className='button '>ATY Purseing</button>
                        <button className='button '>Doctor Codes</button>
                        <button className='button '>Training Lists</button>
                    </div>

                </div>
                <div className="w-12/12 relative">

                    <img src={Main} alt="" className='img lg:h-90 lg:w-[700px] h-40 w-full object-cover border-2 border-black rounded-2xl shadow-2xl' />
                    <img src={IT} alt="" className=' img lg:h-40 lg:w-40 h-12 w-12 rounded-full object-cover border-2 border-black shadow-2xl  absolute lg:top-[-50px] lg:left-[-10px] top-[-10px] left-[-10px] z-50' />

                </div>
            </section>

        </>
    )
}

export default Hero