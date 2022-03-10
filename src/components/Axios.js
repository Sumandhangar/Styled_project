import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Index.css";
import { FaEdit } from "react-icons/fa";
import { BiShow } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai'
import Popup from './Popup'
import Update from './Update'
import Create from './Create'
import List from './List'

const Axios = (props) => {
    // ******************For Fetch data from api ****************************
    const [repo, setRepo] = useState([]);
    const [create, setCreate] = useState(false);
    const [update, setUpdate] = useState(false);
    const [list, setList] = useState(false);

    useEffect(() => {
        axios.get("https://62289f859fd6174ca82a068c.mockapi.io/database")
            .then(({ data }) => {
                setRepo(data);
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);
    // ***************************For Delete ********************************
    const onDelete = (id) => {
        axios.delete(`https://62289f859fd6174ca82a068c.mockapi.io/database/${id}`)
            .then((id) => {
                if (id.status === 200 && window.confirm) {
                    alert("Student successfully deleted");
                    window.location.reload();
                } else window.confirm("Error")
            })
            .catch((err) => alert("Something went wrong"));
    }
    // *****************************for Create new user********************
    const toggleform = () => {
        setCreate(!create)
    }
    // ******************** for display user **********************
    const toggledisplay = (res) => {
        setList(!list)
        let { id, name, username, email, address, checkbox } = res;
        localStorage.setItem('ID', id);
        localStorage.setItem('name', name);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('address', address);
        localStorage.setItem('checkbox', checkbox);
    }
    //  ********************** for update form *************************
    const toggleupdate = (res) => {
        setUpdate(!update)
        console.log(res)
        let { id, name, username, email, address, checkbox } = res;
        localStorage.setItem('ID', id);
        localStorage.setItem('name', name);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('address', address);
        localStorage.setItem('checkbox', checkbox);
    }


    return (
        <div className="container mt-5">
            <div className="row text-center">
                <div className="col-md-12" style={{ Zindex: 1 }}>
                    <button type="button" className="btn rounded bg-info text-white font-weight-bold" onClick={toggleform}>Create new card</button>
                    {create && <Create handleClose={toggleform} />}
                </div>
                {repo.map((res, i) => (
                    <div className="col-10 col-md-4 mt-5" obj={res} key={i}>
                        <div className="card p-2 h-100">
                            <div className="d-flex text-left h-100">
                                <div className="image bg-dark h-100">
                                    <img src='' alt='myimage' className="rounded w-100 bg-dark" style={{ height: '150px', width: '250px' }} />
                                </div>
                                <div className="ml-3 w-100 overflow-hidden" >
                                    <p className="p-0 m-0">{res.id}</p>
                                    <p className="p-0 m-0">{res.username}</p>
                                    <p className="p-0 m-0">{res.email}</p>
                                    <p className="p-0 m-0">{res.address}</p>
                                    <p className="p-0 m-0">{res.checkbox ? 'Checked' : 'Unchecked'}</p>
                                    <div className="mt-2 text-white status">
                                        <div className="about rounded bg-primary text-white" onClick={() => toggleupdate(res)}>
                                            <span className="articles">Edit</span>
                                        </div>
                                        {update && <Update handleClose={toggleupdate} initialValues={res.Objest} />}
                                        <div className="about text-white rounded bg-success" onClick={() => toggledisplay(res)}>
                                            <span className="articles">Show</span>
                                        </div>
                                        {list && <List handleClose={toggledisplay} initialValues={res.Objest} />}
                                        <div className="about text-white rounded bg-danger" onClick={() => onDelete(res.id)} >
                                            <span className="articles">Delete</span>
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
