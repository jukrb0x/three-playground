import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { MutableRefObject, RefObject, useRef, useState } from 'react';
import styled from 'styled-components';

function Box(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

const CanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default function ThreeApp() {
  return (
    <CanvasWrapper className="bg-violet-1">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </CanvasWrapper>
  );
}