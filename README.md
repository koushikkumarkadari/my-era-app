MyEra Sticker App
A React-based web application for the MyEra Frontend Internship Mini-Task. Users can add stickers to a 600x400 canvas, drag them, download the canvas as a PNG, delete stickers by double-clicking, and snap stickers to a 40px grid.
Features

600x400 canvas using react-konva.
Three sticker buttons to add stickers (PNG images).
Draggable stickers with grid snapping (40px grid).
Download canvas as a PNG file.
Double-click stickers to delete them.

Setup

Clone the repository:git clone <repo-url>
cd myera-sticker-app


Install dependencies:npm install


Place three 50x50 PNG images in public/stickers/ (e.g., sticker1.png, sticker2.png, sticker3.png).
Start the development server:npm start


Open http://localhost:3000 in your browser.

Dependencies

react, react-dom
react-konva, konva
use-image

Demo
[Link to a 1-minute demo video or GIF hosted on Loom]
Notes

Sticker images must be placed in public/stickers/.
The app is client-side only, with no backend or persistence.
Stickers snap to a 40px grid when added or dragged.
Double-click any sticker to remove it from the canvas.

