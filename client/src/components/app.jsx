import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Entry from './entry.jsx';
import { motion } from "framer-motion";



async function getNodeList(name, label) {
  const response = await axios.get(
    `http://localhost:3000/getNode`, { params: { "name": `"${name}"`, "label": `"${label}"` } }
  );
  return response;
};

let stack = [];

const App = () => {

  const [currentNode, setCurrentNode] = useState({name: 'Half Guard', label: 'Position'});
  const [currList, setCurrList] = useState([]);

  let entryList = [];
  let height = document.defaultView.visualViewport.height;

  useEffect(() => {
    (async () => {
     let result = await getNodeList(currentNode.name, currentNode.label)
     setCurrList(result.data);
    })()}, [currentNode]
  );


  if (currList.length !== 0) {
    entryList = currList.map((node, index, array) => {
      return <Entry key={index} name={node.name} label={node.label} index={index} setCurrentNode={setCurrentNode} stack={stack} currentNode={currentNode} arrayLength={array.length}/>
    });
  }

  const handleBack = function(e) {
    if (currentNode.name !== 'Half Guard') {
        setCurrentNode(stack.pop());
    }
  }

  const currentNodeStyle = {width: "33%", height: "100%", display: "flex", justifyContent: "center"}
  const entryListStyle = {width: "33%", height: "100%", display: "flex", flexDirection: "column"}
  const futureStyle = {width: "33%", position: "relative", height: "100%", top: `${(height/2)-40}px`, right: "100px", fontSize: "100px"}
  const backButtonStyle = {position: "relative", height: "100%", top: `${(height/2)-55}px`, left: "100px", fontSize: "120px"}

  return (
    <div className="nodeContainer">
      <div className="backButton" style={backButtonStyle} onClick={handleBack}>
         &lt;
      </div>
      <div className="currentNode" id="currentNode" style={currentNodeStyle}>
        <Entry key={-1} name={currentNode.name} label={currentNode.label} index={-1} setCurrentNode={setCurrentNode} stack={stack} currentNode={currentNode}/>
      </div>
      <motion.div key={currentNode.name} id="entryList" style={entryListStyle}>
        {entryList}
      </motion.div>
      <div id="future" style={futureStyle}>
      FUTURE
      </div>
    </div>
  );
}

export default App;