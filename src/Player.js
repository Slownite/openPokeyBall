import { Mesh, SphereGeometry, MeshBasicMaterial } from "three";

export default class Player {
    constructor() {
        const  geo =  new SphereGeometry(5, 20, 20)
        const material = new MeshBasicMaterial({color: 0xff0000})
        this.mesh = new Mesh(geo, material)
        this.mesh.position.y = 30
        this.mesh.position.x = 30
        this.force = 20
        this.block = false
        this.ontarget = false
        this.superSpeed = false

    }
    GetPosition() {
        return this.mesh.position
    }
    Move({strength, gravity, breakableBlock}) {
        this.superSpeed ? this.force = 80 : this.force = 20 
       this.BlockUp({breakableBlock : breakableBlock})
        this.Attraction(strength, gravity)
    }
    Attraction(strength, gravity) {
        if (this.mesh.position.y <= 5 || this.mesh.position.y > 5000) {
            this.mesh.position.y = 5 
                return 
            }
        else if ( this.mesh.position.y > 5) {
           if (this.block)
                this.mesh.position.y -= gravity
            else 
                this.mesh.position.y += strength * this.force - gravity
            return 
        } 

    }
    BlockUp({breakableBlock}) {
        if (breakableBlock.length && this.isObstacles(breakableBlock[0].mesh)) {
            if (!this.superSpeed) {
                this.block = true
                this.mesh.position.y = breakableBlock[0].mesh.position.y - 5
            }
            breakableBlock[0].destroy()
           
            breakableBlock.splice(0, 1)
        }

    }
    isObstacles(element) {
        return element.position.y - 5 < this.mesh.position.y 
    }
}