export default class Control {
    constructor(height) {
        this.mousePressed = false
        this.height =  height
        this.velocity = 0
        this.move = false
        this.pinned = true
        this.charge = false
        this.start = 0
        this.mouseDown()
        this.mouseUp()
        this.mouseMove()
    }

    mouseDown() {
        document.addEventListener('mousedown', (event)=>{
            this.move = false
            this.pinned = false
            this.charge = true
            this.start = new Date().getTime()
            this.startPoint = event.clientY
            
        }
        , false)
    }
    mouseUp() {
        document.addEventListener('mouseup', ()=>{
            let elapse = new Date().getTime() - this.start
            if (elapse < 300) {
                this.move = false
                this.pinned = true
                this.charge = false
                return
            }
            this.move = true
            this.pinned = false
            this.charge = false
        },
        false)
    }
    mouseMove() {
        document.addEventListener('mousemove', (event)=> {
           if ( event.clientY < this.startPoint) {
                this.force = 0
                this.velocity = 0
                return
           }
           if (this.charge)
               this.velocity = event.clientY/this.height
        }, 
        false)
    }
    GetVelocity() {
        return this.velocity
    }

}