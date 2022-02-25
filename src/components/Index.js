import React, { useEffect,useState } from 'react'
import './Index.css'

const Index = () => {
const [users, setUsers] = useState([]);

const getUsers = async() => {
 const response = await fetch('https://jsonplaceholder.typicode.com/photos');
 setUsers (await response.json());
}

    useEffect(() => {
         getUsers();
    }, []);
    return (
        <div className='container mt-5'>
            <div className='row text-center'>

                {
                    users.map((curElem)=>{
                        return(
                            <>
                             <div className='col-10 col-md-4 mt-5'>
                    <div className='card p-2'>
                        <div className='d-flex text-left'>
                            <div className='image bg-dark'>
                                <img src={curElem.thumbnailUrl} className='rounded w-100' />
                            </div>
                            <div className='ml-3 w-100'>
                                <h4 className='text-dark'>{curElem.id}</h4>
                                <p className='mb-0 mt-0 text-left'>{curElem.title}</p> <span className='text-left'>Web Developer</span>
                                <div className='p-2 mt-2 text-white status'>
                                    <div className='about bg-light text-dark rounded'>
                                        <span className='articles'>Articles</span>
                                        <span className='number1'>38</span>
                                    </div>
                                    <div className='about bg-light text-dark rounded'>
                                        <span className='articles'>Articles</span>
                                        <span className='number1'>38</span>
                                    </div>
                                    <div className='about bg-light text-dark rounded'>
                                        <span className='articles'>Articles</span>
                                        <span className='number1'>38</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                            </>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Index
