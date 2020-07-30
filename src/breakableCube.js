import { Geometry, Mesh, MeshBasicMaterial, Color } from "three";
import Cube from "./cube";

export default class BreakableCube extends Cube {
    constructor(width, height, depth, y) {
        super(width, height, depth, y, 0xffffff)
    }
} 