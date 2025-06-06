import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const StickerImage = ({ sticker, updateStickerPosition, deleteSticker }) => {
  const [image] = useImage(sticker.imageSrc);

  return (
    <Image
      image={image}
      x={sticker.x}
      y={sticker.y}
      width={50}
      height={50}
      draggable
      onDragEnd={(e) => {
        updateStickerPosition(sticker.id, e.target.x(), e.target.y());
      }}
      onDblClick={() => deleteSticker(sticker.id)}
    />
  );
};

export default StickerImage;