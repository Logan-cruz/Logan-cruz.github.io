import './style.css'
import * as THREE from './three.module.js';


const generateColor = () => `#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`;


const scene  = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGL1Renderer(
  {canvas: document.querySelector('#bg')}
);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(80);
camera.position.setY(0)
const texturePog = new THREE.TextureLoader().load('Vegeta.png')
const texturePog1 = new THREE.TextureLoader().load('Galaxy.png')
const moonTexture = new THREE.TextureLoader().load('Galaxy.png')
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({
    map: moonTexture
  })
  
)
moon.position.x = -45
scene.add(moon)
const geoPog = new THREE.CylinderGeometry(41.37,41.37,6,32)
const matPog = new THREE.MeshStandardMaterial(
  {
    color:0xFFFFFF,
    wireframe: false,
    map: texturePog
  }
)
const background = new THREE.TextureLoader().load('background.png')
scene.background = background
const pog = new THREE.Mesh(geoPog,matPog)
pog.rotation.x = 45
scene.add(pog)
pog.scale.set(0.1,0.1,0.1)
//LIGHTS
const pointLight = new THREE.PointLight(0x23f4476F, 1000, 1000)
const ambientLight = new THREE.AmbientLight(0xFFFFFF,0.05)
pointLight.position.set(0,0,50)
scene.add(pointLight, ambientLight)
//HELPERS
const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200,50)
const axesHelper = new THREE.AxesHelper(20,20,20)
scene.add(lightHelper, gridHelper, axesHelper)



const controls = new OrbitControls(camera, renderer.domElement)
function newStar() {
  const gemometry = new THREE.SphereGeometry(0.5, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: generateColor })
  const star = new THREE.Mesh(gemometry, material);
  const x = THREE.MathUtils.randFloatSpread(400)
  const y = THREE.MathUtils.randFloatSpread(300)
  const z = THREE.MathUtils.randFloatSpread(100)
  star.position.set(x, y - 25, z - 100);
  scene.add(star);
}
Array(400).fill().forEach(newStar);
function moveCamera(){
   const t = document.body.getBoundingClientRect().top
   moon.rotation.z += 0.2
   moon.rotation.x += 0.2
   moon.rotation.y += 0.03
   camera.position.z = t * -0.01
   camera.position.x = t * -0.0002
   camera.rotation.y = t * -0.0002
   pog.rotation.x += 0.01
  pog.rotation.y += 0.015
  pog.rotation.z +=0.01
}
document.body.onscroll = moveCamera
function animate(time) {
  requestAnimationFrame( animate );
  renderer.render(scene, camera)
  //pog.rotation.z += 0.03;
  //pog.rotation.y += 0.06
  
}
animate()

