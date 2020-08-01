import BreakableCube from "./breakableCube"
import Cube from "./cube"
import Target from "./Target"

export default class Pillar {
    constructor(number) {
        this.sizeBlock = 10
        this.column = []
        this.breakBlocks = []
        this.targets = []
        this.cursorBlock = 0
        this.composedOf(0.5, number)

    }
    composedOf(breakable, number) {
        var breakable = false
        var isTarget = false
        for ( let i = 0; i < number; i++ ) {
            if (Math.random() < breakable && i > Math.round(number/10) && breakable) {
                this.breakBlocks.push(new BreakableCube(100, 20, 50, this.cursorBlock))
                breakable = false
                continue
            }
            isTarget = true
            breakable = true
            this.column.push(new Cube(10, 100, 50, this.cursorBlock, 0x00000))
            this.cursorBlock += 100
            this.targets.push(new Target(300))
        }

    }
   
}