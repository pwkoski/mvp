exports.query = `CREATE
    (halfGuard:Position {name: 'Half Guard'}),
    (underhookHalfGuard:Position {name: 'Underhook Half Guard'}),
    (waiterSweepPos:Position {name: 'Waiter Sweep Position'}),
    (kimura:Submission {name: 'Kimura'}),
    (choiBar:Submission {name: 'Choi Bar'}),
    (johnWayne:Sweep {name: 'John Wayne Sweep'}),
    (pressureForwardAndAcross:Opponent {name: 'Pressuring forward and across'}),
    (openGuard:Position {name: 'Open Guard'}),
    (closedGuard:Position {name: 'Closed Guard'}),
    (lowPosture:Opponent {name: 'Have low posture, high hips'}),
    (stepUp:Opponent {name: 'Step up far leg'}),
    (halfGuard)-[:MOVE_TO_POS]->(underhookHalfGuard),
    (halfGuard)-[:MOVE_TO_POS]->(waiterSweepPos),
    (halfGuard)-[:MOVE_TO_SUB]->(kimura),
    (halfGuard)-[:MOVE_TO_SUB]->(choiBar),
    (halfGuard)-[:MOVE_TO_SWEEP]->(johnWayne),
    (halfGuard)-[:MOVE_TO_OPP]->(pressureForwardAndAcross),
    (halfGuard)-[:MOVE_TO_POS]->(openGuard),
    (halfGuard)-[:MOVE_TO_POS]->(closedGuard),
    (halfGuard)-[:MOVE_TO_OPP]->(lowPosture),
    (halfGuard)-[:MOVE_TO_OPP]->(stepUp),

      (dogFight:Position {name: 'Dogfight'}),
      (farFoot:Opponent {name: 'Gives access to far foot'}),
      (notControllingHead:Opponent {name: 'Are not controlling your head'}),
      (getOverhookPressure:Opponent {name: 'Get overhook and are pressuring in'}),
      (theyStandUp:Opponent {name: 'Stand up'}),
      (underhookHalfGuard)-[:MOVE_TO_POS]->(dogFight),
      (underhookHalfGuard)-[:MOVE_TO_OPP]->(farFoot),
      (underhookHalfGuard)-[:MOVE_TO_OPP]->(notControllingHead),
      (underhookHalfGuard)-[:MOVE_TO_OPP]->(getOverhookPressure),
      (underhookHalfGuard)-[:MOVE_TO_POS]->(waiterSweepPos),
      (underhookHalfGuard)-[:MOVE_TO_OPP]->(theyStandUp),

      (modXSweep:Sweep {name: 'Modified X Guard Sweep'}),
      (singleX:Position {name: 'Single Leg X'}),
      (heelHook:Submission {name: 'Heel Hook'}),
      (stepUp)-[:MOVE_TO_SWEEP]->(modXSweep),
      (stepUp)-[:MOVE_TO_POS]->(singleX),
      (stepUp)-[:MOVE_TO_SUB]->(heelHook),

      (postArm:Opponent {name: 'Post arm to block sweep'}),
      (johnWayne)-[:MOVE_TO_OPP]->(postArm),

      (overhead:Sweep {name: 'Overhead Sweep'}),
      (pressureForwardAndAcross)-[:MOVE_TO_SWEEP]->(overhead),

      (modXPosition:Position {name: 'Modified X Guard'}),
      (lowPosture)-[:MOVE_TO_POS]->(modXPosition),
      (lowPosture)-[:MOVE_TO_POS]->(singleX),
      (lowPosture)-[:MOVE_TO_SUB]->(heelHook),

      (weightBack:Opponent {name: 'Have weight backward'}),
      (weightForward:Opponent {name: 'Have weight forward'}),
      (waiterSweep:Sweep {name: 'Waiter Sweep'}),
      (legOverTop:Opponent {name: 'Bring their leg over your head'}),
      (waiterSweepPos)-[:MOVE_TO_OPP]->(weightBack),
      (waiterSweepPos)-[:MOVE_TO_OPP]->(weightForward),
      (waiterSweepPos)-[:MOVE_TO_SWEEP]->(waiterSweep),
      (waiterSweepPos)-[:MOVE_TO_OPP]->(legOverTop),

        (kneeTapTakedown:Sweep {name: 'Knee-tap takedown'}),
        (pressuringIntoYou:Opponent {name: 'Pressuring in to you'}),
        (knockYouOver:Opponent {name: 'Knock you over'}),
        (startToStand:Opponent {name: 'Start to stand up'}),
        (rollUnderSweep:Sweep {name: 'Roll-under sweep'}),
        (hipsLowerThanYours:Opponent {name: 'Hips are higher than yours'}),
        (dogFight)-[:MOVE_TO_SWEEP]->(kneeTapTakedown),
        (dogFight)-[:MOVE_TO_OPP]->(pressuringIntoYou),
        (dogFight)-[:MOVE_TO_OPP]->(knockYouOver),
        (dogFight)-[:MOVE_TO_OPP]->(startToStand),
        (dogFight)-[:MOVE_TO_SWEEP]->(rollUnderSweep),
        (dogFight)-[:MOVE_TO_OPP]->(hipsLowerThanYours),

        (doubleLegVariant:Sweep {name: 'Double-leg variant'}),
        (farFoot)-[:MOVE_TO_SWEEP]->(doubleLegVariant),

        (backTake:Sweep {name: 'Backtake'}),
        (notControllingHead)-[:MOVE_TO_SWEEP]->(backTake),

        (getOverhookPressure)-[:MOVE_TO_SWEEP]->(rollUnderSweep),

        (singleLeg:Sweep {name: 'Single Leg Takedown'}),
        (theyStandUp)-[:MOVE_TO_SWEEP]->(singleLeg),

        (postArm)-[:MOVE_TO_POS]->(underhookHalfGuard),

        (xGuard:Position {name: 'X-guard'}),
        (waiterBerimbolo:Sweep {name: 'Waiter Berimbolo'}),
        (weightBack)-[:MOVE_TO_POS]->(xGuard),
        (weightForward)-[:MOVE_TO_SWEEP]->(modXSweep),
        (legOverTop)-[:MOVE_TO_SWEEP]->(waiterBerimbolo),

          (underhookKneeCut:Position {name: 'Underhook Knee Cut'}),
          (pressuringIntoYou)-[:MOVE_TO_SWEEP]->(backTake),
          (knockYouOver)-[:MOVE_TO_POS]->(underhookKneeCut),
          (startToStand)-[:MOVE_TO_SWEEP]->(singleLeg),
          (hipsLowerThanYours)-[:MOVE_TO_SWEEP]->(backTake)

      RETURN halfGuard
     `

