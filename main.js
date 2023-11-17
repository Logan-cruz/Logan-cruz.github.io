import * as THREE from './three.module.js';
//Starting Postion of images on top, along with a new scene and camera
const STARTY = 20
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//Moves the Camera alon the x axis
camera.position.z = 30;
//Created a image List that we can pull from later on in the program, whic they are in the 'img' folder
let imgList = [
    "MarchingBand.png",
    "Cert.png",
    "ITF.PNG",
    "MarchingBand.png",
]
//adds every image as a plane mesh so we can see it on the scene when its added to the scene
for (const image in imgList) {
    //every mesh has a geometry, texture and material
    console.log(image);
    const geometry = new THREE.PlaneGeometry(30, 20);
    const texture = new THREE.TextureLoader().load('img/' + imgList[image])
    const material = new THREE.MeshBasicMaterial({ color: 0xa3a2a0, side: THREE.DoubleSide, map: texture });//add the texture image here
    const plane = new THREE.Mesh(geometry, material);
    //add the new plane to the scene
    plane.position.x = -5
    scene.add(plane);
}
console.log(scene)
//move the camera with the scrollbar
function moveCamera() {

    const top = document.body.getBoundingClientRect().top
    camera.position.y = STARTY + top * 0.05
    console.log(top)
}
//add scrollbar event to move the camera.
document.body.onscroll = moveCamera
//resize the threejs canvas with the window, while adjusting for the phone size
function resizeWindow() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    //adjust for phone and desktop size.
    if (window.innerWidth <= 600) {
        camera.position.x = -2
        for (const child in scene.children) {
            scene.children[child].rotation.y = 0
            scene.children[child].position.y = child * -50
            scene.children[child].position.x = -1
        }
    }
    else {
        for (const child in scene.children) {
            scene.children[child].rotation.y = 15 * (Math.PI / 180)
            scene.children[child].position.y = child * -25 + 26
            scene.children[child].position.x = -10.5
            camera.position.x = 15
        }
    }
}
//resize canvas on window size
window.addEventListener('resize', resizeWindow, false)
//create the renderer and attach to the canvas
const renderer = new THREE.WebGLRenderer(
    { canvas: document.querySelector('#bg') }
);
//set initial canvas size
resizeWindow()
//set renderer size and add it to the page
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//animiation loop(calls itself recursively)
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera)
    //pog.rotation.z += 0.03;
    //pog.rotation.y += 0.06

}
//start the animation.
animate()
