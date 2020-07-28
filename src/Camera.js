import {PerspectiveCamera} from 'three'
export default class Camera {
    constructor(width, height) {
        this.camera = new PerspectiveCamera(30, width / height, 0.1, 10000 )
        this.camera.position.x = -110.83
        this.camera.position.y = 50.99
        this.camera.position.z = 35.98
    }
    LookAt(pos) {
        this.pos = pos
        this.camera.lookAt(this.pos)
    }
    GetCamera() {
        return this.camera
    }
    Move() {
        this.camera.position.y = this.pos.y
    }
}