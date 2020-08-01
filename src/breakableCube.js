import Cube from "./cube";
import {DoubleSide} from "three"
export default class BreakableCube extends Cube {
    constructor(width, height, depth, y) {
        super(width, height, depth, y, 0xffffff)
        this.mesh.position.x -= 30
        this.mesh.material.side = DoubleSide
 // loader.load('./../drive-download-20200316T111959Z-001/Meshes/fracturedBlock.glb', (geo, mat)=>{
        //     this.mesh = new Mesh(geo, mat)
        //     this.mesh.position.x = 100
        //     this.mesh.position.y = 0+y
        //     this.mesh.position.x -= 30
        //     this.mesh.material.side = DoubleSide
        //     this.scene.add(this.mesh)
        // })
    }
    destroy() {
         this.mesh.material.color.setHex(0xff0000)
       //this.mesh.material.visible = false
    }
} 