
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
}
function animate() {
    requestAnimationFrame(animate)
    camera.lookAt(gameObjects[1].mesh.position)
    gameObjects[1].mesh.position.y +=0.1
    camera.position.y +=0.1
    renderer.render(scene, camera)

}

init()
animate()