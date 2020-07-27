
import Setup from './src/Setutp'
let camera, scene, renderer, gameObjects, width, height, controls
function init() {
    gameObjects = []
    width = window.innerWidth
    height = window.innerHeight
    scene = Setup.Scene()
    camera = Setup.Camera(width, height)
    renderer = Setup.Renderer(width, height)
    Setup.StartGame({ gameObjects:gameObjects, width: width, height: height})
    gameObjects.forEach(element => scene.add(element.mesh))
}
function animate() {
    requestAnimationFrame(animate)
    camera.lookAt(gameObjects[0].mesh.position)
    renderer.render(scene, camera)

}

init()
animate()