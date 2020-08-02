import { PlaneGeometry, Mesh, MeshBasicMaterial, DoubleSide, MeshPhongMaterial } from "three"

export default class Terrain {
    constructor(width, height) {
        const geometry = new PlaneGeometry(width, height)
        const material = new MeshPhongMaterial({color : 0xAA00ff, flatShading : true, shininess: 150})
        this.mesh = new Mesh(geometry, material)
        this.mesh.material.side = DoubleSide
        this.mesh.rotation.x = Math.PI/2
         this.mesh.castShadow = true
        this.mesh.receiveShadow = true
    }
}