import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import WorkIcon from '@mui/icons-material/Work';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const Details = () => {
    return (
        <>
            <div className="container mt-5">
                <h1 className='fw-bold'>Welcome M Junaid</h1>
                <Card sx={{ minWidth: 275 }} className="mt-5">
                    <CardContent>
                    <div className="add_btn" style={{textAlign:"right"}}>
                            <button className='btn btn-primary mx-2'><BorderColorIcon/></button>
                            <button className='btn btn-danger'><DeleteIcon/></button>
                        </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src="https://picsum.photos/200/300?random=2" alt="profile" style={{ width: 110, height: 110, borderRadius: "50%" }} />

                            <h3 className='mt-3' >Name : <span>M Junaid</span> </h3>
                            <h3  className='mt-3'>Age : <span>23</span> </h3>
                            <p  className='mt-3'> <AttachEmailIcon/> Email : <span>junaid@gmail.com</span></p>
                            <p  className='mt-3'> <WorkIcon/> Occupation : <span>Web developer</span></p>
                        </div>
                        <div className="col-12 col-md-6 pt-5">
                       
                            
                            <h3  className='mt-5'><MobileScreenShareIcon/> Mobile : <span>03482267766</span> </h3>
                            <h3  className='mt-3'> <LocationOnIcon/>location : <span>Pak,karachi</span> </h3>
                            <h3 className='mt-3'> Description : <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, non.</span> </h3>
                        </div>
                        </div>

                    </CardContent>
                </Card>


            </div>

        </>
    )
}

export default Details