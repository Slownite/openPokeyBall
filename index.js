import Setup from './src/Setutp'

let camera, scene, renderer, gameObjects, width, height, controls
function init() {
    gameObjects = []
    width = window.innerWidth
    height = window.innerHeight
    scene = Setup.Scene()
    camera = Setup.Camera(width, height)
    renderer = Setup.Renderer(width, height)
    Setup.SetMesh({ gameObjects:gameObjects, width: width, height: height})
    gameObjects.forEach(element => scene.add(element.mesh))
    camera.LookAt(gameObjects[1].GetPosition())
}
let delta = 0.1
function animate() {
    requestAnimationFrame(animate)
    camera.LookAt(gameObjects[1].GetPosition())
    camera.Move()
    renderer.render(scene, camera.GetCamera())

}

init()
animate()