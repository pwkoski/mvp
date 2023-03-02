import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Entry = ({name, label, index, setCurrentNode, stack, currentNode, arrayLength}) => {

  console.log('this is array.length in entry: ', arrayLength);
  console.log('this is stack in entry: ', stack);

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
    //console.log('this is stack: ', stack);
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

  //console.log('this is label: ', label);

  // backgroundColor: "rgba(0, 0, 0, .25)",

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
    //console.log('in if statement');
    entryStyle = submissionStyle;
  } else if (label === 'Position') {
    entryStyle = positionStyle;
  } else if (label === 'Sweep') {
    entryStyle = sweepStyle;
  } else {
    entryStyle = opponentStyle;
  }

  //console.log('this is entry style before rendering: ', entryStyle);

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