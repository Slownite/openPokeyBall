import Cube from "./cube";
import {DoubleSide} from "three"
export default class BreakableCube extends Cube {
    constructor(width, height, depth, y) {
        super(width, height, depth, y, 0x33ff89)
        this.mesh.position.x -= 30
        this.mesh.material.side = DoubleSide

    }
    destroy() {
        setTimeout(()=>{
            this.mesh.material.visible = false
        }, 1000)
           
    }
} 