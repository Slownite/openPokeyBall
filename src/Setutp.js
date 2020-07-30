import Player from "./Player";
import Terrain from "./terrain";
import Pillar from "./Pillar";
import {Scene, WebGLRenderer, Color} from 'three';
import Camera from "./Camera";

export default class Setup {
    static SetMesh(gameObjects, width, height) {
        let player = new Player()
        let terrain = new Terrain(width, height)
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
        renderer.setSize(width, height)
        document.body.appendChild(renderer.domElement)
        return renderer
    }
    static Scene() {
        let scene = new Scene()
        scene.background = new Color(0x00A3ff)
        return scene 
    }
}