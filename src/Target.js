import { CircleGeometry, MeshBasicMaterial, Mesh } from "three";
export default class Target {
    constructor(x) {
        const geometry = new CircleGeometry({radius: 5})
        const material = new MeshBasicMaterial({color: 0xff00ff})
        this.mesh = new Mesh(geometry, material)
        this.mesh.position.x -= x

    }
}