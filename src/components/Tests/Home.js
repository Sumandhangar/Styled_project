
import React, { useEffect, useState } from 'react';


function Home() {
    //   *************First Column************
    const [Count, setCount] = useState(0);
    const handleClick1 = () => {
        if (Count < 20) {
            setCount(Count + 1)
        }
        else {
            setCount(Count + 0)
        }
    }
    // **************Second  Column ***********
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [isPreview, setIsPreview] = useState();


    // ****************Third Column*************
    const Red = () => <h1>Red</h1>;
    const Blue = () => <h1>Blue</h1>;
    const [isRed, setIsBlue] = useState(true);


    // *************First coulumn of second row***********
    const [counting, setCounting] = useState(0);



    // **************Second Column*******************
    const fruits = ['orange', 'apple', 'watermelon'];
    const list = fruits.map(fruits => <li>{fruits}</li>)



    // *****************Third Column**************
    const biodata = [
        {
            id: 0, name: 'suman', age: 15
        },
        {
            id: 1, name: 'Lucky', age: 23
        }
    ]
    // ***************First Column of Third Row****************
    const [a, setA] = useState(0);
    const [b, setB] = useState([]);
    const week = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
    useEffect(() => {
        if (a < week.length) {
            b.push(week[a])
        }
    }, [a]);


    // ****************Second Column****************
    const [show, setShow] = useState(true);


    // *************Third Column************
   
    return <>
        <div className='container-fluid'>
            <div className='row text-center'>
                <div className='col-md-12'>
                    <h1>Home Page</h1>
                </div>
            </div>
            <div className='row text-center mt-3'>
                <div className='col-md-4'>
                    <p>Count : {Count}</p>
                    <button type='button' onClick={handleClick1}>Count</button>
                </div>
                <div className='col-md-4 '>
                    <p className='pl-2'>Addition</p>
                    <div className='d-flex'>
                        <div className='d-block'>
                            <input type='number' className='' placeholder='From' onChange={e => setNum1(e.target.value)} value={num1} />
                            <input type='number' className='mt-1' placeholder='To' onChange={e => setNum2(e.target.value)} value={num2} />
                        </div>
                        <p className='text-center pt-3 font-weight-bold' style={{ height: '60px', width: '100px', textAlign: 'center', border: '1px solid black' }}>{isPreview}</p>
                    </div>
                    <button type='button' onClick={() => setIsPreview(parseInt(num1) + parseInt(num2))}>Add</button>
                </div>
                <div className='col-md-4'>
                    <h2>{isRed ? <Red /> : <Blue />}</h2>
                    <button type='button' onClick={() => setIsBlue(!isRed)}>change Color</button>
                </div>
            </div>
        </div>
        <div className='container mt-5'>
            <div className='row '>
                <div className='col-md-4'>
                    <p>Count : {counting}</p>
                    <button type='button' className='mr-2' onClick={() => setCounting((counting) => counting + 1)}>+1</button>
                    <button type='button' className='ml-2' onClick={() => setCounting((counting) => counting - 1)}>-1</button>
                </div>
                <div className='col-md-4'>
                    <p> Days :{list}</p>
                </div>
                <div className='col-md-4'>
                    {
                        biodata.map((curElm) => {
                            return <p>id:{curElm.id} Name: {curElm.name} Age:{curElm.age}</p>
                        })
                    }
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-md-4'>
                    <input type='button' onClick={() => { setA(a + 1) }} value='Show Week' />
                    <p>{
                        b.map((i) => {
                            return <>
                                {i}
                            
                                <br />
                            </>
                        })
                    }
                    </p>
                </div>
                <div className='col-md-4'>
                  {
                  show ? <h1>Hello World</h1>:null
                  }
                  <button type='button'onClick={() => setShow(false)}>Hide</button>
                  <button type='button' className='ml-3' onClick={() => setShow(true)}>Show</button>
                </div>
                <div className='col-md-4'>
                   <h1>loading....</h1>
                </div>
            </div>
        </div>
    </>;
}
export default Home;
