import React from 'react';

const StickerButton = ({ imageSrc, onClick }) => {
  return (
    <button className="sticker-btn" onClick={() => onClick(imageSrc)}>
      <img src={imageSrc} alt="sticker" width={30} height={30} />
    </button>
  );
};

export default StickerButton;