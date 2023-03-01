import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Entry = ({name, label, index, setCurrentNode}) => {

  let height = document.defaultView.visualViewport.height;
  let divHeight = 36; //pixels
  let gap = 9; //pixels
  let y = index * (divHeight + gap);
  if (index === -1) {
    y = height/2;
  }

  const handleOnClick = (e) => {
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
        >
        {name}
      </motion.div>
    </motion.div>
    </>
  );
}

export default Entry;