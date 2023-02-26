import { Canvas, useFrame } from '@react-three/fiber';
import { MutableRefObject, RefObject, useRef, useState } from 'react';
import styled from 'styled-components';

function Box(props: { position: [number, number, number] }) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  // useFrame((state, delta) => {
  //   if (ref && ref.current) return (ref.current.rotation.y += delta);
  // });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref as MutableRefObject<any>}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

const CanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff3f3;
`;

export default function ThreeApp() {
  return (
    <CanvasWrapper>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </CanvasWrapper>
  );
}
