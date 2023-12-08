import * as THREE from "https://unpkg.com/three@0.121.1/build/three.module.js";
import { OrbitControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/OrbitControls.js";
import { PositionalAudioHelper } from "https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/helpers/PositionalAudioHelper.js";

let scene, camera, renderer;

let startButton = document.getElementById("button_play");
startButton.addEventListener("click", init);

let muteButton = document.getElementById("button_mute");
let isPlaying = false;

function init() {
  let overlay = document.getElementById("overlay");
  overlay.remove();

  muteButton.style.display = "block";

  const container = document.getElementById("container");

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(3, 7, 3); // our starting view position

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  scene.fog = new THREE.Fog(0xa0a0a0, 2, 20);

  const dirLight = new THREE.DirectionalLight(0xffffff);
  scene.add(dirLight);

  const floorGeometry = new THREE.PlaneGeometry(100, 100);
  const floorMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
  });
  const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
  //   scene.add(floorMesh);

  const grid = new THREE.GridHelper(50, 50, 0x888888, 0x888888);
  scene.add(grid);

  let sphereGeo = new THREE.SphereGeometry(0.25, 100, 10);
  let sphereGeo2 = new THREE.SphereGeometry(0.2, 100, 10);
  let sphereMat = new THREE.MeshPhongMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0.5,
  });
  let sphereMat2 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5,
  });
  let sphere = new THREE.Mesh(sphereGeo, sphereMat);
  let sphere2 = new THREE.Mesh(sphereGeo2, sphereMat2);

  sphere2.rotation.set(0, Math.PI, 0);
  scene.add(sphere, sphere2);

  const listener = new THREE.AudioListener();
  camera.add(listener);

  const laptopN = document.getElementById("track1");
  const laptopNpos = new THREE.PositionalAudio(listener);
  laptopNpos.setMediaElementSource(laptopN);
  laptopNpos.setRefDistance(100);
  laptopNpos.setDirectionalCone(180, 180, 0);
  laptopN.play();

  const helper = new PositionalAudioHelper(laptopNpos, 10);
  laptopNpos.add(helper);

  const laptopU = document.getElementById("track2");
  const laptopUpos = new THREE.PositionalAudio(listener);
  laptopUpos.setMediaElementSource(laptopU);
  laptopUpos.setRefDistance(100);
  laptopUpos.setDirectionalCone(180, 180, 0);
  laptopU.play();

  const helper2 = new PositionalAudioHelper(laptopUpos, 10);
  laptopUpos.add(helper2);

  sphere.add(laptopNpos);
  sphere2.add(laptopUpos);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.1, 0);
  controls.update();
  controls.minDistance = 0.1;
  controls.maxDistance = 15;
  controls.maxPolarAngle = 0.5 * Math.PI;

  window.addEventListener("resize", onWindowResize);

  animate();

  muteButton.addEventListener("click", () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
      laptopN.pause();
      laptopU.pause();
    } else {
      laptopN.play();
      laptopU.play();
    }
  });
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
