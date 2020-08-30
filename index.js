import Setup from './src/Setutp';
import Control from './src/control';
import playerGameLoop from './src/animation';
import { AmbientLight, DirectionalLight, PMREMGenerator, Vector3 } from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky';

let camera,
  scene,
  renderer,
  gameObjects,
  width,
  height,
  control,
  breakableBlock,
  targets,
  coins,
  pos,
  light,
  parameters,
  pmremGenerator,
  uniforms,
  sun,
  sky;
function init() {
  light = new DirectionalLight(0xffffff, 1);
  let ambiant = new AmbientLight(0xaaeeff, 0.5);
  gameObjects = {};
  breakableBlock = [];
  targets = [];
  coins = [];
  width = window.innerWidth;
  height = window.innerHeight;
  let setup = new Setup();
  scene = setup.Scene();
  camera = Setup.Camera(width, height);
  renderer = Setup.Renderer(width, height);
  setup.SetMesh(gameObjects, width, height); //setup all the mesh in the game
  control = new Control(height);
  for (const key in gameObjects) {
    if (key === 'pillar') {
      gameObjects[key].column.forEach((element) => scene.add(element.mesh));
      gameObjects[key].breakBlocks.forEach((element) => scene.add(element.mesh));
      gameObjects[key].breakBlocks.forEach((element) => breakableBlock.push(element));
      gameObjects[key].targets.forEach((element) => scene.add(element.mesh));
      gameObjects[key].targets.forEach((element) => targets.push(element));
      gameObjects[key].coins.forEach((element) => scene.add(element.mesh));
      gameObjects[key].coins.forEach((element) => coins.push(element));
      continue;
    }
    scene.add(gameObjects[key].mesh);
  }
  camera.LookAt(gameObjects.player.GetPosition());
  window.addEventListener('resize', onWindowResize, false);
  pos = camera.camera.position;
  light.position.set(pos.x + 10, pos.y + 10, pos.z + 10);
  light.castShadow = true;
  sun = new Vector3();
  sky = new Sky();
  sky.scale.setScalar(10000);
  scene.add(sky);
  uniforms = sky.material.uniforms;

  uniforms['turbidity'].value = 10;
  uniforms['rayleigh'].value = 2;
  uniforms['mieCoefficient'].value = 0.005;
  uniforms['mieDirectionalG'].value = 0.8;

  parameters = {
    inclination: 0.49,
    azimuth: 0.205,
  };

  pmremGenerator = new PMREMGenerator(renderer);

  updateSun();
  scene.add(light);
  scene.add(ambiant);
}

function updateSun() {
  let theta = Math.PI * (parameters.inclination - 0.5);
  let phi = 2 * Math.PI * (parameters.azimuth - 0.5);

  sun.x = Math.cos(phi);
  sun.y = Math.sin(phi) * Math.sin(theta);
  sun.z = Math.sin(phi) * Math.cos(theta);

  sky.material.uniforms['sunPosition'].value.copy(light.position);

  scene.environment = pmremGenerator.fromScene(sky).texture;
}
let delta = {
  value: 1,
};
let i = 2;

function animate() {
  if (!gameObjects.player.lost) {
    if (!gameObjects.player.win) requestAnimationFrame(animate);
  }
  camera.LookAt(gameObjects.player.GetPosition());
  playerGameLoop({
    player: gameObjects.player,
    delta: delta,
    control: control,
    breakableBlock: breakableBlock,
    targets: targets,
    coins: coins,
  });
  camera.Move();
  onLoose();
  pos = camera.camera.position;
  light.position.set(pos.x + 10, pos.y + 10, pos.z + 10);
  renderer.render(scene, camera.GetCamera());
}
function onWindowResize() {
  width = window.innerWidth;
  height = window.innerHeight;
  camera.camera.aspect = width / height;
  camera.camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
function onLoose() {
  if (gameObjects.player.lost || gameObjects.player.win) {
    location.reload();
  }
}
init();
animate();
