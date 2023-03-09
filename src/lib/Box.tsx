import { Canvas, ThreeElements, Vector3, useFrame } from '@react-three/fiber';
import { MutableRefObject, RefObject, useRef, useState } from 'react';

export function Box(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += delta));
  const face = 55;
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 2.5 : 0.5}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      {/*<sphereGeometry args={[1, face, face]} />*/}
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      {/*<lineBasicMaterial color={'orange'} />*/}
    </mesh>
  );
}
