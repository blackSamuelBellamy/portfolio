import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="mt-4 text-blue-400 text-xl font-bold">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
