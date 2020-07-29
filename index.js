import Setup from './src/Setutp'
import Control from './src/control'

let camera, scene, renderer, gameObjects, width, height, control, environment
function init() {
    gameObjects = {}
    environment = []
    width = window.innerWidth
    height = window.innerHeight
    scene = Setup.Scene()
    camera = Setup.Camera(width, height)
    renderer = Setup.Renderer(width, height)
    Setup.SetMesh(gameObjects, width, height)
    control = new Control(height)
    for (const key in gameObjects) {
       scene.add(gameObjects[key].mesh)
       environment.push(gameObjects[key].mesh)
    }
    environment.splice(1, 1)
    console.log(environment)
    camera.LookAt(gameObjects.player.GetPosition())
    control.mouseDown()
    control.mouseUp()
    control.mouseMove()
    
}
let delta = 1
function animate() {
    requestAnimationFrame(animate)
    camera.LookAt(gameObjects.player.GetPosition())
    if ( control.shoot) {
        console.log(control.velocity)
        gameObjects.player.Move({strength: control.velocity , gravity: delta, environment: environment, click: control.mousePressed})
        delta+=0.1
    }
    camera.Move()
    renderer.render(scene, camera.GetCamera())

}

init()
animate()