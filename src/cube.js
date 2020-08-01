import {Mesh, MeshBasicMaterial, BoxGeometry } from "three";

export default class Cube {
    constructor(width, height, depth, y, color) {
        this.geometry = new BoxGeometry(width, height, depth)
        this.material = new MeshBasicMaterial({color: color})
        this.mesh = new Mesh(this.geometry, this.material)
        this.mesh.position.x = 100
        this.mesh.position.y = 0+y

    }
} 