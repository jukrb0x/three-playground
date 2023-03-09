import Canvas from '@/components/Canvas';
import { CanvasController } from '@/components/CanvasController';
import {Page} from '@geist-ui/core'

function Home() {
  return (
    <div className='h-screen flex justify-center items-center text-center'>
    <div className="bg-lime-2 select-none w-6xl">
      <span
        style={{
          fontWeight: 'bold',
        }}
      >
        three.js react app playground
      </span>
      <div className="flex h-3xl">
        <div className="flex-1">
          <Canvas />
        </div>
        <CanvasController />
      </div>
    </div>
    </div>
  );
}

export {Home}
