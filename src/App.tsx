import { Physics } from "@react-three/cannon";
import { Bounds, Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Blob from "./Blob";
import Bunny from "./Bunny";
import Floor from "./Floor";
import Lighting from "./Lighting";
import Marble from "./Marble";
import TextComponent from "./Text";

function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Canvas
        orthographic
        shadows
        camera={{
          position: [-674.32, 401.86, 878.18],
          near: -10000,
          far: 10000,
          zoom: 1.5 * 100,
        }}
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 200ms ease-in-out",
        }}
      >
        <color args={["#2114db"]} attach="background" />

        <Suspense fallback={null}>
          <Physics>
            <Bounds fit margin={0.8}>
              <Bunny />
              <TextComponent />
            </Bounds>

            <Floor />
            <Marble setLoaded={setLoaded} />
          </Physics>

          <Blob position={[-2, -0.5, -3]} />
          <Blob position={[-2, 1.5, 0]} />
          <Blob position={[2, 0.8, 1]} />
          <Blob position={[-2, -0.2, 4]} />
          <Blob position={[2, 1, -2]} />
        </Suspense>
        <Lighting />

        <gridHelper
          args={[200, 100, "#1100ff", "#1100ff"]}
          position={[0, -1.26, 0]}
        />
        <gridHelper
          args={[200, 1000, "#1100ff", "#1100ff"]}
          position={[0, -1.27, 0]}
        />
        {/* <OrbitControls enablePan={false} minZoom={90} maxPolarAngle={Math.PI / 2 - 0.1} minPolarAngle={0} /> */}
        <OrbitControls />
      </Canvas>

      <Loader />
    </>
  );
}

export default App;
