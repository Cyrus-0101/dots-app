import { useState, type MouseEvent } from 'react';

interface Dots {
  x: number;
  y: number;
  // color: string;
}

function App() {
  const [dots, setDots] = useState<Dots[]>([]);

  const draw = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setDots([...dots, { x: clientX, y: clientY }]);
  };

  return (
    <div className='App'>
      <div id='button-wrapper'>
        <button>Undo</button>
        <button>Redo</button>
      </div>
      <div id='click-area' onClick={draw}>
        {dots.map(({ x, y }: Dots, i: number) => (
          <div
            key={`dot-${i}`}
            className='dot'
            style={{
              left: `${x}px`,
              top: `${y}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
