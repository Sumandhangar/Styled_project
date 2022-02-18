import React from 'react';
import { H1, H3, CornerIcon, Box, RightCornerIcon, Column, Button, Content } from "./Css.js";

export default function About() {

  return (
    <>
      <div className="row">
        <div className="col-md-12 pt-5 pb-5 text-center">
          <H1>About Us</H1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-lg-0 mb-md-0 mb-4">
          <Column className="p-5 border">
            <Box>
              <RightCornerIcon className="text-white">
                <CornerIcon className="bg-primary pt-2 pl-3">
                  <i className="fas fa-arrow-right "></i>
                </CornerIcon>
              </RightCornerIcon>
            </Box>
            <Content className="p-lg-2 pt-md-5">
              <H3 className="font-weight-bold">Payment Links</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident.
              </p>
              <Button type="button" className="btn btn-sm button-3 mt-3 font-weight-bold text-white">
                Get in touch
              </Button>
            </Content>
          </Column>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-lg-0 mb-md-0 mb-4">
          <Column className="p-5 border">
            <Box>
              <RightCornerIcon className="text-white">
                <CornerIcon className="bg-primary pt-2 pl-3">
                  <i className="fas fa-arrow-right "></i>
                </CornerIcon>
              </RightCornerIcon>
            </Box>
            <Content className="p-lg-2  pt-md-5">
              <H3 className="font-weight-bold">Payment Links</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident.
              </p>
              <Button type="button" className="btn btn-sm button-3 mt-3 font-weight-bold text-white">
                Get in touch
              </Button>
            </Content>
          </Column>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-lg-0 mt-md-4">
          <Column className="p-5 border ml-lg-0 ml-md-5 mr-lg-0 mr-md-5">
            <Box className="box-md">
              <RightCornerIcon className="text-white">
                <CornerIcon className="bg-primary pt-2 pl-3">
                  <i className="fas fa-arrow-right "></i>
                </CornerIcon>
              </RightCornerIcon>
            </Box>
            <Content className="p-lg-2 pt-md-5">
              <H3 className="font-weight-bold">Payment Links</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident.
              </p>
              <Button type="button" className="btn btn-sm button-3 mt-3 font-weight-bold text-white">
                Get in touch
              </Button>
            </Content>
          </Column>
        </div>
      </div>

  
  
      
    </>
  )
}
