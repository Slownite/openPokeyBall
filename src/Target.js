import { CircleGeometry, MeshBasicMaterial, Mesh, DoubleSide } from "three";
export default class Target {
    constructor(y) {
        const geometry = new CircleGeometry(5, 64)
        const material = new MeshBasicMaterial({color: 0xff00ff})
        this.mesh = new Mesh(geometry, material)
        this.mesh.position.x = 50
        this.mesh.rotation.y = 180
        this.mesh.position.y = y
        this.mesh.material.side = DoubleSide
    }
    onCenter(y) {
        if (y < this.mesh.position.y + 4 && y > this.mesh.position.y - 4 )
            return true
        return false
    }
}