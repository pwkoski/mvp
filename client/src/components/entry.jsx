import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Entry = ({name, label, index, setCurrentNode, stack, currentNode, arrayLength}) => {

  let height = document.defaultView.visualViewport.height;
  let divHeight = 36; //pixels
  let gap = 9; //pixels
  //let offset = (height - (arrayLength*(divHeight + gap)))/4;
  let y = index * (divHeight + gap) //+ offset;
  if (index === -1) {
    y = height/2;
  }

  const handleOnClick = (e) => {
    if (e.target.innerText !== 'Half Guard') {
      stack.push({name: currentNode.name, label: currentNode.label});
    }
    setCurrentNode({name: e.target.innerText, label:event.target.getAttribute("label")});
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    }
  }

  const item = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: y,
      transition: { delay: .05 * index }
    }
  }

  let entryStyle = {};

  const submissionStyle = {
    width: "fit-content",
    fontFamily: "Arial Black",
    color: "lightGray",
    borderStyle: "outset",
    borderRadius: "10px",
    borderWidth: "thick",
    padding: "5px",
    borderColor: "darkRed",
    backgroundColor: "red",
  }
  const positionStyle = {
    width: "fit-content",
    fontFamily: "Arial Black",
    color: "lightGray",
    borderStyle: "outset",
    borderRadius: "10px",
    borderWidth: "thick",
    borderColor: "darkBlue",
    padding: "5px",
    backgroundColor : "blue",
  }
  const sweepStyle = {
    width: "fit-content",
    fontFamily: "Arial Black",
    color: "lightGray",
    borderStyle: "outset",
    borderRadius: "10px",
    borderWidth: "thick",
    borderColor: "darkGreen",
    padding: "5px",
    backgroundColor : "green",
  }
  const opponentStyle = {
    width: "fit-content",
    fontFamily: "Arial Black",
    color: "lightGray",
    borderStyle: "outset",
    borderRadius: "10px",
    borderWidth: "thick",
    borderColor: "darkGray",
    padding: "5px",
    backgroundColor : "grey",
  }

  if (label === 'Submission') {
    entryStyle = submissionStyle;
  } else if (label === 'Position') {
    entryStyle = positionStyle;
  } else if (label === 'Sweep') {
    entryStyle = sweepStyle;
  } else {
    entryStyle = opponentStyle;
  }

  return (
    <>
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants = {item}
        onClick = {handleOnClick}
        label = {label}
        style = {entryStyle}
        >
        {name}
      </motion.div>
    </motion.div>
    </>
  );
}

export default Entry;