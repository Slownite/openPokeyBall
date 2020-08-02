import Player from "./Player";
import Terrain from "./terrain";
import Pillar from "./Pillar";
import {Scene, WebGLRenderer, Color} from 'three';
import Camera from "./Camera";
export default class Setup {
    constructor(){
        this.scene = new Scene()
    }
     SetMesh(gameObjects, width, height) {
        let player = new Player()
        let terrain = new Terrain(10000, 10000)
        console.log(this.scene)
        let pillar = new Pillar(50)
        gameObjects.terrain = terrain
        gameObjects.player = player
        gameObjects.pillar = pillar
    }
    static Camera(width, height) {
        return new Camera(width, height)
    }
    static Renderer(width, height) {
        let renderer = new WebGLRenderer({antialias: true})
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize(width, height)
        document.body.appendChild(renderer.domElement)
        renderer.shadowMap = true
        return renderer
    }
    Scene() {
        this.scene.background = new Color(0x00A3ff)
        return this.scene 
    }
}