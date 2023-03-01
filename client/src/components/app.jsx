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

  return (
    <div id="nodeContainer" style={{display: "flex", flexDirection: "row", alignItems: "stretch", width: "100%"}}>
      <div id="currentNode" style={{width: "33%", height: "100%"}}>
      <Entry key={-1} name={currentNode.name} label={currentNode.label} index={-1} setCurrentNode={setCurrentNode}/>
      </div>
      <motion.div key={currentNode.name} id="entryList" style={{width: "33%", height: "100%"}}>
      {entryList}
      </motion.div>
      <div id="future" style={{width: "33%", height: "100%"}}>
      FUTURE
      </div>
    </div>
  );
}

export default App;