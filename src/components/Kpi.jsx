import React from 'react'
import { NavLink } from "react-router-dom";
import { useRef } from "react";

const Kpi = () => {

    const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.remove("hidden");
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.add("hidden");
    }
  };


    return (
        <>


            <section className='h-20 flex flex-col lg:flex-row items-center justify-between px-6 py-2 mt-4 text-black'>

                <div className="flex items-center gap-4 font-bold">

                    <NavLink to="/" className="font-bold text-black">
                           Home
                        </NavLink>
                    <span>KPI Details</span>
                </div>

                <div className="flex items-center gap-4 px-2 lg:mt-0 mt-6">
                    <input type="search" name="" id="" placeholder='Serach' className='h-10 lg:w-60 w-30 border px-2 py-2 lg:rounded-2xl rounded-lg' />
                    <button className='btn'>Flitter</button>
                    <button className='btn bg-green-500 addBtn' onClick={openModal}>ADD</button>
                </div>
            </section>


            <div className="w-full max-h-[75vh] overflow-x-auto overflow-y-auto border rounded-lg mt-10 px-6">
                <table className="min-w-[1800px] border-collapse">

                  
                    <thead className="sticky top-0 bg-black text-white z-10">
                        <tr>
                            <th className="px-6 py-3 min-w-[80px] text-left">No</th>
                            <th className="px-6 py-3 min-w-[140px] text-left">Date</th>
                            <th className="px-6 py-3 min-w-[180px] text-left">Issue Type</th>
                            <th className="px-6 py-3 min-w-[180px] text-left">Department</th>
                            <th className="px-6 py-3 min-w-[350px] text-left">Description</th>
                            <th className="px-6 py-3 min-w-[200px] text-left">Confirm By</th>
                            <th className="px-6 py-3 min-w-[120px] text-left">Status</th>
                            <th className="px-6 py-3 min-w-[140px] text-left">Start Time</th>
                            <th className="px-6 py-3 min-w-[140px] text-left">End Time</th>
                            <th className="px-6 py-3 min-w-[140px] text-left">Duration</th>
                            <th className="px-6 py-3 min-w-[160px] text-left">Done By</th>
                            <th className="px-6 py-3 min-w-[100px] text-left">Check</th>
                            <th className="px-6 py-3 min-w-[350px] text-left">Solution</th>
                        </tr>
                    </thead>

                   
                    <tbody className="bg-white text-black divide-y divide-gray-200">
                        <tr className="hover:bg-gray-100 transition">
                            <td className="px-6 py-4">1</td>
                            <td className="px-6 py-4">2024-01-15</td>
                            <td className="px-6 py-4">Network</td>
                            <td className="px-6 py-4">IT</td>
                            <td className="px-6 py-4 whitespace-normal break-words">
                                Internet connection down in main office building
                            </td>
                            <td className="px-6 py-4">Admin</td>
                            <td className="px-6 py-4 text-green-600 font-semibold">Completed</td>
                            <td className="px-6 py-4">09:00</td>
                            <td className="px-6 py-4">10:15</td>
                            <td className="px-6 py-4">1h 15m</td>
                            <td className="px-6 py-4">John</td>
                            <td className="px-6 py-4 text-green-600">✔</td>
                            <td className="px-6 py-4 whitespace-normal break-words">
                                Router restarted and ISP contacted
                            </td>
                        </tr>

                        <tr className="hover:bg-gray-100 transition">
                            <td className="px-6 py-4">2</td>
                            <td className="px-6 py-4">2024-01-16</td>
                            <td className="px-6 py-4">Hardware</td>
                            <td className="px-6 py-4">Finance</td>
                            <td className="px-6 py-4 whitespace-normal break-words">
                                Printer not responding on floor 3
                            </td>
                            <td className="px-6 py-4">Manager</td>
                            <td className="px-6 py-4 text-yellow-600 font-semibold">Pending</td>
                            <td className="px-6 py-4">11:30</td>
                            <td className="px-6 py-4">—</td>
                            <td className="px-6 py-4">—</td>
                            <td className="px-6 py-4">Alex</td>
                            <td className="px-6 py-4 text-red-600">✖</td>
                            <td className="px-6 py-4 whitespace-normal break-words">
                                Awaiting replacement part
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>


            {/* Model */}

            <div ref={modalRef} className=" absolute bg-white/12 backdrop-blur-sm shadow-2xl top-[14%] px-6  inset-0   z-50 model hidden justify-center items-center">
                <div className="bg-white text-black px-6 py-10 rounded-xl border border-black ">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">ADD KPI</h2>

                        <div className="flex items-center gap-4">
                            <button className='btn' onClick={closeModal}>Cancel</button>
                    <button className='btn bg-green-500 addBtn' onClick={closeModal}>Save</button>
                        </div>
                    </div>

                    <div className="flex  justify-between flex-wrap items-center text-black mt-10 gap-4">
                    <input type="number" className=' h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' placeholder='No'/>
                    <input type="Date" className=' h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' placeholder='Date'/>
                    <select name="" id="" className='h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm'>
                        <option value="">Issue Type</option>
                        <option value="">A</option>
                    </select>
                    <select name="" id="" className='h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm'>
                        <option value="">Departments</option>
                        <option value="">A</option>
                    </select>
                    <textarea name="" id="" className='h-20 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' placeholder='Description'></textarea>
                <select name="" id="" className='h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm'>
                        <option value="">Comfirm By</option>
                        <option value="">A</option>
                    </select>
                     <select name="" id="" className='h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm'>
                        <option value="">Status</option>
                        <option value="">A</option>
                    </select>
                    <input type="datetime" className=' h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' placeholder='Start Time'/>
                    <input type="datetime" className=' h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' placeholder='End Time'/>
                    <input type="datetime" className=' h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' placeholder='Duration'/>
                     <select name="" id="" className='h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm'>
                        <option value="">Done By</option>
                        <option value="">A</option>
                    </select>
                     <select name="" id="" className='h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm'>
                        <option value="">Check</option>
                        <option value="">A</option>
                    </select>
                     <textarea name="" id="" className='h-20 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' placeholder='Solution'></textarea>
                </div>
                </div>

                
            </div>





        </>
    )
}

export default Kpi