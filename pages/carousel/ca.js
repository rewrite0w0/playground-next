import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Card } from "@mui/material";
import { Home } from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";

export default function CarouselComponent() {
  const INTERVAL = 1000000;

  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "https://puraxel.co.kr/video/211217_main3.mp4",
      lorem: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: "https://puraxel.co.kr/video/211217_main.mp4",
      lorem: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
      image: "https://puraxel.co.kr/video/211217_main2.mp4",
      lorem: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    },
    {
      name: "Random Name #4",
      description: "Hello World!",
      image: "https://puraxel.co.kr/video/211217_main3.mp4",
      lorem: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    },
  ];

  return (
    <Carousel
      autoPlay
      interval={INTERVAL}
      duration={1000}
      stopAutoPlayOnHover
      changeOnFirstRender={true}
      // swipe
      // sx={(e) => console.log(e)}
      // cycleNavigation={false}
      // onChange={(props) => {
      //   console.log(props);
      // }}
      animation="slide"
      navButtonsProps={{
        style: {
          backgroundColor: "#ffffff",
          borderRadius: 0,
        },
      }}
      navButtonsWrapperProps={{
        style: {
          bottom: "0",
          top: "unset",
        },
      }}
      indicatorIconButtonProps={{
        style: {
          padding: "0.25rem", // 1
          color: "#D9D9D9", // 3
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#E29D9D", // 2
          backgroundColor: "#E29D9D",
          padding: "0.005rem",
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: "2rem", // 5
          textAlign: "center", // 4
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    // <Paper className="grid grid-cols-2 top-1">
    <div className="grid grid-cols-2 top-1">
      <div>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        <h1>{props.item.lorem}</h1>
      </div>
      <div>
        {/* <Image
          src={props.item.image}
          width="2000"
          height="1600"
          alt={props.item.name}
        /> */}

        <ReactPlayer url={props.item.image} width="2000" height="1600" />
      </div>
    </div>
  );
  {
    /* </Paper> */
  }
}
