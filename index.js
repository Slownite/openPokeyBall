import Setup from './src/Setutp'
import Control from './src/control'
import playerGameLoop from './src/animation'

let camera, scene, renderer, gameObjects, width, height, control, breakableBlock, targets
function init() {
    gameObjects = {}
    breakableBlock = []
    targets = []
    width = window.innerWidth
    height = window.innerHeight
    let setup = new Setup()
    scene = setup.Scene()
    camera = Setup.Camera(width, height)
    renderer = Setup.Renderer(width, height)
    setup.SetMesh(gameObjects, width, height)
    control = new Control(height)
    for (const key in gameObjects) {
        if(key === "pillar") {
            gameObjects[key].column.forEach(element => scene.add(element.mesh))
            gameObjects[key].breakBlocks.forEach(element => scene.add(element.mesh))
            gameObjects[key].breakBlocks.forEach(element => breakableBlock.push(element))
            gameObjects[key].targets.forEach(element => scene.add(element.mesh))
            gameObjects[key].targets.forEach(element => targets.push(element))
            continue
        }
        scene.add(gameObjects[key].mesh)
    }
    camera.LookAt(gameObjects.player.GetPosition())
}

let delta = {
    value: 1
}
let i = 2

function animate() {
    requestAnimationFrame(animate)
    camera.LookAt(gameObjects.player.GetPosition())
    playerGameLoop({player : gameObjects.player, delta : delta, control: control, breakableBlock: breakableBlock, targets: targets})
    camera.Move()
    renderer.render(scene, camera.GetCamera())
}

init()
animate()