import { Mesh, SphereGeometry, MeshBasicMaterial, Raycaster, Vector3 } from "three";

export default class Player {
    constructor() {
        const  geo =  new SphereGeometry(5, 5, 5)
        const material = new MeshBasicMaterial({color: 0xff0000})
        this.mesh = new Mesh(geo, material)
        this.mesh.position.y = 30
        this.mesh.position.x = 30
        this.raycasters = {
            up: new Raycaster(this.mesh.position, new Vector3(0, 1, 0)),
            down :new Raycaster(this.mesh.position, new Vector3(0, -1, 0)),
            face: new Raycaster(this.mesh.position, new Vector3(1,0,0))
        }
        this.force = 100
        this.block = true
    }
    GetPosition() {
        return this.mesh.position
    }
    Move({strength, gravity, environment}) {

        if (!this.RaycastDown(environment[0], 5) && this.mesh.position.y > 5) {
            this.mesh.position.y += strength * this.force - gravity 
            return
        }
        this.mesh.position.y = 5

    }
    RaycastDown(other, number) {
        const res = this.raycasters.down.intersectObject(other)
        if (res.length === 0)
            return false
        return res[0].distance <= number
    }
    RaycastUp(others) {
    }
    RaycastFront(others) {
        const res = this.raycasters.down.intersectObject(others)

    }
}