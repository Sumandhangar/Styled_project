import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Index.css";
import { FaEdit } from "react-icons/fa";
import { BiShow } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai'
import Popup from './Popup'
import Create from './Create'

const Axios = () => {
    // ******************For Fetch data from api ****************************
    const [repo, setRepo] = useState([]);
    const [create, setCreate] = useState(false);
    const [update, setUpdate] = useState(false);
    const getRepo = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response);
                const myRepo = response.data;
                setRepo(myRepo);
            });
    };
    useEffect(() => getRepo(), []);
    // ***************************For Update********************************

    // *****************************for Create new card********************

    
    const toggleform = () => {
        setCreate(!create)
    }

    const toggleupdate = () => {
        setUpdate(!update)
    }
    return (

        <div className="container mt-5">
            <div className="row text-center">
                <div className="col-md-12" style={{ Zindex: 1 }}>
                    <button type="button" className="btn rounded bg-info text-white font-weight-bold" onClick={toggleform}>Create new card</button>
                    {create && <Create handleClose={toggleform} />}
                </div>
                {repo.map((curElem) => {
                    return (
                        <>
                            <div className="col-10 col-md-4 mt-5">
                                <div className="card p-2">
                                    <div className="d-flex text-left">
                                        <div className="image bg-dark">
                                            <img src='' className="rounded w-100 bg-dark" style={{ height: '150px', width: '250px' }} />
                                        </div>
                                        <div className="ml-3 w-100">
                                            <h4 className="text-dark p-0 m-0">{curElem.id}</h4>
                                            <span className="text-left">{curElem.username}</span>
                                            <p>{curElem.email}</p>
                                            <div className="mt-2 text-white status">
                                                <div className="about text-dark rounded" onClick={toggleupdate}>
                                                    <span className="articles">Edit</span>
                                                    <span className="number1"><FaEdit /></span>
                                                </div>
                                                {update && <Popup handleClose={toggleupdate} />}
                                                <div className="about text-dark rounded">
                                                    <span className="articles">Show</span>
                                                    <span className="number1"><BiShow /></span>
                                                </div>
                                                <div className="about text-dark rounded">
                                                    <span className="articles">Delete</span>
                                                    <span className="number1"><AiFillDelete /></span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>


    );
};

export default Axios;
