import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

const Homw = () => {
    return (
        <>
            <div className="container mt-5" style={{overflow:"auto"}}>
                <div className='text-end'>
                    <button className='btn btn-primary mb-2'>+ Add data</button>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">usrname</th>
                            <th scope="col">email</th>
                            <th scope="col">job</th>
                            <th scope="col">number</th>
                            <th scope="col"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>meet</td>
                            <td>meet@gmail.com</td>
                            <td>DEV</td>
                            <td>0988765554</td>
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success'><RemoveRedEyeIcon/></button>
                                <button  className='btn btn-primary'><BorderColorIcon/></button>
                                <button  className='btn btn-danger'><DeleteIcon/></button>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </>
    )

}

export default Homw