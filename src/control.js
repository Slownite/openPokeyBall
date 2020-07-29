export default class Control {
    constructor(height) {
        this.mousePressed = false
        this.height =  height
        this.shoot = false
        this.force = 0
        this.velocity = 0
    }
    mouseDown() {
        document.addEventListener('mousedown', (event)=>{
            this.mousePressed = true
            this.startPoint = event.clientY
            
        }
        , false)
    }
    mouseUp() {
        document.addEventListener('mouseup', ()=>{
            this.mousePressed = false
            this.shoot = true
        },
        false)
    }
    mouseMove() {
        document.addEventListener('mousemove', (event)=> {
            if (!this.shoot)
                return
           if ( event.clientY < this.startPoint) {
                this.force = 0
                this.velocity = 0
                return
           }
           this.force = event.clientY
           this.velocity = this.force/this.height
        }, 
        false)
    }
    GetVelocity() {
        return this.velocity
    }

}