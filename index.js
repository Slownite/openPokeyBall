import Setup from './src/Setutp'
import Control from './src/control'
import playerGameLoop from './src/animation'

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
        if(key === "pillar") {
            gameObjects[key].column.forEach(element=> scene.add(element.mesh))
            gameObjects[key].breakBlocks.forEach(element => {
                environment.push(element.mesh)
            })
            continue
        }
        scene.add(gameObjects[key].mesh)
        environment.push(gameObjects[key].mesh)
    }
    environment.splice(0, 2)
    camera.LookAt(gameObjects.player.GetPosition())
   
    
}
let delta = {
    value: 1
}
function animate() {
    requestAnimationFrame(animate)
    camera.LookAt(gameObjects.player.GetPosition())
    playerGameLoop({gameObjects: gameObjects, delta : delta, control: control, environment: environment})
    camera.Move()
    renderer.render(scene, camera.GetCamera())

}

init()
animate()