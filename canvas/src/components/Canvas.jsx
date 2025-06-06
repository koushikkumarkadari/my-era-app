import React from 'react';
import StickerImage from './StickerImage';

const Canvas = ({ stickers, updateStickerPosition, deleteSticker }) => {
  return (
    <>
      {stickers.map((sticker) => (
        <StickerImage
          key={sticker.id}
          sticker={sticker}
          updateStickerPosition={updateStickerPosition}
          deleteSticker={deleteSticker}
        />
      ))}
    </>
  );
};

export default Canvas;