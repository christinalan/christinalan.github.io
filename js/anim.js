import * as THREE from "https://unpkg.com/three@0.121.1/build/three.module.js";
import { DragControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/DragControls.js";
import { OrbitControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/OrbitControls.js";
import { PositionalAudioHelper } from "https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/helpers/PositionalAudioHelper.js";

let ie = document.getElementById("ie");
let threeD = document.getElementById("threeD");
let sa = document.getElementById("sa");
let radio = document.getElementById("radio");
let projects = document.getElementById("projects");

let audioButton = document.getElementById("audio-button");

let buttonC = false;
let audioHover = false;


let scene, camera, renderer, dragControls, group, controls, container;

let images = [];
const MAX_IMAGES = 3

let sound1, sound2, sound3;

const mouse = new THREE.Vector2(),
  raycaster = new THREE.Raycaster();


window.addEventListener("load", () => {

  container = document.getElementById("container");
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

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(ambientLight);

  group = new THREE.Group();
  scene.add(group);


  //creates the materials and geometry objects for the 3D images
  function createImages(texturePath, texturePath1, texturePath2) {
    const textureLoader = new THREE.TextureLoader();
    const loadedTexture = textureLoader.load(texturePath);
    const loadedTexture1 = textureLoader.load(texturePath1);
    const loadedTexture2 = textureLoader.load(texturePath2);

    const geometry = new THREE.BoxGeometry(20, 25, 5);
    geometry.translate(-30, -20, 0);

    const material = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: loadedTexture,
    });

    const material1 = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: loadedTexture1,
    });

    const material2 = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: loadedTexture2,
    });
    
    
    const image = new THREE.Mesh(geometry, material);
    const image1 = new THREE.Mesh(geometry, material1);
    const image2 = new THREE.Mesh(geometry, material2);
    images.push(image, image1, image2);

  }

  //adds the images to the page
  function showImages() {
    images.forEach(image => {
      image.position.set(
        Math.random() * 30,
        Math.random() * 50,
        Math.random() * 25
      );
  
      scene.add(image);
    })
  }

  //to delete images after clicking the word
  function disposeImages() {
    images.forEach((image) => {
      image.geometry.dispose();
      image.material.dispose();
      scene.remove(image);
    })
    images.length = 0;
  }

  //to clear when the user hovers over the word again
  function resetImages() {
    while (images.length > 3) {
      // images.splice(0, 1);
      const removedImage = images.shift();
      scene.remove(removedImage);
    }
  }


  ie.addEventListener("mouseover", () => {
    // audioButton.style.display = "none";

    createImages("img/port/interface/int1.png", "img/port/interface/int2.png", "img/port/interface/int4.png")
    showImages();
    resetImages();


  });

  ie.addEventListener("click", () => {
    disposeImages();
  });

  threeD.addEventListener("mouseover", () => {
    // audioButton.style.display = "none";
    createImages("img/port/vw/vw1.png","img/port/vw/vw2.png", "img/port/vw/vw3.png")
    showImages();
    resetImages();

  });

  threeD.addEventListener("click", () => {
    disposeImages();
  });


  let soundArray = [];
  let posArray = [];

  //function for creating the positional sound
  function initializePositionalSound(soundFile, coneAngle, conePenumbra, rotationAngle) {
    const listener = camera.children[0];

    // soundFile = document.getElementById(soundFile)

    const pos = new THREE.PositionalAudio(listener);
    pos.setMediaElementSource(soundFile);
    pos.setRefDistance(50);
    pos.setDistanceModel("exponential");
    pos.setDirectionalCone(coneAngle, conePenumbra, 0);
    pos.rotation.set(0, rotationAngle, 0);

    const phelper = new PositionalAudioHelper(pos, 5);
    pos.add(phelper);

    posArray.push(pos);
    soundArray.push(soundFile);
  }

  //separate functions for managing sound
  function initializeImageAndPosSound(texturePath, pos, sound) {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(texturePath);
    const geometry = new THREE.BoxGeometry(20, 25, 5);
    geometry.translate(-10, -10, 0);
    const material = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: texture,
    });

    const image = new THREE.Mesh(geometry, material);
    images.push(image);
    image.add(pos);
    
    sound.play();
  }

  function initializePositionalAudio() {
    const listener = new THREE.AudioListener();
    camera.add(listener);
  
    audioButton.style.display = "block";
    audioButton.addEventListener("click", () => {
      buttonC = true;
  
      if (buttonC) {
        audioButton.style.display = "none";
  
        sound1 = document.getElementById("track1");
        sound2 = document.getElementById("track2");
        sound3 = document.getElementById("track3");
        // Initialize sounds and position them
        initializePositionalSound(sound1, 45, 100, 0);
        initializePositionalSound(sound2, 90, 100, Math.PI / 2);
        initializePositionalSound(sound3, 30, 180, Math.PI);

        // Initialize images and add sounds to them
        initializeImageAndPosSound("img/port/sa/sa4.png", posArray[0], sound1)
        initializeImageAndPosSound("img/port/sa/sa1.png", posArray[1], sound1)
        initializeImageAndPosSound("img/port/sa/sa.png", posArray[2], sound3);

        //play the sounds
        soundArray.forEach((sound) => sound.play());

        // Show images with random positions
        showImages();
  
        // Manage the number of images
        resetImages();
  
      }
    });
  
    audioHover = true;
  }
  

  function playPositionalAudio() {
    soundArray.forEach((sound) => sound.play());
  }
  
  function pausePositionalAudio() {
    soundArray.forEach((sound) => sound.pause());
  }

  sa.addEventListener("mouseover", () => {
    
    if (!audioHover) {
     initializePositionalAudio()
     showImages()

    }

    if (audioHover && buttonC) {
      playPositionalAudio();
      // Initialize images and add sounds to them
      initializeImageAndPosSound("img/port/sa/sa4.png", posArray[0], sound1)
      initializeImageAndPosSound("img/port/sa/sa1.png", posArray[1], sound1)
      initializeImageAndPosSound("img/port/sa/sa.png", posArray[2], sound3);
      showImages()
    }
    
  });


  sa.addEventListener("click", () => {
    pausePositionalAudio();
    disposeImages();

    // while (images.length > 3) {
    //   images.splice(0, 1);
    // }
    // images.forEach((image) => {
    //   image.geometry.dispose();
    //   image.material.dispose();
    //   scene.remove(image);
    // });
  });

  radio.addEventListener("mouseover", () => {
    // audioButton.style.display = "none";

    createImages("img/port/radio/radio1.png", "img/port/radio/radio4.jpg", "img/port/radio/radio3.png")
    showImages();
    resetImages();
  });

  radio.addEventListener("click", () => {
   disposeImages();
  });

  projects.addEventListener("click", () => {
    console.log(images);
    images.forEach((image) => {
      image.geometry.dispose();
      image.material.dispose();
      scene.remove(image);
    });
  })

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  controls.update();

  dragControls = new DragControls([...images], camera, renderer.domElement);
  dragControls.addEventListener("drag", render);

  renderer.render(scene, camera);

  window.addEventListener("resize", onWindowResize);
  container.addEventListener("click", onClick);

  animate();
  render();
});

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

function render() {
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);

  render();
}

function onClick(event) {
  event.preventDefault();
  const draggableObjects = dragControls.getObjects();
  draggableObjects.length = 0;

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersections = raycaster.intersectObjects(scene.children, true);

  if (intersections.length > 0) {
    const object = intersections[0].image;

    if (group.children.includes(object) === true) {
      scene.attach(object);
    }

    dragControls.transformGroup = true;
    draggableObjects.push(group);
  }

  if (group.children.length === 0) {
    dragControls.transformGroup = false;
    draggableObjects.push(...scene.children);
  }
  render();
}
