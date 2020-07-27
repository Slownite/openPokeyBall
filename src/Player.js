import { Mesh, SphereGeometry, MeshNormalMaterial, MeshBasicMaterial } from "three";

export default class Player {
    constructor() {
        const  geo =  new SphereGeometry(5, 5, 5)
        const material = new MeshBasicMaterial({color: 0xff0000})
        this.mesh = new Mesh(geo, material)
        this.mesh.position.y = 20
        this.mesh.position.x = 30
    }
    GetPosition() {
        return this.mesh.position
    }
}