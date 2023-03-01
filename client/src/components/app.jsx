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



const App = () => {

  const [currentNode, setCurrentNode] = useState({name: 'Half Guard', label: 'Position'});
  const [currList, setCurrList] = useState([]);

  let entryList = [];

  useEffect(() => {
    getNodeList(currentNode.name, currentNode.label)
    .then((result) => {
      setCurrList(result.data);
    })
    }, [currentNode]);


  if (currList.length !== 0) {
    entryList = currList.map((node, index, currList) => {
      return <Entry key={index} name={node.name} label={node.label} index={index} setCurrentNode={setCurrentNode}/>
    });
  }

  const nodeContainerStyle = {display: "flex", flexDirection: "row", width: "100%", alignItems: "stretch"}

  const currentNodeStyle = {width: "33%", height: "100%"}

  const entryListStyle = {width: "33%", height: "100%"}

  const futureStyle = {width: "33%", height: "100%"}

  return (
    <div id="nodeContainer" className="nodeContainer" style={nodeContainerStyle}>
      <div id="currentNode" style={currentNodeStyle}>
      <Entry key={-1} name={currentNode.name} label={currentNode.label} index={-1} setCurrentNode={setCurrentNode}/>
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