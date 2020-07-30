export default function playerGameLoop({gameObjects, delta, control, environment}) {
    if ( control.shoot) {

        gameObjects.player.Move({strength: control.velocity , gravity: delta.value, environment: environment})
        delta.value+=1
        return
    }
    return
}