import React, { useEffect, useState } from 'react';
import AllDataTable from '../AllDataTable/AllDataTable';
import Sidebar from '../Sidebar/Sidebar';


const MainDashboard = () => {
    const [allData,setAllData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allData')
        .then(res=>res.json())
        .then(data=>setAllData(data))
    },[])
    return (
        <div className='row'>
            <div className='col-md-2'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-10 p-4'>
                <h5>Dashboard</h5>
                <div className="row text-white">
                    <div className="col-md-3 p-3">
                        <div className="row bg-danger rounded-3 p-3">
                            <div className="col-md-4"><h2>50</h2></div>
                            <div className="col-md-8"><p>Pending Appointments</p></div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div className="row bg-primary rounded-3 p-3">
                            <div className="col-md-4"><h2>50</h2></div>
                            <div className="col-md-8"><p>Today's Appointments</p></div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div className="row bg-success rounded-3 p-3">
                            <div className="col-md-4"><h2>50</h2></div>
                            <div className="col-md-8"><p>Total <br /> Appointments</p></div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div className="row bg-warning rounded-3 p-3">
                            <div className="col-md-4"><h2>50</h2></div>
                            <div className="col-md-8"><p>Total <br /> Patients</p></div>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        <AllDataTable allData={allData}></AllDataTable>
                    }
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;