import React from 'react';
import {Section,Content} from "./Css.js";

export default function Banner() {
  return <div>
         <div className='row pt-5 pb-5 pl-0 pr-0' id='index'>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 mt-lg-4 mt-md-0 mt-0 text-white order-xl-1 order-lg-2 order-md-2 order-2'>
            <Section>
                <img src='img/Graphic-Owned-Planets-p-1080.png' className='bottom' />
                <img src='img/Graphic-Owned-Block-p-1080.png' className='middle' />
                <img src='img/Graphic-Owned-Coins-p-800.png' className='up' />
            </Section>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 mt-lg-5 mt-md-0 mt-0 pt-lg-5 order-xl-2 order-lg-1 order-md-1 order-1'>
            <Content className='text-white pl-lg-5 pr-lg-5 mt-5 mb-5 pl-md-5'>
                <div className='heading pt-lg-5'>
                    <h1 className='text-white'>A very clear statement of your offer.</h1>
                </div>
                <div className='peragraph'>
                    <p>Now you can automate every step of the billing process to create a smooth flow from quote to cash. Stop wasting time chasing payments and get back to what you do best.</p>
                </div>
                <div className='d-lg-flex justify-items-center'>
                    <button type='button' className='btn btn-primary btn-lg button font-weight-bold'>Get in touch</button>
                </div>
            </Content>
        </div>
    </div>
  </div>;
}
