// import * as THREE from "https://unpkg.com/three@0.121.1/build/three.module.js";
import * as THREE from 'three';
import { FontLoader } from 'https://threejs.org/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://threejs.org/examples/jsm/geometries/TextGeometry.js';


let anim_container = document.getElementById("anim-container");
//handling the showing of the text when hovering over the torus
// anim_container.addEventListener("mouseover", () => {
//     const projectText = document.getElementById("projects");
//     projectText.style.display = "block"
// })

//animation for the torus

let pMesh, text, renderer, scene, camera;

init();
animate();

function init() {
scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.set(0, 0, 100);

var light = new THREE.DirectionalLight(0xffffff);
light.position.set(0, 1, 1).normalize();
scene.add(light);

  //for creating the rotating ring that users click to get to the porfolio
const pGeometry = new THREE.TorusKnotGeometry( 4, 0.1, 200, 5 );  
const pMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
pMesh = new THREE.Mesh( pGeometry, pMaterial );
pMesh.position.set(15, 30, 0)
scene.add( pMesh );

const loader = new FontLoader();

loader.load( 'public/Forum_Regular.json', function ( font ) {
	const textgeometry = new TextGeometry( 'Select Projects', {
		font: font,
        size: 3,
        height: 0.1,
        curveSegments: 32,
        bevelEnabled: false,
	} );

    textgeometry.translate( -10, 0, -2);

    const textmaterial = new THREE.MeshBasicMaterial( {
        color: 0xf0f0f0,
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide
    } );
    text = new THREE.Mesh(textgeometry, textmaterial)
    text.position.set(16, 30, 0);
    text.scale.set(1, 0.7, 1)
    
    scene.add(text);

    function render() {
        renderer.render(scene, camera);
      }

    function animate() {
        text.rotation.y += 0.01
        text.scale.x = Math.sin(0.6);
        text.scale.y = Math.sin(0.9);
  
        render();
        requestAnimationFrame(animate);
    }
    
    animate();
});

renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(800, 800);
anim_container.appendChild(renderer.domElement);
window.addEventListener("resize", onWindowResize);

render();
}

function onWindowResize() {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();

renderer.setSize(800, 800);
render();
}

function render() {
  renderer.render(scene, camera);
}

function animate() {
  const time = Date.now() * 0.001;
  pMesh.rotation.y = 0.8 * time
  pMesh.rotation.z = 0.3 * time

  render();
  requestAnimationFrame(animate);
}

