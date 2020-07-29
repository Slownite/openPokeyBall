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
        this.force = 20
        this.block = true
    }
    GetPosition() {
        return this.mesh.position
    }
    Move({strength, gravity, environment, click}) {
        // if (!click && !this.block ) {
        //     this.block = true
        //     return
        // }
        // if (!this.RaycastUp(environment)) {
        //     console.log("test")
        //     this.mesh.position.y += - this.force - gravity
        //     return
        // }
        if (!this.RaycastDown(environment[0])) {

            this.mesh.position.y += strength * this.force - gravity
            return
        }
        this.mesh.position.y = environment[0].position.y + 5

    }
    RaycastDown(other) {
        const res = this.raycasters.down.intersectObject(other)
        if (res.length === 0)
            return false
        console.log(res[0].distance)
        return res[0].distance <= 5
    }
    RaycastUp(others) {
        const res = this.raycasters.down.intersectObjects(others)
        if (res.length === 0)
            return false
        return res[0].distance <= 5
    }
    RaycastFront(others) {
        const res = this.raycasters.down.intersectObject(others)

    }
}