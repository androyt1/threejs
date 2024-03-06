"use client";
import { useGLTF, OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { angleToRadians } from "../utils/angle";

export function Man(props) {
    const fileUrl = "/models/head.glb";
    const model = useGLTF(fileUrl);
    return (
        <Canvas>
            <PerspectiveCamera makeDefault position={[0, 20, 30]} />
            <OrbitControls autoRotate={true} rotateSpeed={1} />
            <directionalLight args={["#ffffff", 2.5]} position={[0, 3, 0]} />
            {/* <ambientLight args={["#ffffff", 0.5]} /> */}

            <mesh
                rotation-x={angleToRadians(-25)}
                position-y={1}
                position-z={4}
                position-x={4}
                castShadow={true}>
                <primitive object={model.scene} {...props} />
            </mesh>
            <mesh rotation-x={-angleToRadians(90)} position-y={-8}>
                <planeGeometry args={[30, 20]} />
                <meshStandardMaterial color='#6C463A' />
            </mesh>
            {/* <Environment preset='night' background blur={0.5} /> */}
        </Canvas>
    );
}
