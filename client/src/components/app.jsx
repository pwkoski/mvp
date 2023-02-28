import React, { useState, useEffect } from 'react';
import axios from 'axios';



async function getNode(currNode) {
  const response = await axios.get(
    `http://localhost:3000/getNode`, { params: { "name": `"${currNode}"` } }
  );
  return response;
};



const App = () => {

  const [currentNode, setCurrentNode] = useState('Half Guard');
  const [currList, setCurrList] = useState([]);

  useEffect(() => {
    getNode(currentNode)
    .then((result) => {
      setCurrList(result.data);
    })
    }, [currentNode]);

  console.log('here is currList: ', currList);
  if (currList.length !== 0) {
    const nodeList = currList.map((node, index, currList) => {
      console.log(node.name, ' ', node.label);
      return node;
      //return <Entry name={node.name} label={node.label} index={index} currList={currList}/>
    });
  }
  console.log('document.defaultView.visualViewport: ', document.defaultView.visualViewport)

  const onChange = (e) => {
    setTerm(e.target.value);
  }

  const search = () => {
    onSearch(term);
  }

  return (
    <div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={'2'} onChange={onChange}/>
      <button onClick={search}> Add Repos </button>
    </div>
  );
}

export default App;