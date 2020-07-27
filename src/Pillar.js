import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";

export default class Pillar {
    constructor(width, height, depth) {
        const geometry = new BoxGeometry(width, height, depth)
        const material = new MeshBasicMaterial({color: 0x00ff00})
        this.mesh = new Mesh(geometry, material)
        this.mesh.position.x = 100
        this.mesh.position.y = 500
    }
}