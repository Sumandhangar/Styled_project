import React, {useState} from 'react';
import './Form.css';
import styled from 'styled-components'

export default function Form() {
  const [active, setActive] = useState();
  const list = [1, 2, 3, 4, 5];
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;
const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;
 
  return <div>

    <h1 className='text-dark'>dfhdhgd</h1>
    <ul className="d-flex justify-content-center">
                        {list.map((item, idx) => {
                            return (
                                <li className={active === idx ? "info active d-flex align-items-end" : "info d-flex align-items-end"}
                                    onClick={() => {
                                        if (active === idx) {
                                            setActive();
                                        } else {
                                            setActive(idx);
                                        }
                                    }}
                                >
                                    <div className='overlay text-white d-flex'>
                                        <span className='pl-lg-3 pl-md-2 pl-3 pb-2'>
                                            <i className='far fa-arrow-alt-circle-right fa-2x'></i>
                                        </span>
                                        <span className='pl-lg-5 pl-md-3 pl-1 pt-1'>List Item</span>
                                    </div>
                                </li>
                            ); 
                        })}
                    </ul>
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>


  </div>
  ;





}
