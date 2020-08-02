import {Mesh, MeshBasicMaterial, BoxGeometry, MeshPhongMaterial } from "three";

export default class Cube {
    constructor(width, height, depth, y, color) {
        this.geometry = new BoxGeometry(width, height, depth)
        this.material = new MeshPhongMaterial({color: color, flatShading : true, shininess: 150})
        this.mesh = new Mesh(this.geometry, this.material)
        this.mesh.position.x = 100
        this.mesh.position.y = 0+y
        this.mesh.castShadow = true
        this.mesh.receiveShadow = true

    }
} 