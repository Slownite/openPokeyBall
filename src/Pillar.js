import BreakableCube from "./breakableCube"
import Cube from "./cube"
import Target from "./Target"
import Coin from "./coin"
import {TextureLoader} from 'three'

export default class Pillar {
    constructor(number) {
        this.sizeBlock = 10
        this.column = []
        this.breakBlocks = []
        this.targets = []
        this.coins = []
        this.oppositeColor = true
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
            if (Math.random() < 0.9 && i > Math.round(number/10)) {
                this.coins.push(new Coin(this.cursorBlock + 10) )
                this.coins.push(new Coin(this.cursorBlock + 20) )
                this.coins.push(new Coin(this.cursorBlock + 30) )
                this.coins.push(new Coin(this.cursorBlock + 40) )
            }
            isTarget = true
            breakable = true
            if (this.oppositeColor) {
                this.column.push(new Cube(10, 100, 50, this.cursorBlock, 0x00000))
                this.oppositeColor = false
            }
            else {
                this.column.push(new Cube(10, 100, 50, this.cursorBlock, 0xffffff))
                this.oppositeColor = true
            }
    
            this.cursorBlock += 100
            this.targets.push(new Target(300))
        }
        console.log(this.column)
      //  this.column[this.column.length - 1].mesh.material = new TextureLoader().load('./../drive-download-20200316T111959Z-001/Sprites/checker.png')

    }
   
}