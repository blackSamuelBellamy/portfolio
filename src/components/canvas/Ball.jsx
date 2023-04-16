import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Decal,
  Float,
  Preload,
  useTexture,
} from "@react-three/drei"
import CanvasLoader from '../Loader'

const Ball = props => {
  const [decal] = useTexture([props.imgUrl])
  const [position, setPosition] = useState([0, 0, 0])

  useEffect(() => {
    const newPos = [position[0], Math.sin(Date.now() * 0.001) * 0.5, position[2]];
    setPosition(newPos);
    }, [position]);

  return (
    <Float 
      speed={1.75} 
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight intensity={.25} />
      <directionalLight position={[0, 0, .05]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
        position={position}
      >
        <icosahedronGeometry  args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
}

const BallCanvas = ({icon}) => {
  return(
    <Canvas className='cursor-grab'
      frameloop="demand"
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas;
