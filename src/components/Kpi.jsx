import React from 'react'
import { NavLink } from "react-router-dom";
import { useRef } from "react";

const Kpi = ({ kpi, addkpi }) => {

    const modalRef = useRef(null);


    const dateRef = useRef(null);
    const issueTypeRef = useRef(null);
    const departmentRef = useRef(null);
    const descriptionRef = useRef(null);
    const comfirmByRef = useRef(null);
    const statusRef = useRef(null);
    const startTimeRef = useRef(null);
    const endTimeRef = useRef(null);
    const durtionRef = useRef(null)
    const doneByRef = useRef(null);
    const checkRef = useRef(null);
    const solutionRef = useRef(null);

    const openModal = () => {
        if (modalRef.current) modalRef.current.classList.remove("hidden");
    };

    const closeModal = () => {
        if (modalRef.current) modalRef.current.classList.add("hidden");
    };

    const saveKpiFromForm = async (e) => {
        e.preventDefault();


        const newKpi = {
            date: dateRef.current.value || null,
            issue_type: issueTypeRef.current.value || null,
            departments: departmentRef.current.value || null,
            decription: descriptionRef.current.value || null,
            comfirm_by: comfirmByRef.current.value || null,
            status: statusRef.current.value || null,
            start_time: startTimeRef.current.value || null,
            end_time: endTimeRef.current.value || null,
            duration: durtionRef.current.value || null,
            done_by: doneByRef.current.value || null,
            check: checkRef.current.value || null,
            solution: solutionRef.current.value || null,
        };

        console.log("Submitting KPI:", newKpi);

        await addkpi(newKpi);


        e.target.reset();
        closeModal();
    }

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
                        {kpi.map((kpiData) =>


                            <tr className="hover:bg-gray-100 transition">
                                <td className="px-6 py-4">{kpiData.id}</td>
                                <td className="px-6 py-4">{kpiData.date}</td>
                                <td className="px-6 py-4">{kpiData.issue_type}</td>
                                <td className="px-6 py-4">{kpiData.departments}</td>
                                <td className="px-6 py-4 whitespace-normal break-words">
                                    {kpiData.decription}
                                </td>
                                <td className="px-6 py-4">{kpiData.comfirm_by}</td>
                                <td className="px-6 py-4 text-green-600 font-semibold">{kpiData.status}</td>
                                <td className="px-6 py-4">{kpiData.start_time}</td>
                                <td className="px-6 py-4">{kpiData.end_time}</td>
                                <td className="px-6 py-4">{kpiData.duration}</td>
                                <td className="px-6 py-4">{kpiData.done_by}</td>
                                <td className="px-6 py-4 text-green-600">{kpiData.check}</td>
                                <td className="px-6 py-4 whitespace-normal break-words">
                                    {kpiData.solution}
                                </td>
                            </tr>)}


                    </tbody>

                </table>
            </div>


            {/* Model */}

            <div ref={modalRef} className=" absolute bg-white/12 backdrop-blur-sm shadow-2xl top-[14%] px-6  inset-0   z-50 model hidden justify-center items-center">
                <div className="bg-white text-black px-6 py-10 rounded-xl border border-black ">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">ADD KPI</h2>


                    </div>

                    <form action="post" onSubmit={saveKpiFromForm}>
                        <div className="flex  justify-between flex-wrap items-center text-black mt-10 gap-4">
                            <input type="number"  className=' h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' placeholder='No' readOnly />
                            <input type="date"  ref={dateRef}  className=' h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' placeholder='Date' required />
                            <select  ref={issueTypeRef} id="" className='h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' required>
                                <option value="">Issue Type</option>
                                <option value="A">A</option>
                            </select>
                            <select  ref={departmentRef} id="" className='h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' required>
                                <option value="">Departments</option>
                                <option value="A">A</option>
                            </select>
                            <textarea  ref={descriptionRef} id="" className='h-20 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' placeholder='Description' required></textarea>
                            <select  ref={comfirmByRef} id="" className='h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' required>
                                <option value="">Comfirm By</option>
                                <option value="A">A</option>
                            </select>
                            <select  ref={statusRef} id="" className='h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' required>
                                <option value="">Status</option>
                                <option value="A">A</option>
                            </select>
                            <input type="date"  ref={startTimeRef} className=' h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' placeholder='Start Time' required />
                            <input type="date"  ref={endTimeRef} className=' h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' placeholder='End Time' required/>
                            <input type="date"  ref={durtionRef} className=' h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' placeholder='Duration' required />
                            <select  id=""  ref={doneByRef} className='h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' required>
                                <option value="">Done By</option>
                                <option value="A">A</option>
                            </select>
                            <select  id=""  ref={checkRef} className='h-16 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' required>
                                <option value="">Check</option>
                                <option value="A">A</option>
                            </select>
                            <textarea   ref={solutionRef} id="" className='h-20 w-80 px-6 py-2 rounded-lg border-2 border-black shadow-sm' placeholder='Solution' required></textarea>
                        </div>

                        <div className="flex items-center gap-4 mt-5">
                            <button className='btn' onClick={closeModal}>Cancel</button>
                            <button className='btn bg-green-500 addBtn' type='submit'>Save</button>
                        </div>
                    </form>
                </div>


            </div>





        </>
    )
}

export default Kpi