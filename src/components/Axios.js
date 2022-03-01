import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Index.css";
import { FaEdit } from "react-icons/fa";
import { BiShow } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai'
import Popup from './Popup'


const Axios = () => {
    const [repo, setRepo] = useState([]);
    const [open, setIsOpen] = useState(false);
    const getRepo = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response);
                const myRepo = response.data;
                setRepo(myRepo);
            });
    };
    // ***********************************************************

    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const postData = () => {
        console.log(id);
        console.log(username);
        console.log(email);
    }

    axios.post(`https://jsonplaceholder.typicode.com/users`, {
        //  id,username,email
    })
    const togglepopup = () => {
        setIsOpen(!open);
    }
    useEffect(() => getRepo(), []);
    return (
        <div className="container mt-5">
            <div className="row text-center">
                {repo.map((curElem) => {
                    return (
                        <>
                            <div className="col-10 col-md-4 mt-5">
                                <div className="card p-2">
                                    <div className="d-flex text-left">
                                        <div className="image bg-dark">
                                            <img src='' className="rounded w-100 bg-dark" style={{ height: '150px', width: '250px;' }} />
                                        </div>
                                        <div className="ml-3 w-100">
                                            <h4 className="text-dark p-0 m-0">{curElem.id}</h4>
                                            <span className="text-left">{curElem.username}</span>
                                            <p>{curElem.email}</p>
                                            <div className="mt-2 text-white status">
                                                <div className="about text-dark rounded" onClick={togglepopup}>
                                                    <span className="articles">Edit</span>
                                                    <span className="number1"><FaEdit /></span>
                                                </div>
                                                <div className="about text-dark rounded">
                                                    <span className="articles">Show</span>
                                                    <span className="number1"><BiShow /></span>
                                                </div>
                                                <div className="about text-dark rounded">
                                                    <span className="articles">Delete</span>
                                                    <span className="number1"><AiFillDelete /></span>
                                                </div>
                                            </div>
                                            {open && <Popup
                        content={<>
                            <form>
                                <input type='text' value={curElem.id}/>
                                <input type='text' className='form-control' name='username' value={curElem.username} onChange={(e) => setUsername(e.target.value)} />
                                <input type='email' className='form-control mt-2'name='email' value={curElem.email} onChange={(e) => setEmail(e.target.value)}/>
                                <input type='submit'onClick={postData} className='btn btn-primary mt-2' value='Update'/>
                            </form>
                            </>}
                            handleClose={togglepopup}
                    />}
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
