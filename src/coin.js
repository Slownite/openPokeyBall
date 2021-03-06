import { Geometry, CylinderGeometry, TextureLoader, Mesh, MeshBasicMaterial, MeshPhongMaterial } from "three"

export default class Coin {
    constructor(y) {
        const geometry = new CylinderGeometry(5, 5,1,10)
        const material = new MeshPhongMaterial({color: 0xffff00, flatShading : true, shininess: 150})
        this.mesh = new Mesh(geometry, material)
        this.mesh.position.y = y
        this.mesh.position.x = 30
        this.mesh.rotation.x = 90
        this.mesh.castShadow = true
        this.mesh.receiveShadow = true

    }
    animation() {
        this.mesh.rotation.z += 0.1
    }
    destroy() {
        this.mesh.material.visible = false
    }
}