import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Card } from "@mui/material";
import { Home } from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";

export default function CarouselComponent() {
  const INTERVAL = 2000;

  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image:
        "https://images.unsplash.com/photo-1654789460791-74c79093c37e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      lorem: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image:
        "https://images.unsplash.com/photo-1655214701731-7ef58b86060a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      lorem: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
      image:
        "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      lorem: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    },
    {
      name: "Random Name #4",
      description: "Hello World!",
      image:
        "https://images.unsplash.com/photo-1655240632941-0331d9882d27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      lorem: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    },
    {
      name: "Random Name #5",
      description: "Hello World!",
      image:
        "https://images.unsplash.com/photo-1655070025560-6ad5418df951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
      lorem: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    },
    {
      name: "Random Name #6",
      description: "Hello World!",
      image:
        "https://images.unsplash.com/photo-1655238594201-b5975e1427ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80 ",
      lorem: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    },
    {
      name: "Random Name #7",
      description: "Hello World!",
      image:
        "https://images.unsplash.com/photo-1655201820196-bded3e9bd271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
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
        <Image
          src={props.item.image}
          width="2000"
          height="1600"
          alt={props.item.name}
        />
      </div>
    </div>
  );
  {
    /* </Paper> */
  }
}
