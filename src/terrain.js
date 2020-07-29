import { Geometry, PlaneGeometry, Mesh, MeshBasicMaterial, DoubleSide } from "three"

export default class Terrain {
    constructor(width, height) {
        const geometry = new PlaneGeometry(width, height)
        const material = new MeshBasicMaterial({color : 0xAA00ff})
        this.mesh = new Mesh(geometry, material)
        this.mesh.material.side = DoubleSide
        this.mesh.rotation.x = Math.PI/2
    }
}