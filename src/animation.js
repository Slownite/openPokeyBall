const { default: Player } = require("./Player");

export default function playerGameLoop({player, delta, control, breakableBlock, targets, coins}) {

    if (control.pinned) {
        player.superSpeed = false
        delta.value = 0
        player.block = false
        player.superSpeed = targets[0].onCenter(player.mesh.position.y)

    }
    else if (control.move) {
       player.Move({ strength : control.velocity, gravity : delta.value,  breakableBlock : breakableBlock, coins: coins})
        delta.value+=0.1
      
    }
    else if (control.charge) {

        delta.value = 0
    }
    coins.forEach(element => {
        element.animation()  
   })
}