import { Mesh, SphereGeometry, MeshBasicMaterial, MeshPhongMaterial, Group, CylinderGeometry, MeshNormalMaterial } from "three";

export default class Player {
    constructor() {
        const  geo =  new SphereGeometry(5, 200, 200)
        const material = new MeshPhongMaterial({color: 0xff0000, flatShading : true, shininess: 150})
        const ball = new Mesh(geo, material)
        const circle = new Mesh(new CylinderGeometry(6, 6, 0.5, 10), new MeshNormalMaterial())
        this.mesh = new Group()
        this.mesh.add(ball)

        this.mesh.add(circle) 

        this.mesh.position.y = 30
        this.mesh.position.x = 30
        this.lost = false
        this.win = false
        this.force = 20
        this.block = false
        this.ontarget = false
        this.superSpeed = false
        this.score = 0
        this.mesh.castShadow = true
        this.mesh.receiveShadow = true

    }
    GetPosition() {
        return this.mesh.position
    }
    Move({strength, gravity, breakableBlock, coins}) {
        this.superSpeed ? this.force = 80 : this.force = 20
        this.TakeCoin({coins : coins})
       this.BlockUp({breakableBlock : breakableBlock})
        this.Attraction(strength, gravity)
        this.animate()
    }
    Attraction(strength, gravity) {
        if (this.mesh.position.y <= 5) {
            this.mesh.position.y = 5 
            this.lost = true
            return 
            }
        else if (this.mesh.position.y > 4950) {
            this.win = true
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

    TakeCoin({coins}) {
        if (coins.length && this.isCoin(coins[0])) {
            this.score += 10
            coins[0].destroy()

            coins.splice(0, 1)
       }
    }
    isCoin(element) {
        return this.mesh.position.y > element.mesh.position.y - 5
    }
    animate() {
        this.mesh.children[1].rotation.z += 0.5
        this.mesh.children[1].rotation.x += 0.5
    }
    pinnedColor() {
        this.mesh.children[0].material.color.setHex(0x0000ff)
    }
    MoveColor() {
        this.mesh.children[0].material.color.setHex(0xff0000)

    }
}
