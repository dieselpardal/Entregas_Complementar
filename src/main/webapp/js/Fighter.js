var ball =0;

function fireArm() {
    if ( ball > environment.totalBall)
       {
          ball =null;
       } else
         {
           ball ++;
         }
        environment.armaX[ball] = null;
        environment.armAtive[ball] = process.findOutAtive;
        environment.armaY[ball] = process.armJet;
}

function startAction() {

    processMain();
    $(document).keydown(32, function() {  fireArm(); });

}