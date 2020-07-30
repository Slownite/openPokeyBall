import { Mesh, SphereGeometry, MeshBasicMaterial, Raycaster, Vector3 } from "three";

export default class Player {
    constructor() {
        const  geo =  new SphereGeometry(5, 5, 5)
        const material = new MeshBasicMaterial({color: 0xff0000})
        this.mesh = new Mesh(geo, material)
        this.mesh.position.y = 30
        this.mesh.position.x = 30
        this.raycaster = new Raycaster(this.mesh.position, new Vector3(0, 1, 0))
        this.force = 100
        this.block = false
    }
    GetPosition() {
        return this.mesh.position
    }
    Move({strength, gravity, environment, click}) {
        
        if (click && this.mesh.position.y > 5) {
            this.block = false
            return
        }
        this.BlockUp(environment)
        this.Attraction(strength, gravity)
    }
    Attraction(strength, gravity) {
        
        if ( this.mesh.position.y > 5) {
           if (this.block)
                this.mesh.position.y -= gravity/8
            else 
                this.mesh.position.y += strength * this.force - gravity
            return true
        } 
        else if (this.mesh.position.y <= 5) {
        this.mesh.position.y = 5 
            return true
        }
        return false
    }
    BlockUp(environment) {
        if (environment.length && this.isObstacles(environment)) {
            this.mesh.position.y = environment[0].position.y - 5
            environment.splice(0, 1)
            this.block = true
            return
        }

    }
    isObstacles(environment) {
        return environment[0].position.y - 5 < this.mesh.position.y 
    }
}