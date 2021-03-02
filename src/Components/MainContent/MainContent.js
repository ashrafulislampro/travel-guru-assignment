import { Carousel } from 'react-bootstrap';
import React from 'react';
import './MainContent.css';
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const MainContent = () => {
  return (
    <div className="main-content">

      <div className="textItems">
        <h1>COX'S-BAZAR</h1>
        <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto cum quidem voluptatibus dolore hic optio sit, iure, vitae quaerat repellat praesentium, sint quos soluta repellendus est alias. Dolor, quo!</span><span>Similique, rem eligendi. Iure, reiciendis ullam repudiandae quia a necessitatibus veniam reprehenderit, ut cupiditate dicta distinctio voluptates natus placeat fugit animi. Perferendis quae aspernatur accusamus similique veniam eius possimus autem.</span></p>

        <Button variant="contained" color="secondary">
          Booking
          <ArrowForwardIcon style={{ marginLeft: '8px' }}></ArrowForwardIcon>
        </Button>
      </div>
      <div className="carouselPic">

        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className=" img1"
              src="https://i.ibb.co/R3Mg80K/Sajek.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className=" img1"
              src="https://i.ibb.co/xLwYJzg/Sreemongol.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className=" img1"
              src="https://i.ibb.co/QJQ6SY0/sundorbon.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default MainContent;