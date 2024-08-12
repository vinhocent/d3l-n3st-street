import { Fisheye, CameraControls, PerspectiveCamera, Environment } from '@react-three/drei'
// import { Level, Sudo, Camera, Cactus, Box } from './Scene'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sky, PointerLockControls, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import Town from './models/town';


export default function App() {
  return (
    <Canvas className="w-full bg-red-300 h-screen " 
>
       <Fisheye zoom={0}>
        <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
        <ambientLight intensity={Math.PI / 2} />
        {/* <Environment preset="city" background blur={0} />  */}
         <PerspectiveCamera makeDefault position={[500, 500, 18.5]} /> 
        <Town />
        </Fisheye>
    </Canvas>
  )
}
