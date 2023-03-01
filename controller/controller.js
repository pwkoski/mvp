const model = require("../model/model.js");


exports.getNode = (req, res) => {
  //console.log('in controller, req.query.name: ', req.query.name, 'req.query.label: ', req.query.label);
  model.getNode(JSON.parse(req.query.name), JSON.parse(req.query.label))
  .then((result) => {
    //console.log('result in controller: ', result);
    const allRecords = result.records;
    const resultArray = [];
    allRecords.forEach((record) => {
        let newnode = record.get(0);
        resultArray.push({name: newnode.properties.name, label: newnode.labels[0]});
    })
    res.status(200).send(resultArray);
  })
  .catch((err) => {
    res.status(501).send(err);
  });
}