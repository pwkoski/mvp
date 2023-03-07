const driver = require('../database/index.js');
const data = require('../data/halfguard.js');

exports.createDatabase = () => {
  const session = driver.session({database:"mvp1"});
  const result = session.run(data.query)
      .then((result) => {
      session.close();
      })
      .catch((err) => {
        console.log('this is createNode err: ', err);
      })
};

exports.getNode = async (name, label) => {
  const newsession = driver.session({database:"mvp1"});
  const query = "MATCH (:" + label + " {name: $name})-[]->(b) RETURN b";
  const result = await newsession.run(query, {name: name});
  newsession.close();
  return result;
};


//exports.createDatabase();
//command to delete db from browser:
//MATCH (n)
//DETACH DELETE n