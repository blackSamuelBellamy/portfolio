import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'

const Earth = () => {
  const planet = useGLTF('./newPlanet/scene.gltf')
  return (
    <primitive 
      object={planet.scene}
      scale={0.035}
      position-y={0}
      position-x={0}
    />
  )
}

const EarthCanvas = () => {
  return(
    <Canvas 
      className='cursor-grab'
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true}}
      camera={{
        fov: 45,
        near: .1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas