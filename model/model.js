const driver = require('../database/index.js');



exports.createNode = async () => {
  const session = driver.session({database:"mvp1"});
  const result = session.run(`CREATE
    (halfGuard:Position {name: 'Half Guard'}),
    (underhookHalfGuard:Position {name: 'Underhook Half Guard'}),
    (waiterSweep:Position {name: 'Waiter Sweep Position'}),
    (kimura:Submission {name: 'Kimura'}),
    (choiBar:Submission {name: 'Choi Bar'}),
    (johnWayne:Sweep {name: 'John Wayne Sweep'}),
    (overhead:Sweep {name: 'Overhead Sweep'}),
    (lowPosture:Opponent {name: 'They have low posture'}),
    (stepUp:Opponent {name: 'They step up far leg'}),
    (modx:Sweep {name: 'Modified X Guard Sweep'}),
    (singleX:Position {name: 'Single Leg X'}),
    (heelHook:Submission {name: 'Heel Hook'}),
    (halfGuard)-[:MOVE_TO_POS]->(underhookHalfGuard),
    (halfGuard)-[:MOVE_TO_POS]->(waiterSweep),
    (halfGuard)-[:MOVE_TO_SUB]->(kimura),
    (halfGuard)-[:MOVE_TO_SUB]->(choiBar),
    (halfGuard)-[:MOVE_TO_SWEEP]->(johnWayne),
    (halfGuard)-[:MOVE_TO_SWEEP]->(overhead),
    (halfGuard)-[:MOVE_TO_OPP]->(lowPosture),
    (halfGuard)-[:MOVE_TO_OPP]->(stepUp),
    (stepUp)-[:MOVE_TO_SWEEP]->(modx),
    (stepUp)-[:MOVE_TO_POS]->(singleX),
    (stepUp)-[:MOVE_TO_SUB]->(heelHook)
    RETURN halfGuard
     `)
      .then((result) => {
      //console.log('this is real result: ', result);
      const singleRecord = result.records[0]
      const node = singleRecord.get(0)
      console.log('node: ', node);
      //console.log('node.properties.name: ', node.properties.name)
      session.close();
      })
      .catch((err) => {
        console.log('this is createNode err: ', err);
      })

};

exports.getNode = async (name, label) => {
  //console.log('in models, name: ', name, " label: ", label);
  const newsession = driver.session({database:"mvp1"});

  const query = "MATCH (:" + label + " {name: $name})-[]->(b) RETURN b";
  //console.log(query);
  const result = await newsession.run(query, {name: name});


  newsession.close();
  //console.log('here is result: ', result);
  return result;

};

//exports.getNode("Half Guard").then((result) => {console.log('and this is result: ', result)});
//exports.createNode();