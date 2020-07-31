import Setup from './src/Setutp'
import Control from './src/control'
import playerGameLoop from './src/animation'

let camera, scene, renderer, gameObjects, width, height, control, breakableBlock
function init() {
    gameObjects = {}
    breakableBlock = []
    width = window.innerWidth
    height = window.innerHeight
    scene = Setup.Scene()
    camera = Setup.Camera(width, height)
    renderer = Setup.Renderer(width, height)
    Setup.SetMesh(gameObjects, width, height)
    control = new Control(height)
    for (const key in gameObjects) {
        if(key === "pillar") {
            console.log(gameObjects[key].breakBlocks)
            gameObjects[key].column.forEach(element => scene.add(element.mesh))
            gameObjects[key].breakBlocks.forEach(element => scene.add(element.mesh))
            gameObjects[key].breakBlocks.forEach(element => breakableBlock.push(element))
        }
        scene.add(gameObjects[key].mesh)
       // breakableBlock.push(gameObjects[key].mesh)
    }
   // breakableBlock.splice(0, 2)
    camera.LookAt(gameObjects.player.GetPosition())
    console.log(breakableBlock)
}
let delta = {
    value: 1
}
let i = 2
function animate() {
    requestAnimationFrame(animate)
    camera.LookAt(gameObjects.player.GetPosition())
    playerGameLoop({player : gameObjects.player, delta : delta, control: control, breakableBlock: breakableBlock})
    camera.Move()
    renderer.render(scene, camera.GetCamera())
}

init()
animate()