// import gsap from "gsap";
import { Box } from "@chakra-ui/react";
import { withRouter } from "next/router";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  atmosphereFragmentShader,
  atmosphereVertexShader,
  fragmentShader,
  vertexShader,
} from "./shaders";

const Globe = ({ router }) => {
  // Canvas
  const onCanvasLoaded = (canvas) => {
    if (!canvas) {
      return;
    }
    // Scene
    const scene = new THREE.Scene();
    // Sphere
    const radius = 7;
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load("/globe.jpg"),
          },
        },
      })
    );
    sphere.rotation.y = -Math.PI / 2;
    const group = new THREE.Group();
    group.add(sphere);
    scene.add(group);
    // Atmosphere
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      })
    );
    atmosphere.scale.set(1.1, 1.1, 1.1);
    scene.add(atmosphere);
    // Points
    const points = [];
    const createPoint = (lat, lng, name) => {
      const point = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 50, 50),
        new THREE.MeshBasicMaterial({
          color: "#FF0000",
        })
      );
      // Latitude and Longitude
      const latitude = (lat / 180) * Math.PI;
      const longitude = (lng / 180) * Math.PI;
      // X, Y, X Coordinates
      const pointX = radius * Math.cos(latitude) * Math.sin(longitude);
      const pointY = radius * Math.sin(latitude);
      const pointZ = radius * Math.cos(latitude) * Math.cos(longitude);
      point.position.set(pointX, pointY, pointZ);
      point.name = name;
      group.add(point);
      points.push(point);
      // console.log(point);
    };
    createPoint(-0.7893, 113.9213, "INA"); // Indonesia
    createPoint(36.2048, 138.2529, "JPN"); // Japan
    createPoint(55.3781, -3.436, "ENG"); // United Kingdom
    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(2, 3, 10);
    scene.add(pointLight);
    // Sizes
    const sizes = {
      width: 750,
      height: 750,
    };
    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      1,
      1000
    );
    camera.position.set(0, 0, 15);
    // camera.setViewOffset(
    //   sizes.width,
    //   sizes.height,
    //   -700,
    //   -200,
    //   sizes.width,
    //   sizes.height
    // );
    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    // controls.autoRotate = true;
    controls.autoRotateSpeed = 0.2;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.rotateSpeed = 0.5;
    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    // Mouse
    const mouse = new THREE.Vector2();
    addEventListener("mousemove", (e) => {
      mouse.x = (e.clientX / sizes.width) * 2 - 1;
      mouse.y = -(e.clientY / sizes.height) * 2 + 1;
    });
    // Raycaster
    const raycaster = new THREE.Raycaster();
    addEventListener("pointerdown", () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(points);
      if (intersects.length > 0) {
        // console.log(intersects[0].object.name);
        router.push(`/language/${intersects[0].object.name}`);
      }
    });
    // Resize Event Listener
    addEventListener("resize", () => {
      // Update sizes
      sizes.width = 750;
      sizes.height = 750;
      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    });
    // Animate
    const tick = () => {
      // Update objects
      // gsap.to(group.rotation, {
      //   x: -mouse.y * 0.3,
      //   y: mouse.x * 0.3,
      //   duration: 2,
      // });
      // Raycaster and Orbital Controls
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(sphere);
      // if (intersects.length > 0) {
      //   controls.autoRotate = false;
      // } else {
      //   controls.autoRotate = true;
      // }
      // Update Orbital Controls
      controls.update();
      // Render
      renderer.render(scene, camera);
      // Call tick again on the next frame
      requestAnimationFrame(tick);
    };
    tick();
  };
  return <Box as="canvas" ref={onCanvasLoaded} borderRadius="full"></Box>;
};

export default withRouter(Globe);
