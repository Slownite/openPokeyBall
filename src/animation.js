const { default: Player } = require("./Player");

export default function playerGameLoop({player, delta, control, breakableBlock}) {
    if (control.pinned) {
        delta.value = 0
        player.block = false
        // player.ontarget = false
        // player.onTarget()
    }
    else if (control.move) {
       player.Move({ strength : control.velocity, gravity : delta.value,  breakableBlock : breakableBlock})
        delta.value+=0.1
      
    }
    else if (control.charge) {
        delta.value = 0
        player.ontarget = false
    }
}