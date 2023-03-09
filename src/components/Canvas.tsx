import { Canvas, ThreeElements, Vector3, useFrame } from '@react-three/fiber';
import { MutableRefObject, RefObject, useRef, useState } from 'react';
import styled from 'styled-components';

import { Box } from '@/lib';

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
