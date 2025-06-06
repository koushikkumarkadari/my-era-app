import React, { useState, useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import Canvas from './components/Canvas';
import StickerButton from './components/StickerButton';
import './App.css';

const App = () => {
  const [stickers, setStickers] = useState([]);
  const stageRef = useRef(null);
  const gridSize = 40; // For 40px grid snapping

  // Add a new sticker with grid snapping
  const addSticker = (imageSrc) => {
    setStickers((prevStickers) => {
      const newSticker = {
        id: Date.now(), // Unique ID
        imageSrc,
        x: Math.round(50 / gridSize) * gridSize, // Snap to nearest 40px
        y: Math.round(50 / gridSize) * gridSize,
      };
      return [...prevStickers, newSticker];
    });
  };

  // Update sticker position with grid snapping
  const updateStickerPosition = (id, x, y) => {
    setStickers((prevStickers) =>
      prevStickers.map((sticker) =>
        sticker.id === id
          ? {
              ...sticker,
              x: Math.round(x / gridSize) * gridSize,
              y: Math.round(y / gridSize) * gridSize,
            }
          : sticker
      )
    );
  };

  // Delete sticker on double-click
  const deleteSticker = (id) => {
    setStickers((prevStickers) =>
      prevStickers.filter((sticker) => sticker.id !== id)
    );  
  };

  // Download canvas as PNG
  const downloadCanvas = () => {
    const dataURL = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <StickerButton imageSrc="/stickers/drawing.png" onClick={addSticker} />
        <StickerButton imageSrc="/stickers/pottery.png" onClick={addSticker} />
        <StickerButton imageSrc="/stickers/thinking.png" onClick={addSticker} />
        <button className="download-btn" onClick={downloadCanvas}>
          Download Canvas
        </button>
      </div>
      <div className="canvas-container">
        <Stage width={600} height={400} ref={stageRef}>
          <Layer>
            <Canvas
              stickers={stickers}
              updateStickerPosition={updateStickerPosition}
              deleteSticker={deleteSticker}
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default App;