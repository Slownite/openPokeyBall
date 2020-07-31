const { default: Player } = require("./Player");

export default function playerGameLoop({player, delta, control, environment}) {
    if (control.pinned) {
        delta.value = 0
        console.log("pinned")
        player.block = false
    }
    else if (control.move) {
        player.Move({ strength : control.velocity, gravity : delta.value,  environment : environment})
        delta.value+=0.1
        console.log("move")
       // console.log(player.mesh.position.y)
    }
    else if (control.charge) {
        console.log("charge")
        delta.value = 0

    }
}