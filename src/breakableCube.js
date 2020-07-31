import Cube from "./cube";
import {DoubleSide} from "three"
export default class BreakableCube extends Cube {
    constructor(width, height, depth, y) {
        super(width, height, depth, y, 0xffffff)
        this.mesh.position.x -= 30
        this.mesh.material.side = DoubleSide

    }
    destroy() {
         this.mesh.material.color.setHex(0xff0000)
       //this.mesh.material.visible = false
    }
} 