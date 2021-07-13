import * as THREE from "https://unpkg.com/three@0.121.1/build/three.module.js";
import { DragControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/DragControls.js";
import { OrbitControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/OrbitControls.js";
import { PositionalAudioHelper } from "https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/helpers/PositionalAudioHelper.js";

let ie = document.getElementById("ie");
let threeD = document.getElementById("threeD");
let sa = document.getElementById("sa");
let radio = document.getElementById("radio");
let cl = document.getElementById("chris");

let button = document.getElementById("button");

let sidetrigger = document.getElementById("leftside");
let links = document.getElementsByClassName("navlink");
let clicked = false;
let buttonC = false;
let audiohover = false;
let texts = [
  "Archive",
  "Video",
  "DJ & Sound Production",
  "Web Design & Development",
];
let alinks = [];

let scene, camera, renderer, dragControls, group, imggroup, controls, container;
let gTs = [];
let navTexts = [];
let images = [];
let images1 = [];
let images2 = [];
let images3 = [];
let sound1, sound2, sound3;

let ieHover = false;
let threeDHover = false;
let saHover = false;
let radioHover = false;

const mouse = new THREE.Vector2(),
  raycaster = new THREE.Raycaster();

function makeLinks() {
  var a = document.createElement("a");
  var alink = document.createTextNode("ARCHIVE");
  a.appendChild(alink);
  a.title = "Archive";
  a.href = "https://www.xlaenz.com/zzz/blog.html";
  alinks.push(a);

  var b = document.createElement("a");
  var blink = document.createTextNode("VIDEO");
  b.appendChild(blink);
  b.title = "Video";
  b.href = "https://www.xlaenz.com/zzz/video.html";
  alinks.push(b);

  var c = document.createElement("a");
  var clink = document.createTextNode("DJ + SOUND PRODUCTION");
  c.appendChild(clink);
  c.title = "Video";
  c.href = "https://soundcloud.com/laenzzz";
  alinks.push(c);

  var d = document.createElement("a");
  var dlink = document.createTextNode("WEB DESIGN + DEVELOPMENT");
  d.appendChild(dlink);
  d.title = "Video";
  c.href = "https://soundcloud.com/laenzzz";
  alinks.push(d);

  return alinks;
}

window.addEventListener("load", () => {
  makeLinks();

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

  imggroup = new THREE.Group();
  scene.add(imggroup);

  sidetrigger.addEventListener("mouseenter", () => {
    clicked = !clicked;

    if (clicked) {
      links.forEach((link) => {
        link.style.display = "inline";
        link.style.flexDirection = "row";
        link.style.lineHeight = "250%";
        link.style.textTransform = "lowercase";
        link.style.textDecoration = "none";
      });

      var loader = new THREE.FontLoader();
      loader.load("text/Exo2.json", function (font) {
        var mT = new THREE.MeshPhongMaterial({
          color: "white",
          specular: 0x555555,
          shininess: 30,
          transparent: true,
        });
        for (let i = 0; i < alinks.length; i++) {
          gTs[i] = new THREE.TextGeometry(alinks[i].innerHTML, {
            font: font,
            size: 8,
            height: 3,
            curveSegments: 6,
            bevelEnabled: false,
            bevelThickness: 1,
            bevelSize: 0.5,
            bevelSegments: 2,
          });
          navTexts[i] = new THREE.Mesh(gTs[i], mT);

          navTexts[i].position.set(-48, 7 + 10 * i, -8);
          navTexts[i].scale.set(0.2, 0.2, 0.2);

          //   scene.add(navTexts[i]);
        }
      });
    } else {
      links.forEach((link) => {
        link.style.display = "none";
      });
      navTexts.forEach((e) => {
        scene.remove(e);
      });
    }
  });

  sidetrigger.onmouseleave = () => {};

  ie.addEventListener("mouseover", () => {
    ieHover = !ieHover;

    images1 = [];
    images2 = [];
    images3 = [];

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("img/port/interface/int1.png");
    const texture1 = textureLoader.load("img/port/interface/int2.png");
    const texture2 = textureLoader.load("img/port/interface/int4.png");

    const geometry = new THREE.BoxGeometry(20, 25, 5);
    geometry.translate(-30, -20, 0);
    const material = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: texture,
    });
    const material1 = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: texture1,
    });
    const material2 = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: texture2,
    });
    const image = new THREE.Mesh(geometry, material);
    images.push(image);
    const image1 = new THREE.Mesh(geometry, material1);
    images.push(image1);
    const image2 = new THREE.Mesh(geometry, material2);
    images.push(image2);

    while (images.length > 3) {
      images.splice(0, 1);
      images.forEach((image) => {
        image.geometry.dispose();
        image.material.dispose();
        scene.remove(image);
      });
    }

    images.forEach(function (image) {
      image.position.set(
        Math.random() * 30,
        Math.random() * 50,
        Math.random() * 25
      );
      scene.add(image);
      imggroup.add(image);
    });

    // something here

    // if (!threeDHover || !saHover || !radioHover) {
    //   while (images.length > 3) {
    //     images.splice(0, 1);
    //     images.forEach((image) => {
    //       image.geometry.dispose();
    //       image.material.dispose();
    //       scene.remove(image);
    //     });
    //   }

    //   while (scene.children.length > 3) {
    //     scene.children.splice(3, 1);
    //     scene.children.forEach((i) => {
    //       i.geometry.dispose();
    //       i.material.dispose();
    //       scene.remove(i);
    //     });
    //   }
    // }
  });

  ie.addEventListener("click", () => {
    while (images.length > 3) {
      images.splice(0, 1);
    }
    images.forEach((image) => {
      image.geometry.dispose();
      image.material.dispose();
      scene.remove(image);
    });
  });

  threeD.addEventListener("mouseover", () => {
    threeDHover = !threeDHover;

    images = [];
    images2 = [];
    images3 = [];

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("img/port/vw/vw1.png");
    const texture1 = textureLoader.load("img/port/vw/vw2.png");
    const texture2 = textureLoader.load("img/port/vw/vw3.png");

    const geometry = new THREE.BoxGeometry(20, 25, 5);
    geometry.translate(-30, -20, 0);
    const material = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: texture,
    });
    const material1 = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: texture1,
    });
    const material2 = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: texture2,
    });

    const image = new THREE.Mesh(geometry, material);
    images1.push(image);
    const image1 = new THREE.Mesh(geometry, material1);
    images1.push(image1);
    const image2 = new THREE.Mesh(geometry, material2);
    images1.push(image2);

    while (images1.length > 3) {
      images1.splice(0, 1);
      images1.forEach((image) => {
        image.geometry.dispose();
        image.material.dispose();
        scene.remove(image);
      });
    }

    images1.forEach(function (image) {
      image.position.set(
        Math.random() * 30,
        Math.random() * 30,
        Math.random() * 10
      );
      scene.add(image);
    });
  });

  threeD.addEventListener("click", () => {
    while (images1.length > 3) {
      images1.splice(0, 1);
    }
    images1.forEach((image) => {
      image.geometry.dispose();
      image.material.dispose();
      scene.remove(image);
    });
  });

  sa.addEventListener("mouseover", () => {
    saHover = !saHover;
    images = [];
    images1 = [];

    const listener = new THREE.AudioListener();
    camera.add(listener);

    if (!audiohover) {
      button.style.display = "block";

      button.addEventListener("click", () => {
        buttonC = true;

        if (buttonC == true) {
          button.style.display = "none";
          //   button.remove();

          sound1 = document.getElementById("track1");

          const pos1 = new THREE.PositionalAudio(listener);
          pos1.setMediaElementSource(sound1);
          pos1.setRefDistance(50);
          pos1.setDistanceModel("exponential");
          pos1.setDirectionalCone(45, 100, 0);

          const phelper1 = new PositionalAudioHelper(pos1, 5);
          pos1.add(phelper1);

          sound2 = document.getElementById("track2");

          const pos2 = new THREE.PositionalAudio(listener);
          pos2.setMediaElementSource(sound2);
          pos2.setRefDistance(50);
          pos2.setDistanceModel("exponential");
          pos2.setDirectionalCone(90, 100, 0);
          pos2.rotation.set(0, Math.PI / 2, 0);

          const phelper2 = new PositionalAudioHelper(pos2, 5);
          pos2.add(phelper2);

          sound3 = document.getElementById("track3");

          const pos3 = new THREE.PositionalAudio(listener);
          pos3.setMediaElementSource(sound3);
          pos3.setRefDistance(50);
          pos3.setDistanceModel("exponential");
          pos3.setDirectionalCone(30, 180, 0);
          pos3.rotation.set(0, Math.PI, 0);

          const phelper3 = new PositionalAudioHelper(pos3, 5);
          pos3.add(phelper3);

          const textureLoader = new THREE.TextureLoader();
          const texture = textureLoader.load("img/port/sa/sa4.png");
          const texture1 = textureLoader.load("img/port/sa/sa1.png");
          const texture2 = textureLoader.load("img/port/sa/sa.png");

          const geometry = new THREE.BoxGeometry(20, 25, 5);
          geometry.translate(-30, -20, 0);
          const material = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            map: texture,
          });
          const material1 = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            map: texture1,
          });
          const material2 = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            map: texture2,
          });

          const image = new THREE.Mesh(geometry, material);
          images2.push(image);
          image.add(pos1);
          pos1.position.set(-30, -20, 0);
          sound1.play();

          const image2 = new THREE.Mesh(geometry, material1);
          images2.push(image2);
          image2.add(pos2);
          pos2.position.set(-30, -20, 0);
          sound2.play();

          const image3 = new THREE.Mesh(geometry, material2);
          images2.push(image3);
          image3.add(pos3);
          pos3.position.set(-30, -20, 0);
          sound3.play();

          while (images2.length > 3) {
            images2.splice(0, 1);
            images2.forEach((image) => {
              image.geometry.dispose();
              image.material.dispose();
              scene.remove(image);
            });
          }

          images2.forEach(function (image) {
            image.position.set(
              Math.random() * 30,
              Math.random() * 40,
              Math.random() * 30
            );
            scene.add(image);
          });
        }
      });

      audiohover = true;
    }

    if (audiohover) {
      sound1.play();
      sound2.play();
      sound3.play();
      images2.forEach(function (image) {
        image.position.set(
          Math.random() * 30,
          Math.random() * 40,
          Math.random() * 30
        );
        scene.add(image);
      });
    }
  });

  sa.addEventListener("click", () => {
    sound1.pause();
    sound2.pause();
    sound3.pause();

    while (images2.length > 3) {
      images.splice(0, 1);
    }
    images2.forEach((image) => {
      image.geometry.dispose();
      image.material.dispose();
      scene.remove(image);
    });
  });

  radio.addEventListener("mouseover", () => {
    radioHover = !radioHover;
    images = [];
    images1 = [];
    images2 = [];

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("img/port/radio/radio1.png");
    const texture1 = textureLoader.load("img/port/radio/radio4.jpg");
    const texture2 = textureLoader.load("img/port/radio/radio3.png");

    const geometry = new THREE.BoxGeometry(20, 25, 5);
    geometry.translate(-30, -20, 0);
    const material = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: texture,
    });
    const material1 = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: texture1,
    });
    const material2 = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: texture2,
    });

    const image = new THREE.Mesh(geometry, material);
    images3.push(image);

    const image2 = new THREE.Mesh(geometry, material1);
    images3.push(image2);

    const image3 = new THREE.Mesh(geometry, material2);
    images3.push(image3);

    while (images3.length > 3) {
      images3.splice(0, 1);
      images3.forEach((image) => {
        image.geometry.dispose();
        image.material.dispose();
        scene.remove(image);
      });
    }

    images3.forEach(function (image) {
      image.position.set(
        Math.random() * 30,
        Math.random() * 40,
        Math.random() * 30
      );
      scene.add(image);
      imggroup.add(image);
    });
  });

  radio.addEventListener("click", () => {
    while (images3.length > 3) {
      images3.splice(0, 1);
    }
    images3.forEach((image) => {
      image.geometry.dispose();
      image.material.dispose();
      scene.remove(image);
    });
  });

  // cl.addEventListener("click", () => {
  //   while (scene.children.length > 4) {
  //     scene.children.splice(4, 1);
  //   }
  // });

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
