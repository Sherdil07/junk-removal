import React from "react";
import Card from "../Card/Card";
import "./Service.css";
import HeartEmoji from "../../assets/property-cleanout.webp";
import Glasses from "../../assets/property-cleanout.webp";
import Humble from "../../assets/property-cleanout.webp";
import { motion } from "framer-motion";

const Services = () => {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ispum is simply dummy text of printing of printing Lorem
          <br />
          ispum is simply dummy text of printing
        </spane>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "37rem" }}
          whileInView={{ left: "35rem" }}
          exit={{ left: "40rem" }}
          transition={transition}
          viewport={{ once: false }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Full property clean out clutter disposal services"}
            detail={
              "LoadUp works directly with REO property managers, residential homeowners and landlords by providing full property clean out solutions including foreclosure and eviction clean up services."
            }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-15rem" }}
          exit={{ left: "-20rem" }}
          transition={transition}
          viewport={{ once: false }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* third card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "10rem" }}
          exit={{ left: "15rem" }}
          transition={transition}
          viewport={{ once: false }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
