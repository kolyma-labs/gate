import * as THREE from "three";
import { OutlineEffect } from "three/addons/effects/OutlineEffect.js";
import { MMDLoader } from "three/addons/loaders/MMDLoader.js";
import { MMDAnimationHelper } from "three/addons/animation/MMDAnimationHelper.js";

let mesh, camera, scene, renderer, effect, helper;
let ready = false;

const clock = new THREE.Clock();

function init() {
  const overlay = document.getElementById("overlay");
  // overlay.remove();

  const container = document.createElement("div");
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    2000,
  );

  // scene

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  scene.add(new THREE.PolarGridHelper(30, 0));

  const listener = new THREE.AudioListener();
  camera.add(listener);
  scene.add(camera);

  const ambient = new THREE.AmbientLight(0xaaaaaa, 1);
  scene.add(ambient);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(-1, 1, 1).normalize();
  scene.add(directionalLight);

  // renderer

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  effect = new OutlineEffect(renderer);

  // model

  function onProgress(xhr) {
    if (xhr.lengthComputable) {
      const percentComplete = (xhr.loaded / xhr.total) * 100;
      const rounded = Math.round(percentComplete, 2);
      console.log("👨🏻‍🚀 " + rounded + "% horny");

      if (rounded == 100) {
        console.log("✨ Max level horniness reached!");
      }
    }
  }

  const modelFile = "assets/miku/miku_v2.pmd";
  const vmdFiles = ["assets/vmds/wavefile_v2.vmd"];
  const cameraFiles = ["assets/vmds/wavefile_camera.vmd"];
  const audioFile = "assets/audios/wavefile_short.mp3";
  const audioParams = { delayTime: (160 * 1) / 30 };

  helper = new MMDAnimationHelper();

  const loader = new MMDLoader();

  loader.loadWithAnimation(
    modelFile,
    vmdFiles,
    function (mmd) {
      mesh = mmd.mesh;

      helper.add(mesh, {
        animation: mmd.animation,
        physics: true,
      });

      loader.loadAnimation(
        cameraFiles,
        camera,
        function (cameraAnimation) {
          helper.add(camera, {
            animation: cameraAnimation,
          });

          new THREE.AudioLoader().load(
            audioFile,
            function (buffer) {
              const audio = new THREE.Audio(listener).setBuffer(buffer);

              helper.add(audio, audioParams);
              scene.add(mesh);

              ready = true;
            },
            onProgress,
            null,
          );
        },
        onProgress,
        null,
      );
    },
    onProgress,
    null,
  );

  // Remove the overlay
  overlay.remove();
  expose();

  window.addEventListener("resize", onWindowResize);
}

function expose() {
  document.body.style.color = "#d5d5d5";
  const anchor = document.getElementById("anchor");
  anchor.style.color = "#08f";
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  effect.setSize(window.innerWidth, window.innerHeight);
}

// Animation loop

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  if (ready) {
    helper.update(clock.getDelta());
  }

  effect.render(scene, camera);
}

// Automatically start the animation
Ammo().then(function () {
  init();
  animate();
});
