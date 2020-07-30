import BreakableCube from "./breakableCube"
import Cube from "./cube"

export default class Pillar {
    constructor(number) {
        this.sizeBlock = 10
        this.column = []
        this.breakBlocks = []
        this.cursorBlock = 0
        this.composedOf(0.2, number)

    }
    composedOf(breakable, number) {
        var breakable 
        for ( let i = 0; i < number; i++ ) {
            if (Math.random() < breakable && i > Math.round(number/10) && breakable) {
                this.column.push(new BreakableCube(100, 20, 50, this.cursorBlock))
                this.breakBlocks.push(new BreakableCube(100, 20, 50, this.cursorBlock))
                breakable = false
                continue
            }
            breakable = true
            this.column.push(new Cube(10, 100, 50, this.cursorBlock, 0x00000))
            this.cursorBlock += 100
        }
    }
}