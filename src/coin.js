import { Geometry, CylinderGeometry, TextureLoader, Mesh, MeshBasicMaterial } from "three"

export default class Coin {
    constructor(y) {
        const geometry = new CylinderGeometry(5, 5,1,10)
        const material = new MeshBasicMaterial({color: 0xffff00})//new TextureLoader().load('./../drive-download-20200316T111959Z-001/Sprites/coin.png')
        this.mesh = new Mesh(geometry, material)
        this.mesh.position.y = y
        this.mesh.position.x = 30
        this.mesh.rotation.x = 90

    }
    animation() {
        this.mesh.rotation.z += 0.1
    }
    destroy() {
        this.mesh.material.visible = false
    }
}