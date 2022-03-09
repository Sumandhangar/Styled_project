import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Index.css";
import { FaEdit } from "react-icons/fa";
import { BiShow } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai'
import Popup from './Popup'
import Update from './Update'
import Create from './Create'

const Axios = (props) => {
    // ******************For Fetch data from api ****************************
    const [repo, setRepo] = useState([]);
    const [create, setCreate] = useState(false);
    const [update, setUpdate] = useState(false);
 

    useEffect(() => {
        axios.get("http://621f2e89311a70591403536e.mockapi.io/database")
            .then(({ data }) => {
                setRepo(data);
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);
    // ***************************For Update********************************
    
const onDelete = (id) => {
    axios.delete(`http://621f2e89311a70591403536e.mockapi.io/database/${id}`)
    .then((id) => {
                if (id.status === 200) {
                  alert("Student successfully deleted");
                 
                  window.location.reload();
                } else Promise.reject();
              })
              .catch((err) => alert("Something went wrong"));
  }
 
    // *****************************for Create new card********************


    const toggleform = () => {
        setCreate(!create)
    }

    const toggleupdate = (res) => {
        setUpdate(!update)
        console.log(res)
        let { id, name, username, email,address } = res;
        localStorage.setItem('ID', id);
        localStorage.setItem('name', name);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('address', address);
    }
       

    return (
        <div className="container mt-5">
            <div className="row text-center">
                <div className="col-md-12" style={{ Zindex: 1 }}>
                    <button type="button" className="btn rounded bg-info text-white font-weight-bold" onClick={toggleform}>Create new card</button>
                    {create && <Create handleClose={toggleform} />}
                </div>
                {repo.map((res,i) => (
                <div className="col-10 col-md-4 mt-5" obj={res} key={i}>
                    <div className="card p-2" >
                            <div className="d-flex text-left">
                            <div className="image bg-dark">
                                <img src='' alt='myimage' className="rounded w-100 bg-dark" style={{ height: '150px', width: '250px' }} />
                            </div>
                            <div className="ml-3 w-100" >
                                <p className="p-0 m-0">{res.id}</p>
                                <p className="p-0 m-0">{res.name}</p>
                                <p className="p-0 m-0">{res.email}</p>
                                <p className="p-0 m-0">{res.address}</p>
                                <div className="mt-2 text-white status">
                                    <div className="about rounded bg-primary text-white" onClick={() => toggleupdate(res)}>
                                        <span className="articles">Edit</span>
                                        {/* <span className="number1"><FaEdit /></span> */}
                                    </div>
                                    {update && <Update handleClose={toggleupdate} />}
                                    <div className="about text-white rounded bg-success">
                                        <span className="articles">Show</span>
                                        {/* <span className="number1"><BiShow /></span> */}
                                    </div>
                                    <div className="about text-white rounded bg-danger"onClick={() => onDelete(res.id)} >
                                        <span className="articles">Delete</span>
                                        {/* <span className="number1"><AiFillDelete /></span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))} 
            </div>
        </div>

    );
};

export default Axios;
