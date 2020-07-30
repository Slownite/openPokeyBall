import BreakableCube from "./breakableCube"
import Cube from "./cube"

export default class Pillar {
    constructor(number) {
        this.sizeBlock = 10
        this.column = []
        this.cursorBlock = 0
        this.composedOf(0.5, number)

    }
    composedOf(breakable, number) {
        for ( let i = 0; i < number; i++ ) {
            if (Math.random() < breakable) {
                this.column.push(new BreakableCube(10, 100, 50, this.cursorBlock))
                this.cursorBlock += 100
                continue
            }
            this.column.push(new Cube(10, 100, 50, this.cursorBlock, 0x00000))
            this.cursorBlock += 100
        }
    }
}